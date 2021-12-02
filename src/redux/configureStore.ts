import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const middleware = [thunk];
const enhancers: any[] = [];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
);

export default function configureStore(initialState: any) {
  const store = createStore(rootReducer, initialState, composedEnhancers);

  return { store };
}
