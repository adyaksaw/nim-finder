import React from 'react';
import Table from './Table.js';
import '../Css/button.css'
const byEndPoint = ["https://api.stya.net/nim/byid", "https://api.stya.net/nim/byname"];
const defaultCount = 10;

class Query extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isTyped: false,
			isQueried: false,
			query: "",
			currentPage: 0,
			queriedData: [],
			queryType: 0,
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
			this.setState({isQueried: true})
			this.timerId = null;
			this.setState({queriedData: null});
			fetch(this.buildEndPoint(byEndPoint[this.state.queryType], this.state.query, defaultCount, page), this.buildRequest())
			.then(response => response.json())
			.then(data => {
				if(data.status === "OK"){
					this.setState({queriedData: data.payload.slice(0)})
				} else {
					alert(data.code);
				}
			});
		}
	}

	prepareQuery(e){
		this.setState({query: e.target.value})
		this.setState({isQueried: false})
		this.timerId = setInterval(
			() => this.handleQuery(0),
			300)
	}

	changeQueryType = (num) => () => {
		this.setState({queryType: num})
	}

	nextPage = () => {
		this.setState({currentPage: this.state.currentPage+1})
		this.handleQuery(this.state.currentPage);
	}

	prevPage = () => {
		this.setState({currentPage: this.state.currentPage-1})
		this.handleQuery(this.state.currentPage);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render(){
		console.log(this.state.queriedData);
		return(
			<div>
				<form>
					<input type="radio" name="queryType" value="nim" onChange={this.changeQueryType(0)}/> By NIM<br/>
  					<input type="radio" name="queryType" value="name" onChange={this.changeQueryType(1)}/> By Name<br/>
				</form>
				<form>
					<input type="text" value={this.state.query} onChange={this.prepareQuery}/><br/>
				</form>
				{this.state.isQueried ?
					<div>
						<Table data={this.state.queriedData}/>
						{this.state.currentPage > 0 ? <button class="btn" onClick={this.prevPage}>Previous</button> : null}
						{this.state.queriedData != null && this.state.queriedData.length < 10 && this.state.isQueried ? 
							null : <button class="btn" onClick={this.nextPage}>Next</button>}
					</div> : null}
			</div>
		)
	}
}

export default Query;