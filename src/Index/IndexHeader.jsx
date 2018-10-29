import React, { Component } from 'react';
import FormContainer from '../FormContainer';
import FilterItems from './FilterItems';

class IndexHeader extends Component {
   render() {
      const IndexTitle = () => (
         <h2 className="index-header__title">Search Job Listing</h2>
      );
      return(
         <div className="header__container">
            <IndexTitle />
            <FormContainer />
            <FilterItems />
         </div>
      )
   }
};

export default IndexHeader;