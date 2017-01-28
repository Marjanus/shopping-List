import React, {Component} from 'react';


class Item extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<li>
				Name: {this.props.name}
				Quantity: {this.props.quantity}
			</li>
		);
	}

}

export default Item;