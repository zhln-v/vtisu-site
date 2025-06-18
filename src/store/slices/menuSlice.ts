// store/slices/menuSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { menuItemType } from "../../types/menuItemType";
import { transformMenu } from "../../components/Menu/transformMenu";

interface MenuState {
    items: menuItemType[];
    loading: boolean;
    error: string | null;
}

const initialState: MenuState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchMenuItems = createAsyncThunk<
    menuItemType[],
    void,
    { rejectValue: string }
>("menu/fetchMenuItems", async (_, { rejectWithValue }) => {
    try {
        const res = await fetch("/api");
        if (!res.ok) throw new Error("Ошибка загрузки меню");
        const data = await res.json();
        return transformMenu(data);
    } catch (err: any) {
        return rejectWithValue(err.message || "Неизвестная ошибка");
    }
});

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "Ошибка загрузки меню";
            });
    },
});

export default menuSlice.reducer;
