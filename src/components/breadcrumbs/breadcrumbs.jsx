import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumbs.module.css'
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((crumb, id) => (
        <span key={id} className={styles.breadcrumbItem}>
          <Link to={crumb.path} className={styles.breadcrumbLink} >
            {crumb.label}
          </Link>
          {id < breadcrumbs.length - 1 && <span className={styles.breadcrumbsSeparator}></span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
