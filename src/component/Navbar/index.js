import React from 'react';
import "./index.css";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/events' activeStyle>
			Events
		</NavLink>
		
		
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/Register' activeStyle>
			Register
		</NavLink>
		
		</NavMenu>

		<NavBtn className='btn'>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
