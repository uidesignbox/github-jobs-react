import React from 'react';
import PropTypes from 'prop-types';

const DetailHead = (props) => (
   <header>
      <div>
         <h2>DetailHead</h2>
         <h2>{props.info.title}</h2>
      </div>
   </header>
);

DetailHead.propTypes = {
   info: PropTypes.object.isRequired
}

export default DetailHead;