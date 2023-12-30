import {
  Action,
  AnyAction,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import type {} from 'redux-thunk/extend-redux';

import rootReducer from '@/redux/reducers';

const makeStore = ({ reduxWrapperMiddleware }: any) =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      [
        ...getDefaultMiddleware(),
        process.env.NODE_ENV === 'development' ? logger : null,
        reduxWrapperMiddleware,
      ].filter(Boolean) as any,
  });

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
