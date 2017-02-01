import React, {Component} from 'react';
import axios from 'axios';
import ShoppingList from "../components/ShoppingList"
const apiUrl = "http://localhost:3001/api/list";
const intervalBetweenGet = 2000;

class ShoppingListContainer extends Component {
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
			let newState = this.state.data.map((selectedItem) => {
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
			<ShoppingList 
				items={this.state.data}
				onDeleteItem={this.handleDeleteItem}
				onUpdateItem={this.handleUpdateItem}
				onPostItem = {this.handlePostItem}
			/>
		);
	}
}

export default ShoppingListContainer;