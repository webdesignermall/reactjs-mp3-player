import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GenreButtons extends Component  {
	render() {
		return (
			<aside className="genre-buttons">
				<Link to="/">All</Link> | 
				<Link to="/rock">Rock</Link> | 
				<Link to="/hiphop">Hip Hop</Link>
			</aside>	
		);
	}
}
export default GenreButtons;