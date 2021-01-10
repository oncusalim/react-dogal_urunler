import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
import OdemeContactData from './OdemeContactData/OdemeContactData';
import * as urunlerActions from '../../store/actions/index';


class CheckOut extends Component{

    geriDon = () => {
        this.props.history.goBack();
    }
    iletisimBilgileriniKaydet= () =>{
        if (this.props.isAuthenticated){
            this.props.history.replace('/checkout/contact-data');
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/login');
        }
    }

    render(){
        let summary = <Redirect to="/"/>
        if(this.props.urunlerr){
            const purchasedRedirect = this.props.satınAlındı ? <Redirect to="/"/> : null;
            summary= 
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary siparis={this.props.urunlerr}
                        cancelled={this.geriDon}
                        odeme={this.iletisimBilgileriniKaydet}
                        fiyat={this.props.toplamUcret}
                        silme={this.props.onUrunSilme}
                        ekleme={this.props.onUrunEkleme}/>
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={OdemeContactData}/>
                </div>
        }
        return summary;
    }
}


const mapStateToProps = state => {
    return{
        urunlerr: state.urunler.urunler,
        toplamUcret:state.urunler.toplamUcret,
        satınAlındı: state.orders.satınAlındı,
        isAuthenticated: state.auth.token !== null
    };
}


const mapDispatchToProps= dispatch => {
    return{
        onUrunEkleme:(urunIsm)=> dispatch(urunlerActions.urunEkleme(urunIsm)),
        onUrunSilme:(urunIsm)=> dispatch(urunlerActions.urunSilme(urunIsm)),
        onSetAuthRedirectPath: (path) => dispatch(urunlerActions.setAuthRedirect(path))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(CheckOut);