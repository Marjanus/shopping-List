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
		this.handlePostItem = this.handlePostItem.bind(this);
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

	handlePostItem(name, quantity){
		axios.post(apiUrl, {
			name: name,
			quantity: quantity
		})
		.then(() => {
			//optimistic update
			let newState = this.state.data.concat({
				_id: Date.now().toString(),
				name: name,
				quantity: quantity
			});
			this.setState({ data: newState });
		})
		.catch((err)=>{
				console.log(err);
		})
	}

	handleDeleteItem(itemId){
		axios.delete(`${apiUrl}/${itemId}`)
		.then(()=> {
			//optimistic update
			function filterDeleted(item) {
				return item['_id'] !== itemId;
			}

			let newState = this.state.data.filter(filterDeleted);
			this.setState({data: newState});
		})	

		.catch((err) => {
			console.log(error);
		}); 
	}

	handleUpdateItem(itemId, item){	
		axios.put(`${apiUrl}/${itemId}`, {
			name: item.name,
			quantity: item.quantity
		})
		.then(() => {
			//optimistic update
			let newState = this.state.data.map((selectedItem, i) => {
				if (selectedItem['_id'] === itemId){
					if (item.name) { selectedItem.name = item.name }
					if (item.quantity){ selectedItem.quantity = item.quantity }
				}
				return selectedItem;
			});
			this.setState({data: newState});
		})
		.catch((err) => {
			console.log(err)
		}) 
	}


	componentDidMount(){
		this.handleGetItems();
		setInterval(this.handleGetItems, intervalBetweenGet);
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
					onPostItem = {this.handlePostItem}
				/>
			</div>	
		);
	}
};

export default ShoppingList;