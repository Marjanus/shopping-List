import React, {Component} from 'react';
import Item from './Item';

class ItemsList extends Component{
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
					return <Item 
						key={item['_id']} 
						name={item.name} 
						quantity={item.quantity} 
						itemId ={item['_id']}
						onDeleteItem = {this.props.onDeleteItem}
						onUpdateItem = {this.props.onUpdateItem}
						onSelectForUpdate = {this.handleSelectForUpdate}
						selectedId = {this.state.selectedForUpdate}
					/>
				})
				}
			</ul>
		);
	}
}

export default ItemsList;