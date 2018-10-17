import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class NavLink extends Component{
	render () {
		return(
			<div className="nav-link">
				<h2>
					{this.props.title}
				</h2>
			</div>
		)
	}
}

class Header extends Component{
	render () {
		return (
			<header>
			<h1> Board Shop </h1>
				<div className="nav-wrapper">
					<nav>
						<Link to="/"><NavLink title="Home"/></Link>
					</nav>
				</div>
			</header>
		)
	}

}

export default Header;
