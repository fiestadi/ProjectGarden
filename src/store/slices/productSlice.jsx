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
                finalPrice: item.discont_price ?? item.price,
                show: true,
                discount: true,
            }));
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
);
export const fetchAllProductsList = createAsyncThunk(
    'products/fetchAllProductsList',
    async (type, { dispatch }) => {
      const response = await fetch(`${URL}/products/all`);
      const data = await response.json();
  
      dispatch(addProductsList({ data, category: {} }));
  
      if (type === 'sale') {
        dispatch(addProductsListWhithSale());
      }
    }
  );
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        productslist: [],
        showDiscountedProducts: false,
        status: 'idle',
        error: null,
    },
    
    reducers: {
        sort: (state, action) => {
            if (action.type === 'products/sort') {
                state.data.sort((a, b) => {
                    const sortOrder = action.payload === 1 ? 1 : -1;
                    return sortOrder * (a.finalPrice - b.finalPrice);
                });
            }
        },
    
        addProductsListWhithSale(state) {
			state.data = state.data.filter(
                (product) => product.discont_price !== null
			
			);
		},
        addProductsList(state, action) {
			if (action.payload.category.title) {
				state.pageTitle = action.payload.category.title;
				state.productslist = action.payload.data.map((product) => ({
					...product,
					rangeVisible: true,
					discontVisible: true,
				}));
			} else {
				state.pageTitle = { title: 'All products' };
				state.productslist = action.payload.data.map((product) => ({
					...product,
					rangeVisible: true,
					discontVisible: true,
				}));
			}
		},
        searchByPrice: (state, { payload }) => {
            const { from, to } = payload;
            state.data = state.data.map(el =>
                ({ ...el, show: el.finalPrice <= to && el.finalPrice >= from }));
        },
        filterDiscount: (state, { payload }) => {
            if (payload) {
                state.data = state.data.map((elem) => {
                    if (elem.discont_price == null) {
                        elem.discount = false;
                    }
                    return elem;
                });
            } else {
                state.data = state.data.map((elem) => ({ ...elem, discount: true }));
            }
        },
        resetFilter: (state) => {
            state.data = state.data.map(el => ({ ...el, show: true, discount: true }))
        },
    
  filterByPrice: (state, action) => {
            const { from, to } = action.payload;
            state.data = state.data.map(el =>
                ({ ...el, show: el.finalPrice <= to && el.finalPrice >= from }));
        },
        toggleShowDiscountedProducts: (state) => {
            state.showDiscountedProducts = !state.showDiscountedProducts;
          },
    },

 extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.status = 'resolved';
            })
            .addCase(fetchProducts.rejected, (state, { payload }) => {
                state.status = 'rejected';
                state.error = payload;
            });
        }
    }); 

export const { sort, searchByPrice, filterDiscount, resetFilter,addProductsListWhithSale,addProductsList,filterByPrice,toggleShowDiscountedProducts } = productsSlice.actions
export default productsSlice.reducer