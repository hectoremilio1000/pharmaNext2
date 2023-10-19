import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerImageInfo = {
  readonly altText?: string | null;
  readonly format?: string | null;
  readonly imageType?: string | null;
  readonly url?: string | null;
  readonly galleryIndex?: number | null;
}

type LazyImageInfo = {
  readonly altText?: string | null;
  readonly format?: string | null;
  readonly imageType?: string | null;
  readonly url?: string | null;
  readonly galleryIndex?: number | null;
}

export declare type ImageInfo = LazyLoading extends LazyLoadingDisabled ? EagerImageInfo : LazyImageInfo

export declare const ImageInfo: (new (init: ModelInit<ImageInfo>) => ImageInfo)

type EagerFeatureInfo = {
  readonly code?: (string | null)[] | null;
  readonly comparable?: boolean | null;
  readonly name?: string | null;
  readonly range?: string | null;
  readonly values?: (string | null)[] | null;
}

type LazyFeatureInfo = {
  readonly code?: (string | null)[] | null;
  readonly comparable?: boolean | null;
  readonly name?: string | null;
  readonly range?: string | null;
  readonly values?: (string | null)[] | null;
}

export declare type FeatureInfo = LazyLoading extends LazyLoadingDisabled ? EagerFeatureInfo : LazyFeatureInfo

export declare const FeatureInfo: (new (init: ModelInit<FeatureInfo>) => FeatureInfo)

type EagerClassificationInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly features?: (FeatureInfo | null)[] | null;
}

type LazyClassificationInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly features?: (FeatureInfo | null)[] | null;
}

export declare type ClassificationInfo = LazyLoading extends LazyLoadingDisabled ? EagerClassificationInfo : LazyClassificationInfo

export declare const ClassificationInfo: (new (init: ModelInit<ClassificationInfo>) => ClassificationInfo)

type EagerCategoryInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
}

type LazyCategoryInfo = {
  readonly code?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
}

export declare type CategoryInfo = LazyLoading extends LazyLoadingDisabled ? EagerCategoryInfo : LazyCategoryInfo

export declare const CategoryInfo: (new (init: ModelInit<CategoryInfo>) => CategoryInfo)

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly additionalDescription?: string | null;
  readonly antibiotic?: boolean | null;
  readonly availableForPickup?: boolean | null;
  readonly brandName?: string | null;
  readonly code?: string | null;
  readonly configurable?: boolean | null;
  readonly description?: string | null;
  readonly eans?: (string | null)[] | null;
  readonly exclusionCode?: string | null;
  readonly hasDiscountPrice?: boolean | null;
  readonly isLabProduct?: boolean | null;
  readonly name?: string | null;
  readonly naturalHealth?: boolean | null;
  readonly numberOfReviews?: number | null;
  readonly potentialPromotions?: (string | null)[] | null;
  readonly presentation?: string | null;
  readonly productReferences?: (string | null)[] | null;
  readonly providerName?: string | null;
  readonly purchasable?: boolean | null;
  readonly registrationDate?: string | null;
  readonly summary?: string | null;
  readonly url?: string | null;
  readonly priceCurrencyIso?: string | null;
  readonly priceFormattedValue?: string | null;
  readonly priceType?: string | null;
  readonly priceValue?: number | null;
  readonly categories?: (CategoryInfo | null)[] | null;
  readonly classifications?: (ClassificationInfo | null)[] | null;
  readonly labInfoCode?: string | null;
  readonly labInfoMessage?: string | null;
  readonly stockIsValueRounded?: boolean | null;
  readonly stockLevel?: number | null;
  readonly stockLevelStatus?: string | null;
  readonly numero?: number | null;
  readonly images?: (ImageInfo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly additionalDescription?: string | null;
  readonly antibiotic?: boolean | null;
  readonly availableForPickup?: boolean | null;
  readonly brandName?: string | null;
  readonly code?: string | null;
  readonly configurable?: boolean | null;
  readonly description?: string | null;
  readonly eans?: (string | null)[] | null;
  readonly exclusionCode?: string | null;
  readonly hasDiscountPrice?: boolean | null;
  readonly isLabProduct?: boolean | null;
  readonly name?: string | null;
  readonly naturalHealth?: boolean | null;
  readonly numberOfReviews?: number | null;
  readonly potentialPromotions?: (string | null)[] | null;
  readonly presentation?: string | null;
  readonly productReferences?: (string | null)[] | null;
  readonly providerName?: string | null;
  readonly purchasable?: boolean | null;
  readonly registrationDate?: string | null;
  readonly summary?: string | null;
  readonly url?: string | null;
  readonly priceCurrencyIso?: string | null;
  readonly priceFormattedValue?: string | null;
  readonly priceType?: string | null;
  readonly priceValue?: number | null;
  readonly categories?: (CategoryInfo | null)[] | null;
  readonly classifications?: (ClassificationInfo | null)[] | null;
  readonly labInfoCode?: string | null;
  readonly labInfoMessage?: string | null;
  readonly stockIsValueRounded?: boolean | null;
  readonly stockLevel?: number | null;
  readonly stockLevelStatus?: string | null;
  readonly numero?: number | null;
  readonly images?: (ImageInfo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}