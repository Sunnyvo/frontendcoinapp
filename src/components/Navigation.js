import React, { Component } from "react";

//Import library
import {
  Navbar,
  NavbarLink,
  NavbarBrand,
  NavbarItem,
  Icon,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarDivider,
  NavbarDropdown,
  Field,
  Control,
  Button,
  NavbarBurger
} from "bloomer";
import FaHhome from "react-icons/lib/fa/home";
import FaUser from "react-icons/lib/fa/user";
import FaBitcoin from "react-icons/lib/fa/bitcoin";

//import css
import "../css/Navigation.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
			isActive: false
    };
  }

  render() {
    return (
      <div className="">
        <Navbar className="Navigation-Bar">
          <NavbarBrand>
            <NavbarItem>
              Bitmelon
            </NavbarItem>
            <NavbarBurger
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarStart>
              <NavbarItem className="Navigation-Item" >
                <FaBitcoin size={20} /> INVESTMENT
              </NavbarItem>
              <NavbarItem className="Navigation-Item" >
                <FaUser size={20} /> USER
              </NavbarItem>
              <NavbarItem className="Navigation-Item" >
                FAQ
              </NavbarItem>
              <NavbarItem className="Navigation-Item" >
                ABOUT US
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem hasDropdown isHoverable>
                <NavbarLink href="#/documentation">Profile</NavbarLink>
                <NavbarDropdown>
                  <NavbarItem> Edit Profile </NavbarItem>
                  <NavbarItem> Your wallet </NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    );
  }
}
