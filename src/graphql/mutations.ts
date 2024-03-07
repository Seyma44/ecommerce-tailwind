// mutations.ts
import { gql } from '@apollo/client';

// Define your mutation queries here
export const ADD_TO_CART = gql`
  mutation addToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      name
      price
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation removeFromCart($productId: ID!) {
    removeFromCart(productId: $productId) {
      id
      name
      price
    }
  }
`;

export const CHECKOUT = gql`
  mutation checkout($paymentMethod: String!, $shippingAddress: String!) {
    checkout(paymentMethod: $paymentMethod, shippingAddress: $shippingAddress) {
      id
      status
    }
  }
`;


