import React from 'react';
import Link from 'gatsby-link';
import images from '../images';
import './Header.css';

const Header = ({ siteTitle }) => (
	<div className="Header">
		<div className="HeaderGroup">
			<Link to="/">
				<img src={images.logo} width="30" alt=""/>
			</Link>
			<Link to="/courses">Courses</Link>
			<Link to="/downloads">Downloads</Link>
			<Link to="/workshops">Workshops</Link>
			<Link to="/buy">
				<button role="button">Buy</button>
			</Link>
		</div>
	</div>
)

export default Header
