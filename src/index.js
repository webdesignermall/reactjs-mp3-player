import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './functions.js'
import MP3Button from './MP3Button';
import Marquee from './Marquee';
import Soundwave from './Soundwave';
import VolumeSlider from './VolumeSlider';
import AudioPlayerButtons from './AudioPlayerButtons';
import {BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

class AudioPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			soundwaveCssClass:'soundwave-hidden',
			volumeBeforeMute:.50,
			speakerEntity:"&#128266;",
		}
		this.pause = this.pause.bind(this);
		this.play = this.play.bind(this);
		this.mute = this.mute.bind(this);
		this.changeVolume = this.changeVolume.bind(this);
		this.volumeRef = React.createRef();
	}
	
	componentDidMount(){
		this.refs.audio.volume=this.state.volumeBeforeMute;
	}

	
	componentWillReceiveProps() {
		this.refs.audio.pause();
		this.refs.audio.load();
		this.refs.audio.play();
		this.setState((state)=>({
			soundwaveCssClass:'soundwave'
		}));
	}
	
	pause(){
		this.refs.audio.pause();
		this.setState((state)=>({
			soundwaveCssClass:'soundwave-hidden'
		}));
	}
		
	play(){
		this.refs.audio.play();
		this.refs.audio.volume = this.volumeRef.current.value/100;
		this.setState((state)=>({
			soundwaveCssClass:'soundwave',
			speakerEntity:'&#128266;'
		}));
		
	}

	mute(){
		if(this.refs.audio.volume==0)
		{
			// To unmute the player
			this.refs.audio.volume=this.volumeRef.current.value/100;
			this.setState((state)=>({
				soundwaveCssClass:'soundwave',
				speakerEntity:'&#128266;'
			}));
		} else {		
			// To mute the player
			this.setState((state)=>({
				soundwaveCssClass:'soundwave-hidden',
				speakerEntity:'&#128263;',
			}));
			this.refs.audio.volume=0;
		}

	}
	
	changeVolume() {
		this.refs.audio.volume = this.volumeRef.current.value/100;
		if(this.refs.audio.volume>0) {
			this.setState((state)=>({
				speakerEntity:'&#128266;',
			}));			
		} else {
			this.setState((state)=>({
				speakerEntity:'&#128263;',
			}));			
		}
	}
	
	render() {
		
		return (
			<div>
				<audio ref={this.props.childRef}>
					<source src={this.props.audiopath} type="audio/mpeg" />
				</audio>
				<AudioPlayerButtons entity={this.state.speakerEntity} pause={this.pause} play={this.play} mute={this.mute} />
				<VolumeSlider changeVolume={this.changeVolume} volumeRef={this.volumeRef}/>
				<Soundwave cssClass={this.state.soundwaveCssClass} />
			</div>
		)
	}
}

