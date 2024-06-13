import { createSlice } from '@reduxjs/toolkit';

const appConfigSlice = createSlice({
    name : "appConfig",
    initialState: {
        selectedLang: "en",
    },
    reducers:{
        changeSelectedLang : (state, action) => {
            state.selectedLang = action.payload;
        },
    }
});

export const {changeSelectedLang} = appConfigSlice.actions;

export default appConfigSlice.reducer;
