import React, {Component} from 'react';
import axios from 'axios';
const apiUrl = "http://localhost:3001/api/list";


class ShoppingList extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
		this.handleGetItems = this.handleGetItems.bind(this);
		this.handleDisplayResults = this.handleDisplayResults.bind(this);
	}

	handleGetItems(){
		axios.get(apiUrl)
			.then((response) => {
				console.log(response.data);
				this.handleDisplayResults(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}

	handleDisplayResults(data){
		let items = data.map((item) =>{
			return (
				<div key={item['_id']}>{item.name}</div>
			);
		})
		this.setState({data: items});
	}

	componentDidMount(){
		this.handleGetItems();
	}


	render(){
		return(
			<div>
				<h1>List</h1>
				{this.state.data}
			</div>	
		);
	}
};

export default ShoppingList;