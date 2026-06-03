import { configureStore } from "@reduxjs/toolkit";
import documentSlice from "../features/documentSlice";

export const store = configureStore({
    reducer: {
        document: documentSlice,
    },
});
