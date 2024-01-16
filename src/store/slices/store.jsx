import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import productsReducer from './productSlice';
import singleProductReducer from './singleProductSlice';
import basketReducer from '../slices/basketSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        product: singleProductReducer,
        basket: basketReducer,
    }
})
export default store