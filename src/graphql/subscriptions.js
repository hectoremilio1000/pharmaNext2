/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDETALLEPEDIDO = /* GraphQL */ `
  subscription OnCreateDETALLEPEDIDO(
    $filter: ModelSubscriptionDETALLEPEDIDOFilterInput
  ) {
    onCreateDETALLEPEDIDO(filter: $filter) {
      id
      cantidad
      precio
      subtotal
      pedidoID
      inventarioID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDETALLEPEDIDO = /* GraphQL */ `
  subscription OnUpdateDETALLEPEDIDO(
    $filter: ModelSubscriptionDETALLEPEDIDOFilterInput
  ) {
    onUpdateDETALLEPEDIDO(filter: $filter) {
      id
      cantidad
      precio
      subtotal
      pedidoID
      inventarioID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDETALLEPEDIDO = /* GraphQL */ `
  subscription OnDeleteDETALLEPEDIDO(
    $filter: ModelSubscriptionDETALLEPEDIDOFilterInput
  ) {
    onDeleteDETALLEPEDIDO(filter: $filter) {
      id
      cantidad
      precio
      subtotal
      pedidoID
      inventarioID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePEDIDO = /* GraphQL */ `
  subscription OnCreatePEDIDO($filter: ModelSubscriptionPEDIDOFilterInput) {
    onCreatePEDIDO(filter: $filter) {
      id
      fecha
      hora
      numero
      total
      status
      tipoEntrega
      clientesID
      DETALLEPEDIDOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePEDIDO = /* GraphQL */ `
  subscription OnUpdatePEDIDO($filter: ModelSubscriptionPEDIDOFilterInput) {
    onUpdatePEDIDO(filter: $filter) {
      id
      fecha
      hora
      numero
      total
      status
      tipoEntrega
      clientesID
      DETALLEPEDIDOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePEDIDO = /* GraphQL */ `
  subscription OnDeletePEDIDO($filter: ModelSubscriptionPEDIDOFilterInput) {
    onDeletePEDIDO(filter: $filter) {
      id
      fecha
      hora
      numero
      total
      status
      tipoEntrega
      clientesID
      DETALLEPEDIDOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCLIENTES = /* GraphQL */ `
  subscription OnCreateCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onCreateCLIENTES(filter: $filter) {
      id
      nombreCompleto
      direccion
      whats
      cp
      pass
      email
      username
      PEDIDOS {
        nextToken
        __typename
      }
      farmaciaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCLIENTES = /* GraphQL */ `
  subscription OnUpdateCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onUpdateCLIENTES(filter: $filter) {
      id
      nombreCompleto
      direccion
      whats
      cp
      pass
      email
      username
      PEDIDOS {
        nextToken
        __typename
      }
      farmaciaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCLIENTES = /* GraphQL */ `
  subscription OnDeleteCLIENTES($filter: ModelSubscriptionCLIENTESFilterInput) {
    onDeleteCLIENTES(filter: $filter) {
      id
      nombreCompleto
      direccion
      whats
      cp
      pass
      email
      username
      PEDIDOS {
        nextToken
        __typename
      }
      farmaciaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateINVENTARIO = /* GraphQL */ `
  subscription OnCreateINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onCreateINVENTARIO(filter: $filter) {
      id
      additionalDescription
      antibiotic
      availableForPickup
      brandName
      code
      configurable
      description
      eans
      exclusionCode
      hasDiscountPrice
      isLabProduct
      name
      naturalHealth
      numberOfReviews
      potentialPromotions
      presentation
      productReferences
      providerName
      purchasable
      registrationDate
      summary
      url
      priceCurrencyIso
      priceFormattedValue
      priceType
      priceValue
      categories {
        code
        name
        url
        __typename
      }
      classifications {
        code
        name
        __typename
      }
      labInfoCode
      labInfoMessage
      stockIsValueRounded
      stockLevel
      stockLevelStatus
      numero
      images {
        altText
        format
        imageType
        url
        galleryIndex
        __typename
      }
      farmaciaID
      DETALLEPEDIDOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateINVENTARIO = /* GraphQL */ `
  subscription OnUpdateINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onUpdateINVENTARIO(filter: $filter) {
      id
      additionalDescription
      antibiotic
      availableForPickup
      brandName
      code
      configurable
      description
      eans
      exclusionCode
      hasDiscountPrice
      isLabProduct
      name
      naturalHealth
      numberOfReviews
      potentialPromotions
      presentation
      productReferences
      providerName
      purchasable
      registrationDate
      summary
      url
      priceCurrencyIso
      priceFormattedValue
      priceType
      priceValue
      categories {
        code
        name
        url
        __typename
      }
      classifications {
        code
        name
        __typename
      }
      labInfoCode
      labInfoMessage
      stockIsValueRounded
      stockLevel
      stockLevelStatus
      numero
      images {
        altText
        format
        imageType
        url
        galleryIndex
        __typename
      }
      farmaciaID
      DETALLEPEDIDOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteINVENTARIO = /* GraphQL */ `
  subscription OnDeleteINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onDeleteINVENTARIO(filter: $filter) {
      id
      additionalDescription
      antibiotic
      availableForPickup
      brandName
      code
      configurable
      description
      eans
      exclusionCode
      hasDiscountPrice
      isLabProduct
      name
      naturalHealth
      numberOfReviews
      potentialPromotions
      presentation
      productReferences
      providerName
      purchasable
      registrationDate
      summary
      url
      priceCurrencyIso
      priceFormattedValue
      priceType
      priceValue
      categories {
        code
        name
        url
        __typename
      }
      classifications {
        code
        name
        __typename
      }
      labInfoCode
      labInfoMessage
      stockIsValueRounded
      stockLevel
      stockLevelStatus
      numero
      images {
        altText
        format
        imageType
        url
        galleryIndex
        __typename
      }
      farmaciaID
      DETALLEPEDIDOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateGERENTE = /* GraphQL */ `
  subscription OnCreateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onCreateGERENTE(filter: $filter) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      farmaciaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGERENTE = /* GraphQL */ `
  subscription OnUpdateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onUpdateGERENTE(filter: $filter) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      farmaciaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGERENTE = /* GraphQL */ `
  subscription OnDeleteGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onDeleteGERENTE(filter: $filter) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      farmaciaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFARMACIA = /* GraphQL */ `
  subscription OnCreateFARMACIA($filter: ModelSubscriptionFARMACIAFilterInput) {
    onCreateFARMACIA(filter: $filter) {
      id
      nombre
      direccion
      cp
      createdBy
      rfc
      contactPhone
      codSerial
      INVENTARIOS {
        nextToken
        __typename
      }
      GERENTES {
        nextToken
        __typename
      }
      CLIENTES {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateFARMACIA = /* GraphQL */ `
  subscription OnUpdateFARMACIA($filter: ModelSubscriptionFARMACIAFilterInput) {
    onUpdateFARMACIA(filter: $filter) {
      id
      nombre
      direccion
      cp
      createdBy
      rfc
      contactPhone
      codSerial
      INVENTARIOS {
        nextToken
        __typename
      }
      GERENTES {
        nextToken
        __typename
      }
      CLIENTES {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteFARMACIA = /* GraphQL */ `
  subscription OnDeleteFARMACIA($filter: ModelSubscriptionFARMACIAFilterInput) {
    onDeleteFARMACIA(filter: $filter) {
      id
      nombre
      direccion
      cp
      createdBy
      rfc
      contactPhone
      codSerial
      INVENTARIOS {
        nextToken
        __typename
      }
      GERENTES {
        nextToken
        __typename
      }
      CLIENTES {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
