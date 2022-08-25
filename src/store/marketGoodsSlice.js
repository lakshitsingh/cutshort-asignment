import { createSlice } from "@reduxjs/toolkit";
import record from './record.json';

const marketGoods = record.marketGoods;

const marketGoodsSlice = createSlice({
    name: "marketGoods",
    initialState: {
        marketGoods
    },

    reducers: {
        setMarketGoods(state, action) {
            state.action = action.payload
        }
    }
})

export const { setMarketGoods } = marketGoodsSlice.actions

export default marketGoodsSlice.reducer