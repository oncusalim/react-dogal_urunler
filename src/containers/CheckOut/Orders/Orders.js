import React, {Component} from 'react';
import Order from '../../../components/Orders/Order/Order';

import axios from '../../../axios-order';
import withErrorHandler from '../../../hoc/withErrorHandler/WithErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';


class Orders extends Component{
    componentDidMount(){
        this.props.onFetchOrders(this.props.token,this.props.userId);
    }
    render(){
        let order = <Spinner />;
        if (!this.props.loading){
            if(this.props.orders){
                order = this.props.orders.map(ord => (
                <Order key= {ord.id} 
                urunler={ord.urunler} 
                fiyat={ord.fiyat}/>)
                )
            } else order=null; 
        }

        return(
            <div>
                {order}
            </div>
        );
    }

}

const mapStateToProps = state =>{
    return{
        orders: state.orders.orders,
        loading: state.orders.loading,
        token: state.auth.token,
        userId:state.auth.userId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrders:(token,userId) => dispatch (actions.fetchOrders(token,userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Orders,axios));