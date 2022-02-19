import React from 'react';
import './menu-item.styles.scss'
import { Link } from 'react-router-dom';


const MenuItem = ({title, imageUrl, size, linkUrl}) => {
return(
    
    <div
    className={`${size} menu-item`} >
        <div  className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
<div className='content'>
<Link to={linkUrl} >
<h1 className='title'>{title.toUpperCase()}</h1>
<span className='subtitle'> SHOP NOW</span>
</ Link>
</div>

    </div>
    
)
    };
    

export default MenuItem;