class MP3Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mp3path:'http://localhost/hwi/podcast music/mp3s/',
			mp3name:'',
			mp3artist:'',
			audiopath:'',
			mp3autoplay:'autoPlay',
			mp3genre:'Pop',
			soundwaveCssClass:'soundwave-hidden',
			currentButtonId:0,
			clickedButtonId:'',
			mp3Data:[],
			showSoundWave:'yes'

		}
	}
	
	componentWillMount() {
		var mp3title = this.state.mp3name;
		mp3title = mp3title.replace('.mp3','');
		this.changeMP3 = this.changeMP3.bind(this);
		this.setState((state)=>({
			mp3title:mp3title,
			audiopath:state.mp3path+state.mp3name,
			mp3Data:[
				{
					name:'Sugar_Lake.mp3',
					artist:'Lynne Taylor Donovan',
					genre:'Country'
				},
				{
					name:'She_Keeps_Me_Rockin.mp3',
					artist:'Tommy Roumanas',
					genre:'Rock'
				},
				{
					name:'Runaway.mp3',
					artist:'Xavier Toscana',
					genre:'Pop'
				},
				{
					name:'A_Paris_August_moon.mp3',
					artist:'Glen Naylor',
					genre:'Folk'
				},
				{
					name:'Blood On Our Hands.mp3',
					artist:'Rev. Peter Unger',
					genre:'Folk'
				},
				{
					name:'Mental.mp3',
					artist:'Infamous Crackheads',
					genre:'Hip Hop'
				},
				{
					name:'Mermaid_Angel.mp3',
					artist:'Mike Caro',
					genre:'Folk'
				},
				{
					name:'Who_You_Be.mp3',
					artist:'Infamous Crackheads',
					genre:'Hip Hop'
				},
				{
					name:'Never Wanna Leave.mp3',
					artist:'Xavier Toscano',
					genre:'Pop'
				},
				{
					name:'The_Bones_Of_Love.mp3',
					artist:'Gary Naro',
					genre:'Country'
				},
				{
					name:'Blood.mp3',
					artist:'Bruce Chamoff',
					genre:'Rock'
				},
				{
					name:'out_of_focus.mp3',
					artist:'Sierra Marie',
					genre:'New Age'
				},
				{
					name:'PARTY_BY_MYSELF.mp3',
					artist:'Cooper Philip',
					genre:'Pop'
				},
				{
					artist:'Infamous Crackheads',
					name:'Money_Matters.mp3',
					genre:'Hip Hop'
				},
				{
					name:'Stronger.mp3',
					artist:'Will Sid Smith',
					genre:'Pop'
				},
				{
					name:'Mirror_Mirror.mp3',
					artist:'Arrowhead',
					genre:'Rock'
				},
				{
					name:'Real_Time.mp3',
					artist:'Steve Ryan',
					genre:'Rock'
				},
				{
					name:'Wings.mp3',
					artist:'Altman',
					genre:'Hip Hop'
				}
			]
		}));		
	}
	
	componentDidMount() {
		var randMP3Index = Math.floor(Math.random() * this.state.mp3Data.length);
		var mp3title = this.state.mp3Data[randMP3Index].name;
		mp3title = mp3title.replace('.mp3','').replaceAll('_',' ').toUpperCase();
		this.setState((state)=>({
			mp3artist:state.mp3Data[randMP3Index].artist,
			mp3name:state.mp3Data[randMP3Index].name,
			mp3genre:state.mp3Data[randMP3Index].genre,
			mp3title:mp3title,
			audiopath:state.mp3path+state.mp3Data[randMP3Index].name,
		}));
	}
	
	changeMP3(currentButtonId, genre, name, artist) {
		var mp3title = name;
		var mp3name = name;
		mp3title = mp3title.replace('.mp3','').replaceAll('_',' ').toUpperCase();
		this.setState((state)=>({
			audiopath:state.mp3path+mp3name,
			mp3title:mp3title,
			mp3artist:artist,
			mp3genre:genre,
			soundwaveCssClass:'soundwave',
			currentButtonId:currentButtonId,
			clickedButtonId:currentButtonId,
			mp3name:mp3name
		}));
		
	}
	

	render() {

		return (
			<div className="audio-container">
				<h1>{this.props.title}</h1>
				<Marquee mp3artist={this.state.mp3artist} mp3genre={this.state.mp3genre}>{this.state.mp3title}</Marquee>	
				<section className="mp3list-buttons">
					{
						this.state.mp3Data.map((mp3,index)=>
							<MP3Button key={index} 
							changeMP3={this.changeMP3}
							clickedButtonId={this.state.mp3name}
							mp3={mp3.name}
							artist={mp3.artist}
							genre={mp3.genre}
							/>
						)
					}
				</section>
				{}
				<AudioPlayer soundwaveCssClass={this.state.soundwaveCssClass} childRef="audio" audiopath={this.state.audiopath} />
			</div>
		);
	}
}

ReactDOM.render(
  <BrowserRouter><MP3Player title="MP3 Jukebox..."/></BrowserRouter>,
  document.getElementById('root')
);
