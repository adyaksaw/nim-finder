import React, { Component } from 'react';
import logo from './logo.svg';
import Register from './Register.js';

class Controller extends Component{
	render(){
		return (
		<div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <Register />
	        </header>
	      </div>
	    );  
	}
}

export default Controller;