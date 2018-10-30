import React from 'react';
import PropTypes from 'prop-types';

const DetailBody = (props) => (
   <div className="detail__body">
      <div dangerouslySetInnerHTML={{ __html: props.info.description }}></div>
   </div>
);

DetailBody.propTypes = {
   info: PropTypes.object.isRequired
}

export default DetailBody;