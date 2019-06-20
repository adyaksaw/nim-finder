import React from 'react';
import logo from '../logo.svg';
import Register from './Register.js';
import Login from './Login.js';
import Query from './Query.js';
import Cookies from 'universal-cookie';

class Navigation extends React.Component{
	constructor(props){
		super(props);
		const cookies = new Cookies();
		this.state = {
			username: (cookies.get('token') == null) ? "Guest" : cookies.get('username'),
			activeTab: 0,
			token: cookies.get('token'),
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

	logout = () => {
		var cookies = new Cookies();
		this.setState({username: "Guest"});
		this.setState({token: ""});
		cookies.remove('token');
		cookies.remove('username');
		this.setState({activeTab: 0});
	}

	updateTab = (num) => () => {
		this.setState({activeTab: num})
	}

	remoteTab = () => {
		this.setState({activeTab: 0})
	}

	render(){
		const isLoggedIn = this.isLogin();
		let tab;
		if (this.state.activeTab === 1) {
			tab = <Register/>
		} else if(this.state.activeTab === 2){
			tab = <Login updateAuthUser={this.updateAuthUser} removeTab={this.remoteTab}/>
		} else if(this.state.activeTab === 3){
			tab = <Query token = {this.state.token}/>
		}
		return (
		<div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <div>
				<b>{isLoggedIn ? this.state.username : "Please register before using this this nim-finder"}</b>
			  </div>
			  {isLoggedIn ? 
			  	<div>
				  	<div>
						<button class="btn" onClick = {this.updateTab(3)}>Query</button>
				  	</div> 
				  	<div>
						<button class="btn" onClick = {this.logout}>Logout</button>
				  	</div>
			  	</div>: 	
			  	<div>		  
				  	<div>
				  		<button class="btn" onClick = {this.updateTab(1)}>Register</button>
				  	</div>
				  	<div>
				  		<button class="btn" onClick = {this.updateTab(2)}>Login</button>
				  	</div>
			  	</div>
			  	}
			  	{tab}
	        </header>
	      </div>
	    );  
	}
}

export default Navigation;