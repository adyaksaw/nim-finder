import React from 'react';
const byIdEndpoint = 'https://api.stya.net/nim/byid';
const byNameEndpoint = 'https://api.stya.net/nim/byname';

class Query extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isTyped: false,
			isQueried: false,
			query: "",
			currentPage: 0,
			queriedData: []
		}
		this.prepareQuery = this.prepareQuery.bind(this);
	}

	buildRequest(){
		return {
			method: 'GET',
			headers: {
    			'Auth-Token': this.props.token,
			},
		};
	}

	buildEndPoint(endPoint, query, count, page){
		return endPoint+"?query="+query+"&count="+count+"&page="+page;
	}

	handleQuery(page){
		if(!this.state.isQueried || page > 0){
			this.state.isQueried = true
			this.timerId = null;
			this.queriedData = [];
			var json;
			fetch(this.buildEndPoint(byIdEndpoint, this.state.query, 10, 1), this.buildRequest())
			.then(response => response.json())
			.then(data => {
				if(data.status === "OK"){
					for(json in data.payload){
						this.queriedData.push(data.payload[json]);
					}
				} else {
					alert(data.code);
				}
			});
			fetch(this.buildEndPoint(byNameEndpoint, this.state.query, 10, 0), this.buildRequest())
			.then(response => response.json())
			.then(data => {
				if(data.status === "OK"){
					for(json in data.payload){
						this.queriedData.push(data.payload[json]);
					}
				} else {
					alert(data.status);
				}
			});
		}
	}

	prepareQuery(e){
		this.setState({query: e.target.value})
		this.state.isQueried = false
		this.timerId = setInterval(
			() => this.handleQuery(0),
			300)
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render(){
		return(
			<div>
				<form>
					<input type="text" value={this.state.query} onChange={this.prepareQuery}/><br/>
					{this.state.isQueried ?
						<div>

						</div> : null}
				</form>
			</div>
		)
	}
}

export default Query;