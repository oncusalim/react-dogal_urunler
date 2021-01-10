import React,{Component} from 'react';
import classes from './OdemeSayfasi.css';
import Button from '../../../components/UI/Button/Button';

class OdemeSayfasi extends Component{
    render(){
        return(
            <div className={classes.OdemeContactData}>
                <h2>Kredi Kartı Bilgilerini Giriniz</h2>
                <form className={classes.Form}>
                    <input className= {classes.Input} type='text' name='isim' placeholder='İsim ve Soyisim'/>
                    <input className= {classes.Input} type='number' name='kartnumarası' placeholder='Kredi Kart Numarasını Giriniz'/>  
                </form>
                <Button btnType='Success'>Onayla</Button>
            </div>
        );
    }
}

export default OdemeSayfasi;