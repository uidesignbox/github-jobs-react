import React, { Component } from 'react';
import PaginateItem from './PaginateItem';

class Pagination extends Component {
   render() {
      return (
         <div className="pagination__wrapper">
            <ul>
               <PaginateItem />
            </ul>
         </div>
      )
   }
};

export default Pagination