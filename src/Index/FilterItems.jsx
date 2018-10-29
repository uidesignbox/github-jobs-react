import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterItems = (props) => (
   <div className="filter__container">
      <button className="filter__all">All</button>
      <button className="filter__location">
         Location
         <FontAwesomeIcon icon="map-marker-alt" className="icon" />
      </button>
      <button className="filter__position">
         Position Type
         <FontAwesomeIcon icon="user" className="icon" />
      </button>
   </div>
);

export default FilterItems;