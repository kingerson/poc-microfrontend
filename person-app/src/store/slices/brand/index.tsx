import { createSlice } from '@reduxjs/toolkit';
import { BrandDeffault } from './initialValues';

export const brandSlice = createSlice({
  name: 'brand',
  initialState: BrandDeffault,
  reducers: {
    setRegisters: (state, action) => {
      const data = action.payload;
      state.registers = data;
    },
    setMallSelected: (state, action) => {
      const data = action.payload;
      state.selectedMall = data;
    }
  }
});

export const { setRegisters, setMallSelected } = brandSlice.actions;

export default brandSlice.reducer;
