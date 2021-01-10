import React from 'react';
import classes from './Urun.css';


const urun = (props) => (
    <div className= {classes.Urun}>
        <img className= {classes.Image} src={props.urunfoto} alt="Urun Resimleri"/>
    </div>
);

export default urun;
