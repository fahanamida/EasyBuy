import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./slice/productSlice"
import wishlistSliceReducer from './slice/wishlistSlice'
import cartSliceReducer from './slice/cartSlice'

const store=configureStore({
    reducer:{
        productReducer:productSliceReducer,
        wishlistReducer:wishlistSliceReducer,
        cartReducer:cartSliceReducer
    }
})

export default store