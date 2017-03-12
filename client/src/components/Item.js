import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import styles from '../../styles/item.scss';

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
				<button 
					className="button__confirm"
					onClick={props.onUpdateItem}
				>
					<i className="icon icon-ok"></i>
				</button>
			</form>
			: null;

	return (
		<li>
			<h4>{props.name}</h4>
			<h1 className={styles.blue}>red</h1>
			<button 
				className="button-rounded__edit" 
				onClick={props.onSelectItem}
			>
				<i className="icon icon-edit"></i>
			</button>
			Quantity: {props.quantity}
			<button 
				className="button-rounded__remove" 
				onClick={props.onRemoveItem}
			>
				<i className="icon icon-remove"></i>
			</button>
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