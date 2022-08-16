import { gql } from "@apollo/client";

export const GET_PROD = gql`
  query products_fetch {
    product {
    id
    name
    inStock
    gallery
    description
    category
    attributes{
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency{
        label
        symbol
      }
      amount
    }
    brand
  }
  }
`;

