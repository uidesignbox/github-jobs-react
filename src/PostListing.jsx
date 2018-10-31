import React, { Component } from 'react';
import PostItem from './PostItem';
import PropTypes from 'prop-types';
import LoaderHOC from './util/LoaderHOC';

class PostListing extends Component {
   render() {
      return (
         <section className="post-listing">
            {this.props.items.map((item, i) =>
               <PostItem key={i} item={item[i]} /> )}
         </section>
      )
   }
};

PostListing.propTypes = {
   items: PropTypes.array.isRequired
};

export default LoaderHOC(PostListing);