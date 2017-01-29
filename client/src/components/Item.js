import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Item extends Component{
	constructor(props){
		super(props);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}

	handleRemoveItem(){
		let itemId = this.props.itemId;
		this.props.onDeleteItem(itemId);
	}

	render(){
		return(
			<li>
				Name: {this.props.name}
				<br/>
				Quantity: {this.props.quantity}
				<Button bsStyle='danger' onClick={this.handleRemoveItem}>Delete</Button>
			</li>
		);
	}

}

export default Item;