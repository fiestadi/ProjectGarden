import { createSlice } from '@reduxjs/toolkit';
const calculateTotalSumm = (list) => {
	return list.reduce((total, item) => {
	  const itemPrice = item.discont_price || item.price;
	  return total + itemPrice * item.amount;
	}, 0).toFixed(2);
 };
 const updateLocalStorage = (list, amount) => {
	const totalSumm = calculateTotalSumm(list);
 
	const data = {
	  BasketList: list,
	  totalAmount: amount,
	  totalSumm: +totalSumm,
	};
 
	localStorage.setItem('basket', JSON.stringify(data));
 };
 
 const localStorageData = JSON.parse(localStorage.getItem('basket'));
 
 const BasketSlice = createSlice({
	name: 'basket',
 
	initialState: {
BasketList: localStorageData?.BasketList || [],
  totalAmount: +localStorageData?.totalAmount || 0,
  totalSumm: +localStorageData?.totalSumm || 0,
  isModalVisible: false,
	},
 
	reducers: {
	  addProductToCart(state, action) {
		 state.totalAmount += 1;
		 const itemPrice = action.payload.discont_price || action.payload.price;
  const tempTotalSumm = state.totalSumm + itemPrice;
  state.totalSumm = +tempTotalSumm.toFixed(2);

  const index = state.BasketList.findIndex(
    (item) => item.id === action.payload.id
  );
  if (index === -1) {
    state.BasketList.unshift({ ...action.payload, amount: 1 });
  } else {
    state.BasketList[index].amount += 1;
  }
  updateLocalStorage(state.BasketList, state.totalAmount, state.totalSumm);
},
incrementProductInCart(state, action) {
	const targetProduct = state.BasketList.find(
	  (item) => action.payload === item.id
	);

	if (targetProduct) {
	  targetProduct.amount += 1;
	  state.totalAmount += 1;
	  const incrTotalSumm =
		 state.totalSumm + (targetProduct.discont_price || targetProduct.price);
	  state.totalSumm = +incrTotalSumm.toFixed(2);
	  updateLocalStorage(state.BasketList, state.totalAmount, state.totalSumm);
	}
 },
	
decrementProductInCart(state, action) {
			const tempProduct = state.BasketList.find(
				(item) => action.payload === item.id
			);
			if (tempProduct.amount > 0){
			tempProduct.amount = tempProduct.amount - 1;
			state.totalAmount = state.totalAmount - 1;
			const decrTotalSumm =
				state.totalSumm - (tempProduct.discont_price || tempProduct.price);
			state.totalSumm = +decrTotalSumm.toFixed(2);
			}
			state.BasketList = state.BasketList.filter((item) => item.amount !== 0);
			updateLocalStorage(state.BasketList, state.totalAmount, state.totalSumm);
		},

		removeProductFromCartById(state, action) {
			const tempUnit = state.BasketList.find((el) => action.payload === el.id);

			const targetSumm =
				state.totalSumm -
				(tempUnit.discont_price || tempUnit.price) * tempUnit.amount;
			state.totalSumm = +targetSumm.toFixed(2);

			state.totalAmount = state.totalAmount - tempUnit.amount;
			tempUnit.amount = 0;

			state.BasketList = state.BasketList.filter(
				(product) => product.id !== action.payload
			);
			updateLocalStorage(state.BasketList, state.totalAmount, state.totalSumm);
		},

		removeAllProductsFromCart(state) {
			state.BasketList = [];
			state.totalAmount = 0;
			state.totalSumm = 0;

			updateLocalStorage(state.BasketList, state.totalAmount, state.totalSumm);
		},
			setModalVisibility(state, action) {
				state.isModalVisible = action.payload;
		},
		clearBasket(state) {
			state.BasketList = [];
			state.totalAmount = 0;
			state.totalSumm = 0;
			state.isModalVisible = false;
		 },
	},
});

export const {
	addProductToCart,
	decrementProductInCart,
	removeProductFromCartById,
	removeAllProductsFromCart,
	setModalVisibility,
	clearBasket,
	incrementProductInCart
} = BasketSlice.actions;
export const selectIsModalVisible = (state) => state.basket.isModalVisible;
export default BasketSlice.reducer;
 