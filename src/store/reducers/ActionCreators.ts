import axios from "axios";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
   try {
      dispatch(userSlice.actions.usersFetching());
      const { data } = await axios.get("https://artisant.io/api/products");
      console.log(data);
      dispatch(userSlice.actions.usersFetchingSuccess(data.data.products));
   } catch (error: any) {
      dispatch(userSlice.actions.usersFetchError(error.message));
   }
};
