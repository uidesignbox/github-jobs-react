import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterItems = (props) => (
   <div className="filter__container">
      <button className="filter__all" onClick={props.handleReset}>All</button>
      <button className="filter__location" onClick={props.toggle}>
         Location
         <FontAwesomeIcon icon="map-marker-alt" className="icon" />
      </button>
      {/* <button className="filter__position">
         Position Type
         <FontAwesomeIcon icon="user" className="icon" />
      </button> */}
   </div>
);

export default FilterItems;