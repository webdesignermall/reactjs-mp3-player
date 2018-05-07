import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
			<button onClick={()=>this.props.changeMP3(this.state.currentButtonId,this.props.genre,this.props.mp3,this.props.artist)} id={this.props.mp3} className={this.state.buttonClass}>{this.state.buttonTitle}</button>
		)
	}
	
}

export default MP3Button;
