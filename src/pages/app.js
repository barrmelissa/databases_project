
import React , { Component } from 'react'
import styles from "../stylesheets/css/base.css"
import Header from './templates/header'
import Main from './main'


class App extends Component {
	render() {
		return ( 
			<div className="body-div">
				<Header />
				<Main />
			</div>
		)
	}
}

export default App;
