import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, defaultValue, value, onSelectChange}) => {
  return (
    <select
      value={value}
      onChange={e => onSelectChange(e.target.value)}
      className={classes.select}>
      <option disabled>{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default MySelect;