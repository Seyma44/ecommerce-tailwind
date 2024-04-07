import { gql } from '@apollo/client';

// Add to cart mutation
export const ADD_TO_CART = gql`
  mutation addToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      name
      price
    }
  }
`;

// Remove from cart mutation
export const REMOVE_FROM_CART = gql`
  mutation removeFromCart($productId: ID!) {
    removeFromCart(productId: $productId) {
      id
      name
      price
    }
  }
`;

// Update cart item quantity mutation
export const UPDATE_CART_ITEM_QUANTITY = gql`
  mutation updateCartItemQuantity($productId: ID!, $quantity: Int!) {
    updateCartItemQuantity(productId: $productId, quantity: $quantity) {
      id
      name
      price
      quantity
    }
  }
`;

// Clear cart mutation
export const CLEAR_CART = gql`
  mutation clearCart {
    clearCart {
      id
      name
      price
    }
  }
`;

// Checkout mutation
export const CHECKOUT = gql`
  mutation checkout($paymentMethod: String!, $shippingAddress: String!) {
    checkout(paymentMethod: $paymentMethod, shippingAddress: $shippingAddress) {
      id
      status
    }
  }
`;

// User authentication mutations
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation registerUser($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser {
      success
    }
  }
`;

