import React from 'react';
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

export default ShoppingList;