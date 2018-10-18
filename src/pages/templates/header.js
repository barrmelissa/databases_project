import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class NavLink extends Component{
	render () {
		return(
			<div className="nav-link">
				<Link to={this.props.path}>
					<h2>
						{this.props.title}
					</h2>
				</Link>
			</div>
		)
	}
}

class Header extends Component{
	render () {
		return (
			<header className="top-bar">
				<div className="nav-wrapper">

						<NavLink title="BoardStore" path="/"/>
						<NavLink title="About" path="/about"/>
						<NavLink title="Contact" path="/ContactUs" />
						<NavLink title="Locations" path="/Locations"/>
						<NavLink title="Offers" path="/Offers"/>
						<NavLink title="Products" path="/Products"/>

				</div>
			</header>
		)
	}

}

export default Header;
