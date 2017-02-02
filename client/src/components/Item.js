import React from 'react';
import {Button, PropTypes} from 'react-bootstrap';

function Item(props){
	let UpdateForm = (props.selectedId === props.itemId)  
			? <form>
				<input 
					type="text"
					name="updateName"
					placeholder="Change Item Name"
					value = {props.updateName}
					onChange = {props.onInputChange}
				/>
				<input 
					type="text"
					name="updateQuantity"
					placeholder="Change Item Quantity"
					value = {props.updateQuantity}
					onChange = {props.onInputChange}
				/>
				<Button onClick={props.onUpdateItem}>Update Item</Button>
			  </form>
			: null;

	return (
		<li>
			Name: {props.name}
			<br/>
			Quantity: {props.quantity}
			<Button bsStyle='danger' onClick={props.onRemoveItem}>Delete</Button>
			<Button bsStyle='primary' onClick={props.onSelectItem}>Update</Button>
			{UpdateForm}
		</li>
	);
}

Item.propTypes = {
	selectedId: React.PropTypes.string,
	itemId: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	quantity: React.PropTypes.string.isRequired,
	updateName: React.PropTypes.string,
	updateQuantity: React.PropTypes.string,
	onInputChange:React.PropTypes.func.isRequired,
	onUpdateItem: React.PropTypes.func.isRequired,
	onRemoveItem: React.PropTypes.func.isRequired,
	onSelectItem: React.PropTypes.func.isRequired
};

export default Item;