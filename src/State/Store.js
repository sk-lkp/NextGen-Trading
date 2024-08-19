
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";

import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import coinReducer from "./Coin/Reducer";

const rootReducers=combineReducers({
    auth:authReducer,
    coin:coinReducer,
});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))