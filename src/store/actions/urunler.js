import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const urunEkleme = (name) =>{
    return{
        type: actionTypes.URUN_EKLEME,
        urunIsmi:name
    };
};

export const urunSilme = (name) =>{
    return{
        type: actionTypes.URUN_SILME,
        urunIsmi:name
    };
};

export const urunFiyat = (urun) =>{
    return{
        type:actionTypes.URUN_FIYAT,
        urunFiyati:urun
    };
};

export const satinIptal = () =>{
    return{
        type: actionTypes.SATIN_IPTAL,
    };
};

export const setUrunler = (urunler)=>{
    return{
        type:actionTypes.SET_URUNLER,
        urunler:urunler
    };

};
export const fetchUrunlerFailed = () =>{
    return{
        type:actionTypes.FETCHED_URUNLER_FAILED,
    };

};


export const initUrunler = () =>{
    return dispatch => {
        axios.get('https://alisveris-6baec.firebaseio.com/urunler.json')
        .then(response=>{
            dispatch(setUrunler(response.data));
        })
        .catch( error =>{
            dispatch(fetchUrunlerFailed());
        });
    };

};

