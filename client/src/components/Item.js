import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Item extends Component{
	constructor(props){
		super(props);
		this.state = {
			updateName: '',
			updateQuantity: ''
		};
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleUpdateItem = this.handleUpdateItem.bind(this); 
		this.handleSelectItem = this.handleSelectItem.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSelectItem(){
		let itemId = this.props.itemId;
		this.props.onSelectForUpdate(itemId);
	}

	handleRemoveItem(){
		let itemId = this.props.itemId;
		this.props.onDeleteItem(itemId);
	}

	handleUpdateItem(){
		let itemId = this.props.itemId;
		let item = {};
		if (this.state.updateName){item.name = this.state.updateName}
		if (this.state.updateQuantity){item.quantity = this.state.updateQuantity}
		this.props.onUpdateItem(itemId, item);
		this.setState({ 
			updateName: '',
			updateQuantity: ''
		});
	}

	handleInputChange(e){
		let obj = {};
		obj[e.target.name] = e.target.value;
		console.log(obj);
		this.setState(obj);
		
	}

	render(){

		let UpdateForm = (this.props.selectedId === this.props.itemId)  
			? <form>
				<input 
					type="text"
					name="updateName"
					placeholder="Change Item Name"
					value = {this.state.updateName}
					onChange = {this.handleInputChange}
				/>
				<input 
					type="text"
					name="updateQuantity"
					placeholder="Change Item Quantity"
					value = {this.state.updateQuantity}
					onChange = {this.handleInputChange}
				/>
				<Button onClick={this.handleUpdateItem}>Update Item</Button>
			  </form>
			: null

		return(
			<li>
				Name: {this.props.name}
				<br/>
				Quantity: {this.props.quantity}
				<Button bsStyle='danger' onClick={this.handleRemoveItem}>Delete</Button>
				<Button bsStyle='primary' onClick={this.handleSelectItem}>Update</Button>
				{UpdateForm}
			</li>
		);
	}

}

export default Item;