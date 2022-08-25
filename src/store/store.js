import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navSlice'
import profileReducer from "./profileSlice";
import otherProfileReducer from "./otherProfileSlice";
import marketGoodsReducer from "./marketGoodsSlice";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import registrationReducer from "./registrationSlice"

const store = configureStore({
    reducer: {
        nav: navReducer,
        profile: profileReducer,
        otherProfile: otherProfileReducer,
        marketGoods: marketGoodsReducer,
        user: userReducer,
        auth: authReducer,
        registration: registrationReducer
    }
})

export default store;