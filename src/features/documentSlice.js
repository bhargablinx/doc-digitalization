import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    document: null,
    docData: null,
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
    },
});

export const { setDocument, setDocData } = documentSlice.actions;

export default documentSlice.reducer;
