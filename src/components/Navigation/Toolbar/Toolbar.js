import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.MobileOnly}>
           <DrawerToggle clicked={props.drawerToggle}/> 
        </div>
        <div className={classes.Logo}>
           <Logo/> 
        </div>
        <div className= {classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/> 
        </div>
       
    </header>
);


export default toolbar;