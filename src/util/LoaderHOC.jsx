import React, { Component } from 'react';
import LoadingPlaceholder from './LoadingPlaceholder';

const LoaderHOC = (WrappedComponent) => {
   return class LoaderHOC extends Component {
      render() {
         return this.props.items === null ? 
            <LoadingPlaceholder /> : <WrappedComponent {...this.props} />
      }
   }
};

export default LoaderHOC;