import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Nav, Bars, NavMenu, NavBtn, NavBtnLink,} from './NavbarElements';

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;


const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false);
  
	const toggling = () => setIsOpen(!isOpen);

	return (
	  <>
		<Nav>
		  <Bars />
		  <NavMenu>
		    <NavLink to="/" activeStyle>
			  Home
			</NavLink>
			<NavLink to="/about" activeStyle>
			  About
			</NavLink>
			<NavLink to="/contactus" activeStyle>
			  Contact Us
			</NavLink>
			<NavLink to="/page1" activeStyle>
			  Page 1
			</NavLink>
			<NavLink to="/page2" activeStyle>
			  Page 2
			</NavLink>
		  </NavMenu>

		  <DropDownContainer>
			<DropDownHeader onClick={toggling}>Mangoes</DropDownHeader>
			{isOpen && (
			  <DropDownListContainer>
				<DropDownList>
				  <ListItem>Mangoes</ListItem>
				  <ListItem>Apples</ListItem>
				  <ListItem>Oranges</ListItem>
				</DropDownList>
			  </DropDownListContainer>
			)}
		  </DropDownContainer>

		  <NavBtn>
			<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		  </NavBtn>
		</Nav>
	  </>
	);
  };
	
  export default Navbar;