import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux';

import {FiTrash2} from "react-icons/fi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import classes from './Sepet.css';
import * as urunlerActions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';


class Sepet extends Component{
    render(){
        let tranformUrunler=null;
        if (this.props.urunlerr){
            tranformUrunler= Object.keys(this.props.urunlerr)
            .map(ur => {
                if(this.props.urunlerr[ur]===0){
                   return null; 
                }else{
                     return(
                        <TableRow className={classes.Orderrow} key = {ur}>
                            <TableCell align='left' className={classes.Order}><span style={{textTransform:'capitalize', fontWeight:'bold'}}>{ur}</span></TableCell>
                            <TableCell align='center' className={classes.Order}><span style ={{color:'red'}}>{this.props.urunlerr[ur]}</span> <Button clicked={()=>{this.props.onUrunEkleme(ur)}} btnType='Success'> + </Button></TableCell>
                            <TableCell align='center' className={classes.Order}>{this.props.urunUcrt}</TableCell>
                            <TableCell align='center' className={classes.Order}><Button clicked={()=>{this.props.onUrunSilme(ur)}} btnType='Danger'> <FiTrash2/></Button></TableCell>        
                        </TableRow>);
                }
            });
        }
        const gosterim= (
            <Aux>
                <h3>Sepetinizdeki Ürünler</h3>
                <Table className={classes.Orders}>
                    <TableBody className={classes.OrderBody}>
                        <TableRow className={classes.Orderrow}>
                            <TableCell className={classes.Order}> Ürün Adı</TableCell>
                            <TableCell align='center' className={classes.Order}> Ürün Miktarı</TableCell>
                            <TableCell align='center' className={classes.Order}> Ürün Ücreti </TableCell>
                            <TableCell align='center' className={classes.Order}> Ürünü İptal Edin</TableCell>
                        </TableRow>
                        {tranformUrunler}
                    </TableBody>
                </Table>
                <p>Toplam Ücret: {this.props.toplamUcret}</p>
            </Aux>);

        let goster = this.props.toplamUcret===0 ? <p style={{color:'#ccce', fontSize:'32px'}}>Sepetinizde herhangi bir ürün bulunmamaktadır.</p>: gosterim;
        return (
            <div>
                {goster}
            </div>
            
        );
    }
} 


const mapStateToProps= state =>{
    return{
        urunlerr: state.urunler.urunler,
        toplamUcret: state.urunler.toplamUcret,
    };
}

const mapDispatchToProps= dispatch => {
    return{
        onUrunEkleme:(urunIsm)=> dispatch(urunlerActions.urunEkleme(urunIsm)),
        onUrunSilme:(urunIsm)=> dispatch(urunlerActions.urunSilme(urunIsm)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Sepet);