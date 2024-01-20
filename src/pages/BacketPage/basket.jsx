import React, { useState,useEffect } from 'react';
import styles from './basket.module.css'
import BasketList from '../../components/basketList/basketList';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { setModalVisibility,selectIsModalVisible,clearBasket } from '../../store/slices/basketSlice';
import Order from '../../components/order/order';
import  Modal  from '../../components/modal/modal';
import BasketEmpty from '../../components/basketEmpty/basketEmpty';


const BasketPage = () => {
	const dispatch = useDispatch();
  const isModalVisible = useSelector(selectIsModalVisible);
  const [isModalClosed, setIsModalClosed] = useState(false);

  const handleModalClose = () => {
	dispatch(setModalVisibility(false));
	dispatch(clearBasket());
	setIsModalClosed(true);
	
 };
  	
	const totalAmount = useSelector((state) => state.basket.totalAmount);
	const totalSumm = useSelector((state) => state.basket.totalSumm);

	useEffect(() => {
		document.title = "Cart";
	}, []);
	
	return (
		<section>

			<div className={styles.container}>
				<h1 className={styles.titleCart}>Shopping cart</h1>
				<span className={styles.line}></span>
				<Link className={styles.link_to_shop} to="/allproducts">
					Back to the store
				</Link>

			</div>

			<div className={styles.order_block}>
				<div className={styles.basketItem}>
<BasketList />
</div>
{totalAmount > 0 && (
<div className={styles.orderList}>
<Order totalAmount={totalAmount} totalSumm={totalSumm} />
</div>
)}
			</div>
	
			{isModalVisible && <Modal isVisible={isModalVisible} onClose={handleModalClose} />}
      {!isModalVisible && isModalClosed && (
        <div className={styles.emptyBasket}>
          <BasketEmpty />
        </div>
      )}
		</section>
	);
};


export default BasketPage;