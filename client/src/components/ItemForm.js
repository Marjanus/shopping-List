import React, {PropTypes} from 'react';
import { Button } from 'react-bootstrap';

function ItemForm(props){
	return(
		<div>
			<h2>Form</h2>
			<form>
				<input 
					type="text" 
					value={props.itemName} 
					name="itemName" 
					placeholder="enter item name"
					onChange={props.onInputChange}
				/>
				<input 
					type="text" 
					value={props.itemQuantity} 
					name="itemQuantity" 
					placeholder="enter item quanitity"
					onChange={props.onInputChange}
				/>
			</form>
			<Button 
				bsStyle="success"
				onClick={props.onPostToServer}
				>Submit
			</Button>
		</div>
	);
}

ItemForm.propTypes = {
	itemName: React.PropTypes.string.isRequired,
	itemQuantity: React.PropTypes.string.isRequired,
	onInputChange: React.PropTypes.func.isRequired,
	onPostToServer: React.PropTypes.func.isRequired
}

export default ItemForm;
