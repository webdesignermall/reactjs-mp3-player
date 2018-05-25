import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';

class MP3Button extends Component {
	constructor(props) {
		super(props);
		var buttonTitle = this.props.mp3;
		buttonTitle = buttonTitle.replaceAll('_',' ').replace('.mp3','');
		this.state = {
			buttonTitle:buttonTitle,
			buttonClass:'unclicked-mp3-button'
		}
	}
	
	componentWillReceiveProps(nextProps){
		if(nextProps.clickedButtonId===nextProps.mp3) {
			this.setState((state)=>({
				buttonClass:'clicked-mp3-button'
			}));
		} else {
			this.setState((state)=>({
				buttonClass:'unclicked-mp3-button'
			}));			
		}
	}
	
	render() {
		return (
			<div className="button-div">
			<Route exact path='/' render={()=>(
				<div className="button-div">
				<button onClick={()=>this.props.changeMP3(this.state.currentButtonId,this.props.genre,this.props.mp3,this.props.artist)} id={this.props.mp3} className={this.state.buttonClass}>{this.state.buttonTitle}</button>
				</div>
			)}/>
			<Route path='/genre/rock' render={()=>(
				<div className="button-div">
				{this.props.genre==="Rock" && (
				<button onClick={()=>this.props.changeMP3(this.state.currentButtonId,this.props.genre,this.props.mp3,this.props.artist)} id={this.props.mp3} className={this.state.buttonClass}>{this.state.buttonTitle}</button>
				)}
				</div>
			)}/>
			<Route path='/hiphop' render={()=>(
				<div className="button-div">
				{this.props.genre==="Hip Hop" && (
				<button onClick={()=>this.props.changeMP3(this.state.currentButtonId,this.props.genre,this.props.mp3,this.props.artist)} id={this.props.mp3} className={this.state.buttonClass}>{this.state.buttonTitle}</button>
				)}
				</div>
			)}/>
			</div>
		)
	}
	
}

export default MP3Button;
