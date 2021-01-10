import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {connect} from 'react-redux';
import classes from './SepetIcon.css';

const sepetIcon = (props)=>(
    <div className={classes.SepetIcon}>
        <div className={classes.Icon}>
            <FiShoppingCart/> Sepetim
            <div className={classes.Rakam}>
                {props.toplamUrun}
            </div>
        </div>
    </div>
    
);

const mapStateToProps = state => {
    return {
        toplamUrun:state.urunler.toplamUrun

    };
};

export default connect(mapStateToProps)(sepetIcon);



