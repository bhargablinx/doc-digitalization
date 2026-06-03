import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    document: null,
    docData: null,
    extracting: false,
    error: null,
};

const documentSlice = createSlice({
    name: "document",
    initialState,
    reducers: {
        setDocument: (state, action) => {
            state.document = action.payload;
        },
        setDocData: (state, action) => {
            state.docData = action.payload;
        },
        startExtraction: (state) => {
            state.extracting = true;
            state.error = null;
        },
        extractionFailed: (state, action) => {
            state.error = action.payload;
            state.extracting = false;
        },

        clearDocument: (state) => {
            state.document = null;
            state.docData = null;
            state.extracting = false;
            state.error = null;
        },
    },
});

export const {
    setDocument,
    setDocData,
    startExtraction,
    extractionFailed,
    clearDocument,
} = documentSlice.actions;

export default documentSlice.reducer;
