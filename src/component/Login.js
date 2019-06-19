import React from 'react';
import Authentication from './Authentication.js';
const registerEndpoint = 'https://api.stya.net/nim/login';
class Login extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e, buildRequest, formName){
		e.preventDefault();
		fetch(registerEndpoint, buildRequest)
			.then(response => response.json())
			.then(data => {
				if(data.code === 0){
					alert("Login successfull!");
					this.props.updateAuthUser(formName, data.token);
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