import React from 'react';
import PropTypes from 'prop-types';

const LocationSearch = ({ toggle, placeholder }) => (
   <div className="location-input" onChange={toggle}>
      <label htmlFor="location">Search Location</label>
      <input type="text" name="location" className="form__input" placeholder={placeholder || 'New York, NY ...'}></input>
   </div>
);

LocationSearch.propTypes = {
   placeholder: PropTypes.string,
   toggle: PropTypes.func
}

export default LocationSearch;