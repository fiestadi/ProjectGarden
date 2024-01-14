import React from 'react';
import styles from './basketItem.module.css';
import { useDispatch } from 'react-redux';
import { decrement, increment, remove } from '../../store/slices/basketSlice';
import { URL } from '../../components/URL/url'

const BasketItem = ({ id, title, price, discount_price, image, count }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.product_item}>
            <img className={styles.product_img} src={URL + image} alt={title} />
            <div className={styles.grid_item}>
                <p className={styles.product_name}>{title}</p>
                <div className={styles.btns_blok}>
                    <button onClick={() => dispatch(decrement(id))} className={styles.btn}> - </button>
                    <span className={styles.count}>{count}</span>
                    <button onClick={() => dispatch(increment(id))} className={styles.btn}> + </button>
                </div>
            </div>
            <div className={styles.prices}>
                {
                    discount_price ?
                        <>
                            <p className={styles.final_price}>
                                {discount_price}
                                <span className={styles.small_text}>$</span>
                            </p>
                            <p className={styles.price}>{price}$ </p>
                        </>
                        : <p className={styles.final_price}>
                            {price}
                            <span className={styles.small_text}>$</span>
                        </p>
                }
            </div>
            <button onClick={() => dispatch(remove(id))} className={styles.del_btn}>
                <img src="" alt="delete_icon" />
            </button>
        </div>
    );
};

export default BasketItem;