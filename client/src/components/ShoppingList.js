import React, {Component} from 'react';
import axios from 'axios';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';
const apiUrl = "http://localhost:3001/api/list";
const intervalBetweenGet = 2000;


class ShoppingList extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
		this.handleGetItems = this.handleGetItems.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
	}

	handleGetItems(){
		axios.get(apiUrl)
			.then((response) => {
				this.setState({data: response.data},
					console.log(this.state.data));
			})
			.catch((error) => {
				console.log(error);
			})
	}

	componentWillMount(){
		this.handleGetItems();
		
	}

	componentDidMount(){
		setInterval(this.handleGetItems, intervalBetweenGet);
	}

	handleDeleteItem(itemId){
		axios.delete(`${apiUrl}/${itemId}`)
			.catch((err) => {
				console.log(error);
			}); 
	}


	render(){
		return(
			<div>
				<h1>List</h1>
				<ItemsList
					items={this.state.data}
					onDeleteItem={this.handleDeleteItem}
				/>
				<ItemForm 
					apiUrl={apiUrl}
				/>
				<button onClick={this.handleDeleteItem}>Test</button>
			</div>	
		);
	}
};

export default ShoppingList;