import React from 'react';
import './menu-item.styles.scss'
import { useLocation } from 'react-router';
const withRouter = WrappedComponent => props => {
    const location = useLocation();
  
     return <WrappedComponent {...props} location={location} />;
   };


const MenuItem = ({title, imageUrl, size }) => (

    <div
    className={`${size} menu-item`}>
        <div  className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
<div className='content'>
<h1 className='title'>{title.toUpperCase()}</h1>
<span className='subtitle'> SHOP NOW</span>
</div>
    </div>
);

export default withRouter(MenuItem);