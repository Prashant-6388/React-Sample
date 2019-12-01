import React from "react";
import RadioInputType from "./RadioInputType";

class QuestionTile extends React.Component{
	render(){
		return (
			<div>
				<h3 style={{color:"orange"}}>{this.props.question} </h3>
				<RadioInputType id = {this.props.id + "o1" } value={this.props.option1} name ="option"/>
				<RadioInputType id = {this.props.id + "o2" } value={this.props.option2} name ="option"/>
				<RadioInputType id = {this.props.id + "o3" } value={this.props.option3} name ="option"/>
				<RadioInputType id = {this.props.id + "o4" } value={this.props.option4} name ="option"/>
			</div>
		);
	}
}

export default QuestionTile