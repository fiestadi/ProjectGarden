import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterDiscount } from '../../store/slices/productSlice';

const CheckboxComponent = ({ onCheckboxChange }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);


  useEffect(() => {
    dispatch(filterDiscount(isChecked));
  }, [isChecked, dispatch]);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(!isChecked);

  };

  return (
    <div>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '24px',
        height: '24px',
        borderRadius: ' 6px',
        border: '1px solid  #DDD',
        backgroundColor: isChecked ? '#393' : '#FFFFFF',
        color: isChecked ? 'white' : 'black',
        padding: '5px',
        cursor: 'pointer',
      }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{
            display: 'none',
          }}
        />
        {/* galochka */}
        {isChecked ? (
          <span
            style={{
              width: '8px',
              height: '16px',
              borderBottom: '2px solid white',
              borderRight: '2px solid white',
              transform: 'rotate(45deg)',
              transformOrigin: 'bottom right',
              boxSizing: 'border-box',
            }}
          />
        ) : null}
      </label>
    </div>
  );
};

export default CheckboxComponent;


