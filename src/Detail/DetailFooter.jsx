import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailFooter = (props) => (
   <footer className="detail__footer">
      <button>
         <div dangerouslySetInnerHTML={{ __html: props.info.how_to_apply }}></div>
      </button>
      {/* Date of creation */}
      
      {/* End date */}
      <div className="detail__footer-meta">
         <div>
            <FontAwesomeIcon icon="search" />
            <a href={props.info.company_url} target="_blank">Company website</a>
         </div>
         <div>
            <FontAwesomeIcon icon="search" />
            <a href={props.info.url} target="_blank">View original posting</a>
         </div>
      </div>
   </footer>
);

DetailFooter.propTypes = {
   info: PropTypes.object.isRequired
}

export default DetailFooter;