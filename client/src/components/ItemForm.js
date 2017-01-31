import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class ItemForm extends Component {
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
			<div>
				<h2>Form</h2>
				<form>
					<input 
						type="text" 
						value={this.state.itemName} 
						name="itemName" 
						placeholder="enter item name"
						onChange={this.handleInputChange}
					/>
					<input 
						type="text" 
						value={this.state.itemQuantity} 
						name="itemQuantity" 
						placeholder="enter item quanitity"
						onChange={this.handleInputChange}
					/>
				</form>
				<Button 
					bsStyle="success"
					onClick={this.handlePostToServer}
					>Submit
				</Button>
			</div>
		);
	}
}

export default ItemForm;
