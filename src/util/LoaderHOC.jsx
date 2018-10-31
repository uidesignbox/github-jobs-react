import React, { Component } from 'react';
import LoadingPlaceholder from './LoadingPlaceholder';

const LoaderHOC = (WrappedComponent) => {
   return class LoaderHOC extends Component {
      render() {
         return this.props.items === null || this.props.items === undefined ? 
            <LoadingPlaceholder /> : <WrappedComponent {...this.props} />
      }
   }
};

export default LoaderHOC;