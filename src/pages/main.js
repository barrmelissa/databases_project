import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './home'
import About from './about'
import Contact from './contact'
import Locations from './locations'
import Offers from './offers'
import Products from './products'

class Main extends Component{
	render(){
		return(
			<div className="main">
				<Switch>

					<Route exact path="/" component={Home} />
					<Route exact path="/About" component={About} />
					<Route exact path="/ContactUs" component={Contact} />
					<Route exact path="/Locations" component={Locations} />
					<Route exact path="/Offers" component={Offers} />
					<Route exact path="/Products" component={Products} />
				
				</Switch>
			</div>
		)
	}
}

export default Main;
