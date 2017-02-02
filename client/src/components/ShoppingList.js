import React, {PropTypes} from 'react';
import ItemsListContainer from '../containers/ItemsListContainer';
import ItemFormContainer from '../containers/ItemFormContainer';

function ShoppingList(props){
	return (
		<div>
				<h1>List</h1>
				<ItemsListContainer
					items={props.items}
					onDeleteItem={props.onDeleteItem}
					onUpdateItem={props.onUpdateItem}
				/>
				<ItemFormContainer 
					onPostItem = {props.onPostItem}
				/>
			</div>	
	);
}

ShoppingList.propTypes = {
	items: PropTypes.array,
	onDeleteItem: PropTypes.func.isRequired,
	onUpdateItem: PropTypes.func.isRequired,
	onPostItem: PropTypes.func.isRequired
};

export default ShoppingList;