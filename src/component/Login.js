import React from 'react';
import Authentication from './Authentication.js';
const loginEndpoint = 'https://api.stya.net/nim/login';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e, buildRequest, formName){
		e.preventDefault();
		fetch(loginEndpoint, buildRequest)
			.then(response => response.json())
			.then(data => {
				if(data.code === 0){
					alert("Login successfull!");
					this.props.updateAuthUser(formName, data.token);
					console.log(data.token);
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