import React, { useState, useEffect } from 'react';
import styles from './filter.module.css';
import { useDispatch } from 'react-redux';
import {  useLocation, useParams } from 'react-router-dom';
import CheckboxComponent from '../Checkbox/checkbox';
import { searchByPrice, sort, filterDiscount, resetFilter } from '../../store/slices/productSlice';

const Filter = () => {
    const initialFilters = {from: 0, to: Infinity}
    const [price, setPrice] = useState(initialFilters)
    const [discount, setDiscount] = useState(false)
    const {sales} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(()=>{
      if (!discount) {
         dispatch(filterDiscount(false));
     }
        dispatch(searchByPrice(price))
    },[price,discount, dispatch])

    useEffect(() => {
        dispatch(resetFilter())
        dispatch(filterDiscount(false))
        setDiscount(false)
        setPrice(initialFilters)
    },[location, dispatch])

    const onChangeFilter = (by, data) => {
        setPrice({
            ...price,
            [by]:data
        })
    }
    const onChangeDiscount = (e) => {
        setDiscount(e.target.checked)
        dispatch(filterDiscount(e.target.checked))
    }
    const onChangeSort = (e) => {
        dispatch(sort(+e.target.value))
    }

    return (
        <form className={styles.filterForm}>
            <div className={styles.inputs_price}>
                <span className={styles.label}>Price</span>
                <input onChange={
                    (e) => onChangeFilter('from', +e.target.value)} 
                    type="number" 
                    name="from" 
                    placeholder='from'
                    value={price.from ? price.from : '' }
                />
                <input 
                    onChange={(e) => 
                        onChangeFilter('to', e.target.value === '' ? Infinity : +e.target.value )}
                    type="number" 
                    name="to" 
                    placeholder='to' 
                    value={price.to === Infinity ? '' : price.to}
                    />
            </div>
            {   
                !sales && (
                    <div className={styles.checkbox}>
                        <span className={styles.label}>Discounted items</span>
                        <CheckboxComponent />
                    </div> 
                )
            }
            <div className={styles.sort_options}>
                <span className={styles.label}>Sorted</span>
                <select onChange={ onChangeSort } defaultValue='0'>
                    <option value="0" disabled hidden>by default</option>
                    <option value="#">by default</option>
                    <option value="#">newest</option>
                    <option value="1">Price: high-low</option>
                    <option value="-1">Price: low-high</option>
                </select>
            </div>  
        </form>
    );
};

export default Filter;