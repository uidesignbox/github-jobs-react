import React from 'react';
import PropTypes from 'prop-types';

const DetailHead = (props) => (
   <header className="detail__header">
      { props.info.company_logo &&
         <div className="detail__header--img">
            <img src={props.info.company_logo} alt={`Brand logo for ${props.info.company}`}/>
         </div>}
      <div className="header__content">
         <h2 className="header__title">{props.info.title}</h2>
         <p className="header__company">{props.info.company}</p>
         <p className="header__location">{props.info.location}</p>
      </div>
   </header>
);

DetailHead.propTypes = {
   info: PropTypes.object.isRequired
}

export default DetailHead;