import React from 'react';
import classes from './BuildControl.css';
import { FiShoppingCart } from 'react-icons/fi';



const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <p className={classes.Fiyat}> <strong> {props.ucret} TL</strong></p>
        <button 
        className={classes.ButtonSepet}
        onClick={props.urunEklendi}><FiShoppingCart/></button>
    </div>
);


export default buildControl;