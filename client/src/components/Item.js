import React from 'react';
import {Button} from 'react-bootstrap';

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

export default Item;