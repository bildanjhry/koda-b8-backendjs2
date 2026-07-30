import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist"

import session from "./session.js"
import storage from "redux-persist/es/storage"

const persistReducersActionConfig = {
    key:"session",
    storage
}

const reducer = combineReducers({
    session:persistReducer(persistReducersActionConfig, session)
})

export default reducer