import React, {Component, PropTypes} from 'react';
import ItemForm from '../components/ItemForm';

class ItemFormContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			itemName: '',
			itemQuantity: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handlePostToServer = this.handlePostToServer.bind(this);
	}

	handleInputChange(e){
		var obj = {};
		obj[e.target.name] = e.target.value;
		this.setState(obj);
	}

	handlePostToServer(e){
		e.preventDefault();
		if(!this.state.itemName || !this.state.itemQuantity) {
			//add ui warning;
			return
		}
		this.props.onPostItem(this.state.itemName, this.state.itemQuantity);
		this.setState({
			itemName: '',
			itemQuantity: ''
		});
	}

	render(){
		return(
			<ItemForm 
				itemName={this.state.itemName} 
				itemQuantity={this.state.itemQuantity}
				onInputChange={this.handleInputChange}
				onPostToServer={this.handlePostToServer}
			/>
		);
	}
}

ItemFormContainer.propTypes = {
	onPostItem: PropTypes.func.isRequired
}

export default ItemFormContainer;
