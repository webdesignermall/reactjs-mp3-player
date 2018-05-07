import React,{Component} from 'react';

class VolumeSlider extends Component {
	
	render() {
	
		return (
			<input onChange={this.props.changeVolume} type="range" min="0" max="100" className="slider" ref={this.props.volumeRef} />
		);
	}

}

export default VolumeSlider;