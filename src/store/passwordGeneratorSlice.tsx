import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PasswordGeneratorState {
  password: string;
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

const initialState: PasswordGeneratorState = {
  password: '',
  length: 12,
  includeNumbers: true,
  includeSymbols: false,
};

const passwordGeneratorSlice = createSlice({
  name: 'passwordGenerator',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload;
    },
    setIncludeNumbers: (state, action: PayloadAction<boolean>) => {
      state.includeNumbers = action.payload;
    },
    setIncludeSymbols: (state, action: PayloadAction<boolean>) => {
      state.includeSymbols = action.payload;
    },
  },
});

export const { setPassword, setLength, setIncludeNumbers, setIncludeSymbols } = passwordGeneratorSlice.actions;

export default passwordGeneratorSlice.reducer;