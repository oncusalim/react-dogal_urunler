import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';


import classes from './NavigationItems.css';
import SepetIcon from './SepetIcon/SepetIcon';
import Kategori from './Kategori/Kategori';

const navigationItems = (props) => (
    <ul className = {classes.NavigationItems}>
        <NavigationItem link = '/' exact > Anasayfa </NavigationItem>
        <NavigationItem link = '/checkout' className={classes.Icon}><SepetIcon/></NavigationItem>
        { props.isAuthenticated ? <NavigationItem link = '/orders'> Siparişlerim </NavigationItem> : null}
        <NavigationItem link = '/kategoriler'> <Kategori/> </NavigationItem>
        { !props.isAuthenticated ? 
        <NavigationItem link = '/login'> Üye Girişi </NavigationItem> :
        <NavigationItem link = '/logout'> Üye Çıkışı </NavigationItem> }
        
    </ul>
);

export default navigationItems;