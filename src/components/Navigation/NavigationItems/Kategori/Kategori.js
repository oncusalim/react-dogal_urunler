import React, {Component} from 'react';
import classes from './Kategori.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Kategoriler extends Component {
    state = {
      dropdownOpen: false
    }

    toggle = () => {
        this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
        <div className ={classes.Kategori}>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction='down'>
            <DropdownToggle caret> Kategoriler</DropdownToggle>
            <DropdownMenu className = {classes.DropDownMenu}>
                <DropdownItem className = {classes.DropDownItem}>Çantalar</DropdownItem>
                <DropdownItem className = {classes.DropDownItem}>Çantalar</DropdownItem>
                <DropdownItem className = {classes.DropDownItem}>Cüzdanlar</DropdownItem>
                <DropdownItem className = {classes.DropDownItem}>Şal</DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </div>   
    );
  }
}

export default Kategoriler;