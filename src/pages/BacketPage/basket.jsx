import React, {useEffect } from 'react';
import styles from './basket.module.css'
import BasketList from '../../components/basketList/basketList';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { setModalVisibility,selectIsModalVisible } from '../../store/slices/basketSlice';
import Order from '../../components/order/order';
import  Modal  from '../../components/modal/modal';


const BasketPage = () => {
	const dispatch = useDispatch();
  const isModalVisible = useSelector(selectIsModalVisible);

  const handleModalClose = () => {
	dispatch(setModalVisibility(false));
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
<div className={styles.orderList}>
<Order totalAmount={totalAmount} totalSumm={totalSumm} />
</div>
			</div>
	
			{isModalVisible && <Modal isVisible={isModalVisible} onClose={handleModalClose} />}


		</section>
	);
};


export default BasketPage;