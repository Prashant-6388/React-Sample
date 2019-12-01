import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import QuestionTile from "./QuestionTile"
import QuestionsData from "./QuestionsData"


class App extends React.Component {

	constructor() {
		super();
		this.state = {
			start : true,
			count : 0
		}
		
		this.startExam = this.startExam.bind(this);
		this.endExam = this.endExam.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	startExam(){
		console.log("Starting exam");
		this.setState( prevState => {
			return {
				start : !prevState.start,
				count : prevState.count + 1
			}
		});
		/*this.setState( { start : true } )*/
	}
	endExam(){
		console.log("Ending exam");
		this.setState(
			{ 
				start : false
			}
		)
	}
	
	handleClick(id){
		console.log("radio button clicked");
	}

	render(){
		const questionComponents = 
			QuestionsData.map(questionData => {
				return (
					<QuestionTile key={questionData.id} 
							 id = {questionData.id}
							 question={questionData.question} 
							 option1={questionData.option1}
							 option2={questionData.option2}
							 option3={questionData.option3} 
							 option4={questionData.option4} 
					/>
				);
		});
		
		let welcomeText;
		if(this.state.start === true)
			welcomeText = "Welcome to exam";
		else
			welcomeText = "Please start the exam to continue";
		
		return(
			<div>
				if({this.state.start === false})
					<button value="startButton" onClick={this.startExam} > Start Exam </button>
				<Navbar />
				Count {this.state.count} <br/>
				{welcomeText}
				<MainContent />
				{questionComponents}
				if({this.state.start === true})
					<button value="endButton" onClick={this.endExam} > End Exam </button>
				<Footer />
			</div>
		);
	}
}

export default App