// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Stock, LaboratoryInfo, Price, Images, FeatureValues, Features, Classifications, Categories, Product } = initSchema(schema);

export {
  Stock,
  LaboratoryInfo,
  Price,
  Images,
  FeatureValues,
  Features,
  Classifications,
  Categories,
  Product
};