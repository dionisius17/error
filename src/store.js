import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { createStoreHook } from "react-redux";

const store = createStoreHook(reducer);
//bagian ini error
export default store;
