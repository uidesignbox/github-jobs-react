import React from 'react';
import PropTypes from 'prop-types';

const PostItem = (props) => (
   <article className="post__item">
      <div className="post__content">
         <h2>{props.item.title}</h2>
         <p>{props.item.company}</p>
         <span>{props.item.location}</span>
      </div>
   </article>
);

PostItem.propTypes = {
   item: PropTypes.object.isRequired
}

export default PostItem;