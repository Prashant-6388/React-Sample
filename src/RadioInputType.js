import React from "react"

class RadioInputType extends React.Component{
	
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(id){
		console.log("You clicked "+id);
	}
	
	render(){
		return(
			<div>
				<input type="radio" id={this.props.id} value={this.props.value} name={this.props.name} 
				onClick = { () => this.handleClick(this.props.id) } /> 
				{this.props.value} 
			</div>
		);
	}
}

export default RadioInputType