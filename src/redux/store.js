import { configureStore } from "@reduxjs/toolkit";

import home from "./slices/homeSlice";
import cart from "./slices/cartSlice";
import fetch from "./slices/fetchSlice";
import overlay from "./slices/overlaySlice";

export const store = configureStore({
    reducer: {
        home,
        cart,
        fetch,
        overlay
    }
});
