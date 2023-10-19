// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, ImageInfo, FeatureInfo, ClassificationInfo, CategoryInfo } = initSchema(schema);

export {
  Product,
  ImageInfo,
  FeatureInfo,
  ClassificationInfo,
  CategoryInfo
};