import counterReducer from './reducers/countReducer';
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
