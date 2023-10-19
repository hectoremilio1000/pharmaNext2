const aws = require('aws-sdk');
const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
const dynamodb = new aws.DynamoDB.DocumentClient();

const addToGroup = async ({ GroupName, UserPoolId, Username }) => {
  const groupParams = {
    GroupName,
    UserPoolId,
  };

  const addUserParams = {
    GroupName,
    UserPoolId,
    Username,
  };

  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    console.log(`[ADD-TO-GROUP] Found the group ${GroupName}`);
  } catch (e) {
    console.log(`[ADD-TO-GROUP] Creating the group ${GroupName}`);
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    console.log(`[ADD-TO-GROUP] Created the group ${GroupName}`);
  }

  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
  console.log(`[ADD-TO-GROUP] Added ${Username} to the group ${GroupName}`);
}

const insertClientInDynamoDB = async ({ Username }) => {
  const params = {
    TableName: 'CLIENTES',
    Item: {
      'id': Username,
    },
  };

  try {
    await dynamodb.put(params).promise();
    console.log(`[DYNAMODB] Inserted client ${Username}`);
  } catch (error) {
    console.error(`[DYNAMODB] Failed to insert client ${Username}`, error);
  }
}

exports.handler = async event => {
  let groupName = 'CLIENTES'; // Nombre del grupo en Cognito

  await addToGroup({
    GroupName: groupName,
    UserPoolId: event.userPoolId,
    Username: event.userName
  });

  await insertClientInDynamoDB({ Username: event.userName });

  return event;
};
