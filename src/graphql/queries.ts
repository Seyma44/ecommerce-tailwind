// queries.ts
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($productId: ID!) {
    product(id: $productId) {
      id
      name
      price
    }
  }
`;
