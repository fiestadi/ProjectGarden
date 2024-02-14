import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { URL } from '../../components/URL/url';

export const fetchSingleProduct = createAsyncThunk(
    'product/fetchSingleProduct',
    async (id, { rejectWithValue }) => {

        try {
            const res = await fetch(`${URL}/products/${id}`)
            if (!res.ok) {
                throw new Error('Server problem')
            }
            const product = await res.json()
            return product
        } catch (error) {

             rejectWithValue(error.message)
        }

    }
);

export const fetchProductsWithDiscount = createAsyncThunk(
    'product/fetchProductsWithDiscount',
    async (_, { rejectWithValue }) => {
      try {
        const res = await fetch(`${URL}/products/allsale`);
        if (!res.ok) {
          throw new Error('Server problem');
        }
        const productsWithDiscount = await res.json();
        return productsWithDiscount;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  );
  
export const singleProductSlice = createSlice({
   
   name: 'item',
    initialState: {
        item: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
                state.item = payload
                state.status = 'resolve'
            })
            .addCase(fetchSingleProduct.rejected, (state, { payload }) => {
                state.status = 'rejected'
                state.error = payload
            })
            .addCase(fetchProductsWithDiscount.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(fetchProductsWithDiscount.fulfilled, (state, { payload }) => {
              state.item = payload;
              state.status = 'resolved';
          })
          .addCase(fetchProductsWithDiscount.rejected, (state, { payload }) => {
              state.status = 'rejected';
              state.error = payload;
    
});
    }
  });

export default singleProductSlice.reducer