import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, text, type, value, handleSearch }) => (
   <div className="form-section">
      <label htmlFor={label} hidden>{text}</label>
      <input 
         type={type} className="form__input" value={value} onChange={handleSearch}
      />
   </div>
);

Input.propTypes = {
   label: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   type: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   handleSearch: PropTypes.func.isRequired
};

export default Input;