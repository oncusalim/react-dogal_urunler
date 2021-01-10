import React from 'react';
import Sepet from '../Sepet';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';


const checkoutSummary = (props) =>(
    <React.Fragment>
        <div className={classes.CheckoutSummary}>
            <Sepet 
            sepet={props.siparis} 
            ucret={props.fiyat} 
            silme={props.silme} 
            ilave={props.ekleme}/>
            <div>
                <Button btnType='Danger' clicked={props.cancelled}>GERİ DÖN</Button>
                <Button btnType='Success' clicked={props.odeme}>ALIŞVERİŞİ TAMAMLA</Button>
            </div>
        </div>
        
    </React.Fragment>
    
);

export default checkoutSummary;