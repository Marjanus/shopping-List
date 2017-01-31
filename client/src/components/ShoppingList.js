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
		this.handleUpdateItem = this.handleUpdateItem.bind(this);
	}

	handleGetItems(){
		axios.get(apiUrl)
			.then((response) => {
				this.setState({data: response.data})
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

	handleUpdateItem(itemId, item){	
		axios.put(`${apiUrl}/${itemId}`, {
			name: item.name,
			quantity: item.quantity
		})
		.catch((err) => {
			console.log(err)
		}) 
	}


	render(){
		return(
			<div>
				<h1>List</h1>
				<ItemsList
					items={this.state.data}
					onDeleteItem={this.handleDeleteItem}
					onUpdateItem={this.handleUpdateItem}
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