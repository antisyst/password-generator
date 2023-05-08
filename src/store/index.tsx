import { configureStore } from '@reduxjs/toolkit';
import passwordGeneratorReducer, { PasswordGeneratorState } from './passwordGeneratorSlice';

interface RootState {
  passwordGenerator: PasswordGeneratorState;
}

const store = configureStore({
  reducer: {
    passwordGenerator: passwordGeneratorReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type { RootState };