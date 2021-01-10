import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    urunler:null,
    toplamUcret:0,
    purchasing:false,
    error:false,
    toplamUrun:0,
    building:false,
    urunFiyati:null
}

const URUN_UCRETLERI = {
    nohut:10,           
    zeytinyagi:22,
    ceviz:30,
    findik:14,
    antepfistigi:70,
    muz:9,
    elma:3,
    portakal:5
}

const urunIlave = (state, action) =>{
    const updatedUrun = {[action.urunIsmi]:state.urunler[action.urunIsmi]+1};
        const updatedUrunler = updateObject(state.urunler,updatedUrun);
        const updatedStated = {
            urunler:updatedUrunler,
            toplamUcret:state.toplamUcret + URUN_UCRETLERI[action.urunIsmi],
            urunFiyati: URUN_UCRETLERI[action.urunIsmi],
            purchasing:true,
            toplamUrun:state.toplamUrun+1,
            building:true
        };
        return updateObject(state, updatedStated);
};


const urunAzaltma = (state,action) => {
    const updatedUrn = {[action.urunIsmi]:state.urunler[action.urunIsmi]-1};
        const updatedUrnler = updateObject(state.urunler,updatedUrn);
        const updatedStatd = {
            urunler:updatedUrnler,
            toplamUcret:state.toplamUcret - URUN_UCRETLERI[action.urunIsmi],
            toplamUrun:state.toplamUrun-1,
            building:true
        }
    return updateObject(state, updatedStatd);
};



const urunlerReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.URUN_EKLEME: return urunIlave(state,action);
        case actionTypes.URUN_SILME: return urunAzaltma(state,action);
        case actionTypes.SATIN_IPTAL: return updateObject( state,{purchasing:false})
        case actionTypes.SET_URUNLER: return updateObject (state, {urunler:action.urunler,building:false, toplamUcret:0, error:false, toplamUrun:0});
        case actionTypes.FETCHED_URUNLER_FAILED: return updateObject(state,{error:true});
        default: return state;
    }
};

export default urunlerReducer;