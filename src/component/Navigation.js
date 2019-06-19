import React from 'react';
import logo from '../logo.svg';
import Register from './Register.js';
import Login from './Login.js';

class Navigation extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			username: "Guest",
			activeTab: 0,
			token: "",
		}
		this.updateAuthUser = this.updateAuthUser.bind(this);
		this.updateTab = this.updateTab.bind(this);
	}

	updateAuthUser(newUsername, newToken){
		this.setState({username: newUsername});
		this.setState({token: newToken});
	}

	isLogin(){
		return !(this.state.username === "Guest")
	}

	updateTab = (num) => () => {
		this.setState({activeTab: num})
	}

	render(){
		const isLoggedIn = this.isLogin();
		let tab;
		if (this.state.activeTab === 1) {
			tab = <Register/>
		} else if(this.state.activeTab === 2){
			tab = <Login updateAuthUser={this.updateAuthUser}/>
		}
		return (
		<div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <div>
				<b>{isLoggedIn ? this.state.username : "Please register before using this this nim-finder"}</b>
			  </div>
			  <div>
			  	<a onClick = {this.updateTab(1)}>Register</a>
			  </div>
			  <div>
			  	<a onClick = {this.updateTab(2)}>Login</a>
			  </div>
			  {tab}
	        </header>
	      </div>
	    );  
	}
}

export default Navigation;