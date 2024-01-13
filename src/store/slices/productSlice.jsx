import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import { URL } from '../../components/URL/url';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const resp = await fetch(`${URL}/products/all`)
            if (!resp.ok) {
                throw new Error('Server problem')
            }
            const products = await resp.json()
            return products.map(item => ({
                ...item,
                finalPrice: item.discount_price ?? item.price,
                show: true,
                discount: true,
            }))
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.data = payload
                state.status = 'resolve'
            })
            .addCase(fetchProducts.rejected, (state, { payload }) => {
                state.status = 'rejected'
                state.error = payload
            })
    }
})

export default productsSlice.reducer