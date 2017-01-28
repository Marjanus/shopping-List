import React, {Component} from 'react';
import axios from 'axios';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';
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
				this.handleDisplayResults(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}

	handleDisplayResults(data){
		this.setState({data}); // ES6 syntax
	}

	componentDidMount(){
		this.handleGetItems();
	}


	render(){
		return(
			<div>
				<h1>List</h1>
				<ItemsList items={this.state.data}/>
				<ItemForm 
					apiUrl={apiUrl}
				/>
			</div>	
		);
	}
};

export default ShoppingList;