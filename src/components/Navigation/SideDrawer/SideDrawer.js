import React from 'react';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import BackDrop from '../../UI/BackDrop/BackDrop';


const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses= [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop show = {props.open} backDropClosed={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick = {props.closed}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>  
                </nav>
            </div>
        </Aux>
        
    );
};

export default sideDrawer;
