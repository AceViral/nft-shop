import { AppDispatch } from "../store";
import { getProductsData } from "./api";
import { productSlice } from "./ProductsSlice";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
   try {
      dispatch(productSlice.actions.productsFetching());
      const { data } = await getProductsData();
      dispatch(
         productSlice.actions.productsFetchingSuccess(data.data.products)
      );
   } catch (error: any) {
      dispatch(productSlice.actions.productsFetchError(error.message));
   }
};
