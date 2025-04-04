import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
};

// Thunk para obtener servicios de la API
export const servicesFetch = createAsyncThunk("services/servicesFetch", async () => {
    try {
        const response = await axios.get("http://localhost:5000/services"); // Cambia la URL si usas otro backend
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(servicesFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(servicesFetch.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "success";
            })
            .addCase(servicesFetch.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export default servicesSlice.reducer;
