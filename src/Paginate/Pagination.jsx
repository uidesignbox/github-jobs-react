import React, { Component } from 'react';
import PaginateItem from './PaginateItem';
import PropTypes from 'prop-types';

class Pagination extends Component {
   render() {
      const items = [];
      for (let i = 0; i < this.props.total; i++) {
         items.push(<PaginateItem index={i} key={i} handlePagination={this.props.handlePagination} />)
      }
      return (
         <div className="pagination__wrapper">
            <ul className="pagination__list">
               { items }
            </ul>
         </div>
      )
   }
};

Pagination.propTypes = {
   total: PropTypes.number.isRequired,
   index: PropTypes.number.isRequired,
   handlePagination: PropTypes.func
}

export default Pagination