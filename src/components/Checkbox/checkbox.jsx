import React, { useState } from 'react';

const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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

