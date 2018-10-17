import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './home'

class Main extends Component{
	render(){
		return(
			<div className="main">
				<Switch>

					<Route exact path="/" component={Home} />
				

				</Switch>
			</div>
		)
	}
}

export default Main;
