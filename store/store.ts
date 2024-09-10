import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './placesSlice'; // import your slice reducer

export const store = configureStore({
  reducer: {
    places: placesReducer,// add your slice reducers here
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;