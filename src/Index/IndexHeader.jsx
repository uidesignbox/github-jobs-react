import React, { Component } from 'react';
import FormContainer from '../FormContainer';

class IndexHeader extends Component {
   render() {
      const IndexTitle = () => (
         <h2 className="index-header__title">Search Job Listing</h2>
      );
      return(
         <div className="header__container">
            <IndexTitle />
            <FormContainer />
         </div>
      )
   }
};

export default IndexHeader;