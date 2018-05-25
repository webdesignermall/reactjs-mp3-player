// AudioPlayerButtons
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AudioPlayerButtons extends Component {
	
	shouldComponentUpdate(newProps) {
		if(newProps.entity !== this.props.entity) {
			console.log('component has update');
			return true;
		} else {
			console.log('component has not updated.');
			return false;
		}
	}
	
	render() {
		return (
				<aside>
					<button onClick={this.props.pause} className='pause-button'>||</button>
					<button onClick={this.props.play} className='play-button'>&#9654;</button>
					<button onClick={this.props.mute} className='mute-button' dangerouslySetInnerHTML={{__html: this.props.entity}} ></button>
				</aside>
			);
	}
}

export default AudioPlayerButtons;