const aws = require('aws-sdk');
const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
const dynamodbDocumentClient = new aws.DynamoDB.DocumentClient();

const insertClientInDynamoDB = async ({ Username }) => {
  const tableName = 'CLIENTESS';
  const params = {
    TableName: tableName,
    Item: {
      'id': Username,  // Asumo que deseas usar el Username como ID. Si tienes otro ID, ajusta aquí.
      'username': Username,
      'nombre': 'Especifica el nombre aquí'  // Puedes especificar el nombre aquí o ajustar según tu lógica.
    },
  };

  try {
    await dynamodbDocumentClient.put(params).promise();
    console.log(`[DYNAMODB] Inserted client ${Username}`);
  } catch (error) {
    console.error(`[DYNAMODB] Failed to insert client ${Username}`, error);
  }
}

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
