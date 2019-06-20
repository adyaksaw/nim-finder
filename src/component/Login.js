import React from 'react';
import Cookies from 'universal-cookie';
import Authentication from './Authentication.js';
const loginEndpoint = 'https://api.stya.net/nim/login';
const cookiesTime = 1000*60*60;

class Login extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e, buildRequest, formName){
		const cookies = new Cookies();
		e.preventDefault();
		fetch(loginEndpoint, buildRequest)
			.then(response => response.json())
			.then(data => {
				if(data.code === 0){
					alert("Login successfull!");
					this.props.updateAuthUser(formName, data.token);
					cookies.set('token', data.token, {expires: new Date(Date.now()+cookiesTime)})
					cookies.set('username', formName, {expires: new Date(Date.now()+cookiesTime)})
					this.props.removeTab();
				} else {
					alert(data.status);
				}
			});
		return false;
	}
  
	render(){
		return (
			<div>
				<Authentication handleSubmit={this.handleSubmit} type="Login"/>
			</div>
		)
	}
}

export default Login;