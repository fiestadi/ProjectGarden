import React, { useState, useEffect } from 'react';
import styles from './filter.module.css';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toggleShowDiscountedProducts } from '../../store/slices/productSlice';
import { sort, searchByPrice, filterDiscount, resetFilter } from '../../store/slices/productSlice'; 
import CheckboxComponent from '../Checkbox/checkbox';

const Filter = ({ onChange }) => {
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(Infinity);
    const [discount, setDiscount] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const [showDiscountedProducts, setShowDiscountedProducts] = useState(false);

    useEffect(() => {
        if (!discount) {
            dispatch(filterDiscount(false));
        }
        dispatch(searchByPrice({ from: fromPrice, to: toPrice }));
    }, [fromPrice, toPrice, discount, dispatch]);
  

    useEffect(() => {
        dispatch(resetFilter());
        setDiscount(false);
        setFromPrice(0);
        setToPrice(Infinity);
    }, [location, dispatch]);

    const onChangeFilter = (by, data) => {
        const numericData = parseFloat(data);
        if (!isNaN(numericData)) {
            if (by === 'from') {
                setFromPrice(numericData);
            } else if (by === 'to') {
                setToPrice(numericData);
            }
        
            onChange({ fromPrice: numericData, toPrice });
        }
    };

    const onChangeSort = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue !== 'default') {
            dispatch(sort(selectedValue));
        }
    };

    const handleCheckboxChange = (isChecked) => {
        setShowDiscountedProducts(isChecked);
        dispatch(toggleShowDiscountedProducts(isChecked));
    };

    // useEffect(() => {
    //     console.log("Price changed:", fromPrice, toPrice);
    // }, [fromPrice, toPrice]);

    return (
        <form className={styles.filterForm}>
            <div className={styles.inputs_price}>
                <span className={styles.label}>Price</span>
                <input
                    onChange={(e) => onChangeFilter('from', e.target.value)}
                    type="number"
                    name="from"
                    placeholder='from'
                    value={fromPrice}
                />
                <input
                    onChange={(e) => onChangeFilter('to', e.target.value)}
                    type="number"
                    name="to"
                    placeholder='to'
                    value={toPrice === Infinity ? '' : toPrice}
                />
            </div>
            <div className={styles.checkbox}>
                <span className={styles.label}>Discounted items</span>
                <CheckboxComponent onCheckboxChange={handleCheckboxChange} isChecked={showDiscountedProducts} />
            </div>
            <div className={styles.sort_options}>
                <span className={styles.label}>Sorted</span>
                <select onChange={onChangeSort} defaultValue='default'>
                    <option value="default" disabled hidden>by default</option>
                    <option value="default">by default</option>
                    <option value="newest">newest</option>
                    <option value="-1">Price: high-low</option>
                    <option value="1">Price: low-high</option>
                </select>
            </div>
        </form>
    );
};

export default Filter;