import { configureStore } from '@reduxjs/toolkit';
import createNoteSlicer from './notes/createNoteSlicer';

export const store = configureStore({
  reducer: {
    notes: createNoteSlicer,
  },
});
