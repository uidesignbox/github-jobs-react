import React from 'react';
import PropTypes from 'prop-types';
import { getDateDiff } from '../util/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailFooter = (props) => {
   const createdDay = getDateDiff(props.info.created_at)
   return (
      <footer className="detail__footer">
         <div className="additional-info" dangerouslySetInnerHTML={{ __html: props.info.how_to_apply }}></div>
         <div className="detail__footer-info">
            <a href={props.info.url} target="_blank" className="apply--cta">
               <button>Apply Now</button>
            </a>
            <div className="date">
               <span>{ createdDay === 0 ? 'A day ago': `${createdDay} days ago`  }</span>
               <FontAwesomeIcon icon="clock" className="icon" />
            </div>
         </div>

         {/* Bottom meta content */}
         <div className="detail__footer-meta">
            <div className="footer-section">
               <FontAwesomeIcon icon="building" className="icon" />
               <a href={props.info.company_url} target="_blank">Company website</a>
            </div>
            <div className="footer-section">
               <FontAwesomeIcon icon="file-alt" className="icon" />
               <a href={props.info.url} target="_blank">View original posting</a>
            </div>
         </div>
      </footer>
   )
};

DetailFooter.propTypes = {
   info: PropTypes.object.isRequired
}

export default DetailFooter;