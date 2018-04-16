import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

class MP3Player extends Component {
	render() {
		return (
			<div className="audio-container">
				<h1>{this.props.title}</h1>
				<Marquee mp3artist="Bruce Chamoff" mp3genre="Rock">Blood</Marquee>
			</div>
		);
	}
}

ReactDOM.render(
  <MP3Player title="MP3 Jukebox..."/>,
  document.getElementById('root')
);
