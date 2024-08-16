import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../types/cartTypes';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
    console.log('Adding item to cart:', action.payload); // Debugging
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
