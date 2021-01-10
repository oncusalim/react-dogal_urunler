import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionsOrder from '../../../store/actions/index';
import {updateObject, checkValidation} from '../../../shared/utility';

import classes from './OdemeContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
//import withErrorHandler from '../../../hoc/withErrorHandler/WithErrorHandler';



class OdemeContactData extends Component{
    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Adınızı ve Soyadınızı giriniz.',
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
            },
            adres:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Adresinizi giriniz.',
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'E-mail Adresinizi giriniz.',
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            phoneNumber:{
                elementType:'input',
                elementConfig:{
                    type:'number',
                    placeholder:'Telefon Numarızı giriniz.',
                },
                value:'',
                validation:{
                    required:true,
                    minLength:11,
                    maxLength:11
                },
                valid:false,
                touched:false
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastest', displayValue:'En Hızlı'},
                        {value:'cheapest', displayValue:'En Ucuz'}]
                },
                value:'fastest',
                validation:{},
                valid:true  
            } 
        },
        formIsValid:false
    }

    orderHandler = (event) =>{
        event.preventDefault();
        const formData={};
        for (let formIdentifier in this.state.orderForm){
            formData[formIdentifier]=this.state.orderForm[formIdentifier].value;
        }
            
        const order= {
            urunler: this.props.urunlerr,
            fiyat:this.props.fiyat,
            userId:this.props.userId,
            orderData:formData
        };
        this.props.onUrunlerOrdered(order,this.props.token);
    }

    inputChangedHandler= (event, inputIdentifier)=>{
        const updatedFormElement= updateObject(this.state.orderForm[inputIdentifier],{
            value:event.target.value,
            valid:checkValidation(event.target.value, this.state.orderForm[inputIdentifier].validation), 
            touched:true
        });
        const updatedOrderForm= updateObject (this.state.orderForm,{
            [inputIdentifier]:updatedFormElement
        });
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm){
            formIsValid= updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm:updatedOrderForm, formIsValid:formIsValid});
    }

    render(){
        const formElementArray=[];
        for (let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }

        let form= (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map( formElement=>(
                    <Input
                    key={formElement.id} 
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event)=>{this.inputChangedHandler(event,formElement.id)}}/>
                )

                )}
                <Button btnType='Success' disabled={!this.state.formIsValid}>Adres Bilgilerini Kaydet</Button>
            </form>
        );
        if (this.props.loading){
            form=<Spinner/>;
        }
        return(
            <React.Fragment>
                <div className={classes.OdemeContactData}>
                    <h2 style={{color:'red'}}>İletişim Bilgilerinizi Giriniz</h2>
                    <h3>Fatura Adresi</h3>
                    {form}
                    
                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps= state=>{
    return {
        urunlerr:state.urunler.urunler,
        fiyat:state.urunler.toplamUcret,
        loading: state.orders.loading,
        token:state.auth.token,
        userId:state.auth.userId
    };
};

const mapDispatchToProps= dispatch =>{
    return {
        onUrunlerOrdered:(orderData,token)=> dispatch(actionsOrder.purchaseStarted(orderData,token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (OdemeContactData);