const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { productId, quantity, singleProduct } = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.productId === productId
      );

      if (existingItemIndex !== -1) {
        // If the product already exists in the cart, update the quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // If the product is not in the cart, add it
        return [...state, { productId, quantity, singleProduct }];
      }

    case "UPDATE_QUANTITY":
      const { productId: updateProductId, newQuantity } = action.payload;
      const updatedCart = state.map((item) =>
        item.productId === updateProductId
          ? { ...item, quantity: newQuantity }
          : item
      );
      return updatedCart;

    case "DELETE_ITEM_FROM_CART":
      const newCart = state.filter(
        (item) => item.productId !== action.payload.productId
      );
      return newCart;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
