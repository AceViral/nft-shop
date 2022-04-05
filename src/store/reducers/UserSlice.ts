import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../models/IData";

interface UserState {
   data: IData[];
   isLoading: boolean;
   error: string;
}

const initialState: UserState = {
   data: [],
   isLoading: false,
   error: "",
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      usersFetching(state) {
         state.isLoading = true;
      },
      usersFetchingSuccess(state, action: PayloadAction<IData[]>) {
         state.isLoading = false;
         state.error = "";
         state.data = action.payload;
      },
      usersFetchError(state, action: PayloadAction<string>) {
         state.isLoading = false;
         state.error = action.payload;
      },
   },
});

export default userSlice.reducer;
