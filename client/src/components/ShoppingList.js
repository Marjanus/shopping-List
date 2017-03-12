import React, {PropTypes} from 'react';
import ItemsListContainer from '../containers/ItemsListContainer';
import ItemFormContainer from '../containers/ItemFormContainer';
import styles from '../../styles/shoppingList.scss';

function ShoppingList(props){
	return (
		<div className="col-md-6 col-md-offset-3 listContainer">
            <h1 className={styles.blue}>List</h1>
			<ItemFormContainer 
				onPostItem = {props.onPostItem}
			/>
			<ItemsListContainer
				items={props.items}
				onDeleteItem={props.onDeleteItem}
				onUpdateItem={props.onUpdateItem}
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