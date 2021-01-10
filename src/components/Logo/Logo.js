import React from 'react';
import Logo from '../../assets/Logo/Logo.jpg';
import classes from './Logo.css';


const logo = (props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img  className = {classes.img} src={Logo} alt='Logo'/>
    </div>
);

export default logo;