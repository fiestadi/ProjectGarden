import React from "react";
import OrderForm from './orderForm';
import styles from './order.module.css';
const Order = ({ totalSumm, totalAmount }) => {

	return (
		<div className={styles.order}>
			<h3 className={styles.order_title}>Order details</h3>
			<p className={styles.amount}>{totalAmount}  items</p>
			<div className={styles.order_summ}>
				<p className={styles.title}>Total</p>
				<div className={styles.totalSumm}>
					{totalSumm}
					<span className={styles.line}>$</span>
				</div>
			</div>
			<OrderForm />
		</div>
	);
};
export default Order;