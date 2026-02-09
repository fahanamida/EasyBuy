import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,payload)=>{
            if(state.find(item=>item.id==payload.payload.id)){
                Swal.fire("Product is already exist in wishlist");
            }
            else{
                state.push(payload.payload)
            }
        },
        removeFromWishlist:(state,payload)=>{
            return state=state.filter(item=>item.id!=payload.payload)
        }
    }
})

export default wishlistSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions