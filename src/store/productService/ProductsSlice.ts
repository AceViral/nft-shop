import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

interface ProductsState {
   products: IProduct[];
   isLoading: boolean;
   error: string;
}

const initialState: ProductsState = {
   products: [],
   isLoading: false,
   error: "",
};

export const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {
      productsFetching(state) {
         state.isLoading = true;
      },
      productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
         state.isLoading = false;
         state.error = "";
         state.products = action.payload;
      },
      productsFetchError(state, action: PayloadAction<string>) {
         state.isLoading = false;
         state.error = action.payload;
      },
   },
});

export default productSlice.reducer;
