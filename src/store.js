import {configureStore} from '@reduxjs/toolkit';
import infoReducer from './slices/infoSlice';

export const store = configureStore({
   reducer: {
      info: infoReducer,
   }
});