// IndexHeader.jsx
import React, { Component } from 'react';
import IndexSearch from './IndexSearch';

class IndexHeader extends Component {
   render() {
      const IndexTitle = () => (
         <h2 className="index-header__title">Search Job Listing</h2>
      );
      return(
         <div>
            <IndexTitle />
            <IndexSearch />
         </div>
      )
   }
};

export default IndexHeader;