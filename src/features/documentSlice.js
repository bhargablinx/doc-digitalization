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
            console.log("Document set");
        },
        setDocData: (state, action) => {
            console.log("Here is your extracted data: ", { name: "Bhargab" });
        },
    },
});

export const { setDocument, setDocData } = documentSlice.actions;

export default documentSlice.reducer;
