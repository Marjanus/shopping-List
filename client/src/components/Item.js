import React, {PropTypes} from 'react';
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
			<h1>Name:</h1> {props.name}
			<br/>
			Quantity: {props.quantity}
			<Button bsStyle='danger' onClick={props.onRemoveItem}>Delete</Button>
			<Button bsStyle='primary' onClick={props.onSelectItem}>Update</Button>
			{UpdateForm}
		</li>
	);
}

Item.propTypes = {
	selectedId: PropTypes.string,
	itemId: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	quantity: PropTypes.string.isRequired,
	updateName: PropTypes.string,
	updateQuantity: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	onUpdateItem: PropTypes.func.isRequired,
	onRemoveItem: PropTypes.func.isRequired,
	onSelectItem: PropTypes.func.isRequired
};

export default Item;