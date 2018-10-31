import React from 'react';
import PropTypes from 'prop-types';

const PaginateItem = (props) => (
   <li className={`paginate__item ${props.active ? 'active': ''}`} onClick={() => props.handlePagination(props.index)}>
      <span>{props.index + 1}</span>
   </li>
);

PaginateItem.propTypes = {
   index: PropTypes.number
}

export default PaginateItem;