import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerStock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isValueRounded?: boolean | null;
  readonly stockLevel?: number | null;
  readonly stockLevelStatus?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isValueRounded?: boolean | null;
  readonly stockLevel?: number | null;
  readonly stockLevelStatus?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stock = LazyLoading extends LazyLoadingDisabled ? EagerStock : LazyStock

export declare const Stock: (new (init: ModelInit<Stock>) => Stock) & {
  copyOf(source: Stock, mutator: (draft: MutableModel<Stock>) => MutableModel<Stock> | void): Stock;
}

type EagerLaboratoryInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LaboratoryInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLaboratoryInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LaboratoryInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LaboratoryInfo = LazyLoading extends LazyLoadingDisabled ? EagerLaboratoryInfo : LazyLaboratoryInfo

export declare const LaboratoryInfo: (new (init: ModelInit<LaboratoryInfo>) => LaboratoryInfo) & {
  copyOf(source: LaboratoryInfo, mutator: (draft: MutableModel<LaboratoryInfo>) => MutableModel<LaboratoryInfo> | void): LaboratoryInfo;
}

type EagerPrice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Price, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currencyIso?: string | null;
  readonly formattedValue?: string | null;
  readonly priceType?: string | null;
  readonly value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Price, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currencyIso?: string | null;
  readonly formattedValue?: string | null;
  readonly priceType?: string | null;
  readonly value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Price = LazyLoading extends LazyLoadingDisabled ? EagerPrice : LazyPrice

export declare const Price: (new (init: ModelInit<Price>) => Price) & {
  copyOf(source: Price, mutator: (draft: MutableModel<Price>) => MutableModel<Price> | void): Price;
}

type EagerImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Images, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly altText?: string | null;
  readonly format?: string | null;
  readonly imageType?: string | null;
  readonly url?: string | null;
  readonly galleryIndex?: number | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Images, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly altText?: string | null;
  readonly format?: string | null;
  readonly imageType?: string | null;
  readonly url?: string | null;
  readonly galleryIndex?: number | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Images = LazyLoading extends LazyLoadingDisabled ? EagerImages : LazyImages

export declare const Images: (new (init: ModelInit<Images>) => Images) & {
  copyOf(source: Images, mutator: (draft: MutableModel<Images>) => MutableModel<Images> | void): Images;
}

type EagerFeatureValues = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeatureValues, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly featuresID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeatureValues = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeatureValues, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly featuresID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FeatureValues = LazyLoading extends LazyLoadingDisabled ? EagerFeatureValues : LazyFeatureValues

export declare const FeatureValues: (new (init: ModelInit<FeatureValues>) => FeatureValues) & {
  copyOf(source: FeatureValues, mutator: (draft: MutableModel<FeatureValues>) => MutableModel<FeatureValues> | void): FeatureValues;
}

type EagerFeatures = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Features, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly comparable?: string | null;
  readonly name?: string | null;
  readonly range?: boolean | null;
  readonly classificationsID: string;
  readonly FeatureValues?: (FeatureValues | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeatures = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Features, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly comparable?: string | null;
  readonly name?: string | null;
  readonly range?: boolean | null;
  readonly classificationsID: string;
  readonly FeatureValues: AsyncCollection<FeatureValues>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Features = LazyLoading extends LazyLoadingDisabled ? EagerFeatures : LazyFeatures

export declare const Features: (new (init: ModelInit<Features>) => Features) & {
  copyOf(source: Features, mutator: (draft: MutableModel<Features>) => MutableModel<Features> | void): Features;
}

type EagerClassifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly productID: string;
  readonly Features?: (Features | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClassifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly productID: string;
  readonly Features: AsyncCollection<Features>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Classifications = LazyLoading extends LazyLoadingDisabled ? EagerClassifications : LazyClassifications

export declare const Classifications: (new (init: ModelInit<Classifications>) => Classifications) & {
  copyOf(source: Classifications, mutator: (draft: MutableModel<Classifications>) => MutableModel<Classifications> | void): Classifications;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}

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
  readonly Categories?: (Categories | null)[] | null;
  readonly Classifications?: (Classifications | null)[] | null;
  readonly Images?: (Images | null)[] | null;
  readonly Price?: Price | null;
  readonly LaboratoryInfo?: LaboratoryInfo | null;
  readonly Stock?: Stock | null;
  readonly basePrice?: Price | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productPriceId?: string | null;
  readonly productLaboratoryInfoId?: string | null;
  readonly productStockId?: string | null;
  readonly productBasePriceId?: string | null;
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
  readonly Categories: AsyncCollection<Categories>;
  readonly Classifications: AsyncCollection<Classifications>;
  readonly Images: AsyncCollection<Images>;
  readonly Price: AsyncItem<Price | undefined>;
  readonly LaboratoryInfo: AsyncItem<LaboratoryInfo | undefined>;
  readonly Stock: AsyncItem<Stock | undefined>;
  readonly basePrice: AsyncItem<Price | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productPriceId?: string | null;
  readonly productLaboratoryInfoId?: string | null;
  readonly productStockId?: string | null;
  readonly productBasePriceId?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}