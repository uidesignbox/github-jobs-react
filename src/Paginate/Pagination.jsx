import React, { Component } from 'react';
import PaginateItem from './PaginateItem';
import PropTypes from 'prop-types';

class Pagination extends Component {
   render() {
      const { total, currentIndex } = this.props;
      const items = [];
      for (let i = 0; i < total; i++) {
         items.push(<PaginateItem index={i} active={i === currentIndex } key={i} handlePagination={this.props.handlePagination} />)
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
   currentIndex: PropTypes.number.isRequired,
   handlePagination: PropTypes.func
}

export default Pagination