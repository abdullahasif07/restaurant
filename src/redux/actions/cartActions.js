import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../types/cartTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});

export const updateCartItem = (item) => ({
  type: UPDATE_CART_ITEM,
  payload: item
});
