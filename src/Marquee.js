import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Marquee extends Component {
	render() {
		return (
			<section className="music-marquee">
				<div className="headings">
				{this.props.mp3artist} - {this.props.children} ({this.props.mp3genre})
				</div>
			</section>
		);
	}
}

export default Marquee;
