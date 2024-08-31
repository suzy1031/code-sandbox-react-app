import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import photoReducer from "./slice/photos";
import counterReducer from "./slice/counter";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    photos: photoReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
