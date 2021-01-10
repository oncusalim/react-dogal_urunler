import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Urun from '../../containers/Urunler/Urun/Urun';
import Aux from '../../hoc/Aux';
import classes from './BuildControls.css';
import findik from '../../assets/findik.jpg';
import ceviz from '../../assets/ceviz.jpg';
import zeytinyagi from '../../assets/zeytinyagi.jpg';
import nohut from '../../assets/nohut.jpg';
import antepfistigi from '../../assets/antepfistigi.jpg'



const controls = [
    {label:'1 kg Nohut', type:'nohut', price:10,imageurl:nohut},
    {label:'1 lt Zeytin Yağı', type:'zeytinyagi',price:22,imageurl:zeytinyagi},
    {label:'Ceviz İçi', type:'ceviz',price:30,imageurl:ceviz},
    {label:'Kavrulmuş Fındık', type:'findik',price:14,imageurl:findik},
    {label:'Antep Fıstığı', type:'antepfistigi',price:70,imageurl:antepfistigi},
    {label:'Elma', type:'elma',price:3},
    {label:'Muz', type:'muz',price:9},
    {label:'Portakal', type:'portakal',price:5}

];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl=>(
            <Aux key={ctrl.label} >
                <div className= {classes.Parca}  >
                    <Urun 
                    urunfoto={ctrl.imageurl}
                    />
                    <BuildControl
                    urunEklendi = {()=>{props.added(ctrl.type)}}  
                    label={ctrl.label}
                    ucret={ctrl.price}/>   
                </div> 
            </Aux>
        ))}
    </div>
    
);

export default buildControls;