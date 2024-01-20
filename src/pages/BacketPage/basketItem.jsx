import React from 'react';
import styles from './basketItem.module.css';
import { useDispatch } from 'react-redux';

import { URL } from '../../components/URL/url';
import {decrementProductInCart,
	removeProductFromCartById,
    addProductToCart,
} from '../../store/slices/basketSlice';
import delte from '../../components/assets/delteIcon.png'
const BasketItem =({ id, image, title, price, discont_price, amount})  => { 
    const dispatch = useDispatch()
   
    return (
        <div className={styles.product_item}>
            <img className={styles.product_img} src={URL + image} alt={title} />
            <div className={styles.grid_item}>
                <p className={styles.product_name}>{title}</p>
                <div className={styles.controls_container}>

                <div className={styles.btns_blok}>
                    <button  className={styles.btn} onClick={() => dispatch(decrementProductInCart(id))}> - </button>
                    <span className={styles.count}>{amount}</span>
                    <button
            className={styles.btn}
            onClick={() => dispatch(addProductToCart({ id, image, title, price, discont_price }))}
          >
            +
          </button>
                </div>
         <div className={styles.prices}>
                {discont_price ? (
                        <>
                            <p className={styles.final_price}>
                                {discont_price}
                                <span className={styles.small_text}>$</span>
                            </p>
                            <p className={styles.price}>{price}${' '} </p>
                        </>
                       ) : (
                       <p className={styles.final_price}>
                            {price}
                            <span className={styles.small_text}>$</span>
                        </p>
                )}
                  </div>
            </div>
            </div>
            <button className={styles.del_btn} onClick={() => dispatch(removeProductFromCartById(id))}>

                <img src={delte} alt="#" />
            </button>
        </div>
    );
};

export default BasketItem;