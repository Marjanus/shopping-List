import React, {Component} from 'react';
import ItemContainer from './ItemContainer';

class ItemsListContainer extends Component{
	constructor(props){
		super(props);
		this.state = {selectedForUpdate: ''};
		this.handleSelectForUpdate = this.handleSelectForUpdate.bind(this);
	}

	handleSelectForUpdate(itemId){
		this.setState({selectedForUpdate: itemId})
	}

	render(){
		return(
			<ul>
				{this.props.items.map((item) => {
					return(
						<ItemContainer 
							key={item['_id']} 
							itemId ={item['_id']}
							name={item.name} 
							quantity={item.quantity} 
							onDeleteItem = {this.props.onDeleteItem}
							onUpdateItem = {this.props.onUpdateItem}
							onSelectForUpdate = {this.handleSelectForUpdate}
							selectedId = {this.state.selectedForUpdate}
						/>
					) 
				})
				}
			</ul>
		);
	}
}

export default ItemsListContainer;