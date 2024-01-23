import React from 'react';
import styles from './galery.module.css';
import { Link } from 'react-router-dom';
import { URL } from '../../../components/URL/url';

const GalleryItem = ({ id, title, image }) => {

    return (
       
        <Link className={styles.item} to={`/categories/${title}/${id}`} >
        <img src={`${URL}${image}`} alt={title} />
        <p>{title}</p>
    </Link>

        
    );
};

export default GalleryItem;