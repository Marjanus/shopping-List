import React, {Component} from 'react';
import Item from '../components/Item';

class ItemContainer extends Component{
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
		// hides update form
		this.props.onSelectForUpdate("");
	}

	handleInputChange(e){
		let obj = {};
		obj[e.target.name] = e.target.value;
		this.setState(obj);		
	}

	render(){
		return(
			<Item 
				selectedId={this.props.selectedId}
				itemId={this.props.itemId}
				name={this.props.name}
				quantity={this.props.quantity}
				updateName={this.state.updateName}
				updateQuantity={this.state.updateQuantity}
				onInputChange={this.handleInputChange}
				onUpdateItem={this.handleUpdateItem}
				onRemoveItem={this.handleRemoveItem}
				onSelectItem={this.handleSelectItem}
			/>
		);
	}
}

export default ItemContainer;