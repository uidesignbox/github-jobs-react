import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import DetailHead from './DetailHead';
import DetailBody from './DetailBody';
import DetailFooter from './DetailFooter';

class DetailContainer extends Component {
   constructor() {
      super();
      this.state = {
         post: null
      }
   }
   
   componentWillMount() {
      const { post } = this.props.location.state
      this.setState({ post })
   }

   render() {
      console.log(this.state.post)
      return (
         <div>
            {this.state.post &&
               <Fragment>
                  <DetailHead info={this.state.post} /> 
                  <DetailBody info={this.state.post} />
                  <DetailFooter info={this.state.post} />
               </Fragment>
            }
         </div>
      )
   }
};

DetailContainer.propTypes = {
   post: PropTypes.object
}

export default DetailContainer;