import React from 'react';
import Authentication from './Authentication.js'
const registerEndpoint = 'https://api.stya.net/nim/register';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e, buildRequest, formName){
		console.log(e);
		e.preventDefault();
		fetch(registerEndpoint, buildRequest)
			.then(response => response.json())
			.then(data => {
				if(data.code === 0){
					alert("Username has been registered!")
				} else {
					alert(data.status);
				}
			});
		return false;
	}
  
	render() {
		return (
			<div>
				<Authentication handleSubmit={this.handleSubmit} type="Register"/>
		  	</div>
		);
  }
}

export default Register;