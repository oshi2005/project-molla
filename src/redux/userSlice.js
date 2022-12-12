import { createSlice } from "@reduxjs/toolkit";
import { dataCategories } from "../Sdata";

export const cartSlice = createSlice({
  name: "counter",
  initialState: {
    items: dataCategories,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    addNewItems: (state, action) => {
      let cartEmpty = {
        id: action.payload.id,
        quantity: 1,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
      };
      console.log("🚀 ~ file: userSlice.js:21 ~ cartEmpty", cartEmpty);
      state.items.push(cartEmpty);
    },
  },

  deleteItems: (state, action) => {
    console.log("deletedItems");
  },
});

// Action creators are generated for each case reducer function
export const { addNewItems, deleteItems } = cartSlice.actions;

export default cartSlice.reducer;

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { dataCategories } from "../Sdata";
// import { createSelector } from "@reduxjs/toolkit";

// const name = " cart";
// const initialState = {
//   items: dataCategories,
//   totalAmount: 0,
//   totalCount: 0,
// };
// console.log("🚀 ~ file: userSlice.js:9 ~ dataCategories", dataCategories);
// export const userSlice = createSlice({
//   name,
//   initialState,
//   reducers: {
//     addItemCart: (state, action) => {
//       console.log("Hello");
//     },
//     deleteItemCart: (state, action) => {
//       console.log("Delete");
//     },
//   },
// });
// const selector = (state) => state[name]; /* mặc định có */

// const dataCart = createSelector(selector, ({ items }) => items);

// export const cartSelectors = { dataCart };

// export const { addItemCart, deleteItemCart } = userSlice.actions;

// export const cartActions = {
//   addItemCart,
//   deleteItemCart,
// };

// export default userSlice.reducer;
