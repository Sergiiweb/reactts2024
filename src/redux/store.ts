import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {userReducer} from "./slices/userSlice";

const store = configureStore({
    reducer:{
        users: userReducer,
    }
});

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export {
    store,
    useAppDispatch,
    useAppSelector
}
