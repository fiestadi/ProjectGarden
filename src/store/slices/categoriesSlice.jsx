import { createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { URL } from '../../components/URL/url';
export const fetchCategories = createAsyncThunk('categories/fetchCategories',
async (_, {rejectWithValue}) =>{
   // rejectWithValue= promis, vozvrashaet soobshenie ob oasibke 
   try{
      const response = await fetch(`${URL}/categories/all`)
      if (!response.ok){
         throw new Error('Server error')
      }
      const data = await response.json()
      return data
   }catch(error) {
      return rejectWithValue(error.message)
   }
})
export const categoriesSlice = createSlice({
   name:'categories',
   initialState: {
      list:[]
   },
   reducers: {},
   extraReducers: (builder) => {
       builder
           .addCase(fetchCategories.pending, (state) => {
               state.status = 'loading'
           })
           .addCase(fetchCategories.fulfilled, (state, { payload }) => {
               state.list = payload
               state.status = 'resolve'
           })
           .addCase(fetchCategories.rejected, (state, { payload }) => {
               state.status = 'rejected'
               state.error = payload
           })
   }
})
export default categoriesSlice.reducer