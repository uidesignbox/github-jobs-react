import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../FormContainer';

class IndexHeader extends Component {
   render() {
      const IndexTitle = () => (
         <h2 className="index-header__title">Search Job Listing</h2>
      );
      return(
         <div className="header__container">
            <IndexTitle />
            <FormContainer search={this.props.search} location={this.props.location} query={this.props.query} handleReset={this.props.handleReset} />
         </div>
      )
   }
};

IndexHeader.propTypes = {
   search: PropTypes.func
}

export default IndexHeader;