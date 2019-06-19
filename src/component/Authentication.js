import React from 'react';

class Authentication extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: this.props.username,
			formName: "",
			formPass: "",
		}
		this.updateName = this.updateName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	createBody(){
		return "username="+this.state.formName+"&"+"password="+this.state.formPass;
	}

	buildRequest(){
		return {
			method: 'POST',
			headers: {
    			'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: this.createBody()	,
		};
	}

	updateName(event){
		this.setState({formName: event.target.value});
	}

	updatePassword(event){
		this.setState({formPass: event.target.value});
	}

	render(){
		return (
			<div>
				<div>
		    	<form onSubmit={(e) => this.props.handleSubmit(e, this.buildRequest(), this.state.formName)}>
					Nama:<br/>
					<input type="text" value = {this.state.formName} onChange = {this.updateName}/><br/>
					Password:<br/>
					<input type="password" value = {this.state.formPass} onChange = {this.updatePassword}/><br/>
					<input type="submit" value={this.props.type}/>
			     </form><br/>
			     </div>
			</div>
		)
	}
}

export default Authentication;