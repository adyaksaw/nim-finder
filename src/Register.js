import React from 'react';

const registerEndpoint = 'https://api.stya.net/nim/register';

class Register extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			username: "Guest",
			formName: "",
			formPass: "",
			status: "",
		}

		this.updateName = this.updateName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	buildRequest(){
		return {
			method: 'POST',
			headers: {
    			'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: this.createBody()	
		};
	}

	createBody(){
		return "username="+this.state.formName+"&"+"password="+this.state.formPass;
	}

	updateName(event){
		this.setState({formName: event.target.value});
	}

	updatePassword(event){
		this.setState({formPass: event.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		fetch(registerEndpoint, this.buildRequest())
			.then(response => response.json())
			.then(data => {
				if(data.code === 0){
					this.setState({username: this.state.formName});
				} else {
					alert(data.status);
				}
			});
		return false;
	}
  
	render() {
		return (
			<div>
				<div>
					<b>{this.state.username}</b>
				</div>
				<div>
		    	<form onSubmit={this.handleSubmit}>
						  Nama:<br/>
						  <input type="text" value = {this.state.formName} onChange = {this.updateName}/><br/>
						  Password:<br/>
						  <input type="password" value = {this.state.formPass} onChange = {this.updatePassword}/><br/>
						  <input type="submit" value="Register"/>
			     </form><br/>
			     </div>
		  </div>
		);
  }
}

export default Register;