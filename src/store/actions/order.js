import * as actionTypes from './actionTypes';
import axios from '../../axios-order';


export const purchaseOrderSuccess = (id, orderData) =>{
    return{
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        orderId:id,
        orderData:orderData
    };
};

export const purchaseOrderFailed = (error) =>{
    return{
        type: actionTypes.PURCHASE_ORDER_FAILED,
        error:error
    };
};

export const purchaseOrderStart = () => {
    return{
        type:actionTypes.PURCHASE_ORDER_START
    };
};

export const purchaseInit= () => {
    return{
        type:actionTypes.PURCHASE_ORDER_INIT
    };
};


export const purchaseStarted= (orderData,token)=>{
    return dispatch => {
        dispatch(purchaseOrderStart());
        axios.post('/orders.json?auth='+token, orderData)
        .then(response => { 
            dispatch(purchaseOrderSuccess(response.data.name,orderData));
        })
        .catch(error=> {
            dispatch(purchaseOrderFailed(error));
        });
    };
};


export const fetchOrderFailed = (error) =>{
    return{
        type: actionTypes.FETCH_ORDERS_FAILED,
        error:error
    };
};

export const fetchOrderSuccess = (orders) =>{
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    };
};

export const fetchOrderStart = () =>{
    return{
        type: actionTypes.FETCH_ORDERS_START
    };
};


export const fetchOrders = (token,userId) =>{
    return dispatch => {
        dispatch(fetchOrderStart());
        const queryParams= '?auth='+token+'&orderBy="userId"&equalTo="'+userId+'"';
        axios.get('/orders.json'+queryParams)
        .then(res=>{
            const fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id:key});
            }
            dispatch(fetchOrderSuccess(fetchedOrders));
        })
        .catch( err =>{
            dispatch(fetchOrderFailed(err));
        });
    };
};