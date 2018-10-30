import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailHead from './DetailHead';

class DetailContainer extends Component {
   constructor() {
      super();
      this.state = {
         post: null
      }
   }
   componentWillMount() {
      console.log(this.props.location.state)
      const { post } = this.props.location.state
      this.setState({ post })
   }
   render() {
      return (
         <div>
            { this.state.post &&
               <DetailHead info={this.state.post} /> }
         </div>
      )
   }
};

DetailContainer.propTypes = {
   post: PropTypes.object
}

export default DetailContainer;