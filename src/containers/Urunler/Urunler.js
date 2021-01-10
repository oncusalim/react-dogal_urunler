import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Aux';
import BuildControls from '../../components/BuildControls/BuildControls';
import Sepet from '../../components/Orders/Sepet';
import Modal from '../../components/UI/Modal/Modal';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
import axios from '../../axios-order';
import Button from '../../components/UI/Button/Button';
import * as urunlerActions from '../../store/actions/index';
import Reklam from '../../components/Reklam/Reklam';
import EnCokSatanlar from '../../components/EnCokSatanlar/EnCokSatanlar';


class Urunler extends Component{
    
    purchaseContinueHandler= () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    componentDidMount(){
        this.props.onUrunSet();
    }

    render(){
        const disabledInfo={
            ...this.props.urunlerr
        }

        for (let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        let urunler = this.props.error ? <p style={{fontSize:'66px', margin:'60px', textAlign:'center'}}> Ürünler Yüklenemiyor...</p>:null; 
        
        if (this.props.urunlerr){
            urunler = (<BuildControls 
                added={this.props.onUrunEkleme} />);
        }

        let orderSummary= null;
        orderSummary =(
            <React.Fragment>
                <Sepet/>
                <Button btnType='Danger' clicked={this.props.onUrunIptal}>Alışverişe Devam Edin</Button>
                <Button btnType='Success' clicked={this.purchaseContinueHandler} >Sepete Git</Button>
            </React.Fragment>
        );

        return(
            <Aux>
                <Modal show = {this.props.purchasing} modalClosed= {this.props.onUrunIptal}>
                    {orderSummary}    
                </Modal>
                <Reklam/>
                {urunler}
                <EnCokSatanlar/>
            </Aux>
        );
    }
}


const mapStateToProps = state =>{
    return{
        urunlerr: state.urunler.urunler,
        toplamUcret:state.urunler.toplamUcret,
        purchasing:state.urunler.purchasing,
        error:state.urunler.error,
    };
};


const mapDispatchToProps= dispatch => {
    return{
        onUrunEkleme:(urunIsm)=> dispatch(urunlerActions.urunEkleme(urunIsm)),
        onUrunSilme:(urunIsm)=> dispatch(urunlerActions.urunSilme(urunIsm)),
        onUrunIptal:()=> dispatch(urunlerActions.satinIptal()),
        onUrunSet:()=> dispatch(urunlerActions.initUrunler()),
        onInitPurchase: ()=> dispatch(urunlerActions.purchaseInit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Urunler,axios));