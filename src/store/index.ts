import { configureStore } from "@reduxjs/toolkit";
// import staffReducer from "./slices/staffSlice";
import menuReducer from "./slices/menuSlice";

export const store = configureStore({
    reducer: {
        // staff: staffReducer,
        menu: menuReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
