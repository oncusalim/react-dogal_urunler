import React from 'react';
import classes from './Order.css';



const order = (props) =>{
    const urunler=[];
    for(let urun in props.urunler){
        if (props.urunler[urun]!==0){
            urunler.push({name:urun, miktar:props.urunler[urun]});
        }
    }
    const cıktı = urunler.map(cık=>{
        return <span key={cık.name} 
        style= {{display:'block', textTransform:'capitalize'}}> {cık.name} :  {cık.miktar} </span>
    })
    
    return(
        <div className={classes.Orders}>
            <div className={classes.Order}>
                <h3>Sipariş Özeti</h3>
                <p>{cıktı}</p>
                <p>Toplam Ücret:<strong> {Number.parseFloat(props.fiyat).toFixed(2)}</strong></p>
            </div>
        </div>    
    );
};

export default order;