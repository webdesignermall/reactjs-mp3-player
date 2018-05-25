import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GenreButtons extends Component  {
	render() {
		return (
			<aside className="genre-buttons">
				<Link to="/">All</Link>
				<Link to="/genre/rock">Rock</Link>
				<Link to="/genre/hiphop">Hip Hop</Link>
				<Link to="/genre/pop">Pop</Link>
			</aside>	
		);
	}
}
export default GenreButtons;