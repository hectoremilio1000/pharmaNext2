/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDETALLEPEDIDO = /* GraphQL */ `
  mutation CreateDETALLEPEDIDO(
    $input: CreateDETALLEPEDIDOInput!
    $condition: ModelDETALLEPEDIDOConditionInput
  ) {
    createDETALLEPEDIDO(input: $input, condition: $condition) {
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
export const updateDETALLEPEDIDO = /* GraphQL */ `
  mutation UpdateDETALLEPEDIDO(
    $input: UpdateDETALLEPEDIDOInput!
    $condition: ModelDETALLEPEDIDOConditionInput
  ) {
    updateDETALLEPEDIDO(input: $input, condition: $condition) {
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
export const deleteDETALLEPEDIDO = /* GraphQL */ `
  mutation DeleteDETALLEPEDIDO(
    $input: DeleteDETALLEPEDIDOInput!
    $condition: ModelDETALLEPEDIDOConditionInput
  ) {
    deleteDETALLEPEDIDO(input: $input, condition: $condition) {
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
export const createPEDIDO = /* GraphQL */ `
  mutation CreatePEDIDO(
    $input: CreatePEDIDOInput!
    $condition: ModelPEDIDOConditionInput
  ) {
    createPEDIDO(input: $input, condition: $condition) {
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
export const updatePEDIDO = /* GraphQL */ `
  mutation UpdatePEDIDO(
    $input: UpdatePEDIDOInput!
    $condition: ModelPEDIDOConditionInput
  ) {
    updatePEDIDO(input: $input, condition: $condition) {
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
export const deletePEDIDO = /* GraphQL */ `
  mutation DeletePEDIDO(
    $input: DeletePEDIDOInput!
    $condition: ModelPEDIDOConditionInput
  ) {
    deletePEDIDO(input: $input, condition: $condition) {
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
export const createCLIENTES = /* GraphQL */ `
  mutation CreateCLIENTES(
    $input: CreateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    createCLIENTES(input: $input, condition: $condition) {
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
export const updateCLIENTES = /* GraphQL */ `
  mutation UpdateCLIENTES(
    $input: UpdateCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    updateCLIENTES(input: $input, condition: $condition) {
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
export const deleteCLIENTES = /* GraphQL */ `
  mutation DeleteCLIENTES(
    $input: DeleteCLIENTESInput!
    $condition: ModelCLIENTESConditionInput
  ) {
    deleteCLIENTES(input: $input, condition: $condition) {
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
export const createINVENTARIO = /* GraphQL */ `
  mutation CreateINVENTARIO(
    $input: CreateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    createINVENTARIO(input: $input, condition: $condition) {
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
export const updateINVENTARIO = /* GraphQL */ `
  mutation UpdateINVENTARIO(
    $input: UpdateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    updateINVENTARIO(input: $input, condition: $condition) {
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
export const deleteINVENTARIO = /* GraphQL */ `
  mutation DeleteINVENTARIO(
    $input: DeleteINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    deleteINVENTARIO(input: $input, condition: $condition) {
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
export const createGERENTE = /* GraphQL */ `
  mutation CreateGERENTE(
    $input: CreateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    createGERENTE(input: $input, condition: $condition) {
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
export const updateGERENTE = /* GraphQL */ `
  mutation UpdateGERENTE(
    $input: UpdateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    updateGERENTE(input: $input, condition: $condition) {
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
export const deleteGERENTE = /* GraphQL */ `
  mutation DeleteGERENTE(
    $input: DeleteGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    deleteGERENTE(input: $input, condition: $condition) {
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
export const createFARMACIA = /* GraphQL */ `
  mutation CreateFARMACIA(
    $input: CreateFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    createFARMACIA(input: $input, condition: $condition) {
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
export const updateFARMACIA = /* GraphQL */ `
  mutation UpdateFARMACIA(
    $input: UpdateFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    updateFARMACIA(input: $input, condition: $condition) {
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
export const deleteFARMACIA = /* GraphQL */ `
  mutation DeleteFARMACIA(
    $input: DeleteFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    deleteFARMACIA(input: $input, condition: $condition) {
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
