import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BalanceState {
  value: number;
}

const initialState: BalanceState = {
  value: 0,
};

const balance = createSlice({
  name: "balance",
  initialState,
  reducers: {
    updateBalance: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { updateBalance } = balance.actions;
export default balance.reducer;
