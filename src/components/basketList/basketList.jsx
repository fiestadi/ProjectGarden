import { useSelector } from 'react-redux';
import  BasketItem  from '../../pages/BacketPage/basketItem';
import styles from './basketList.module.css';

 const BasketList = () => {
	const BasketList = useSelector((store) => store.basket.BasketList);

	return (
		<div className={styles.cart_list}>
			{BasketList.map((item, index) => (
				<BasketItem key={index} {...item} />
			))}
		</div>
	);
};
export default BasketList;