import React, {Component} from 'react';
import Item from './Item';

class ItemsList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<ul>
				{this.props.items.map((item) => {
					return <Item key={item['_id']} name={item.name} quantity={item.quantity} />
				})
				}
			</ul>
		);
	}
}

export default ItemsList;