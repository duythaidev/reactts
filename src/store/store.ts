import { useDispatch, useSelector } from 'react-redux';
import countReducer from './reducers/countReducer';
import { combineReducers, createStore } from "redux";
import accountReducer from './reducers/accountReducer';

const rootReducer = combineReducers({
  count: countReducer,
  account: accountReducer
});


export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;