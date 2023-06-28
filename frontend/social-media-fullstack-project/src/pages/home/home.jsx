import React from 'react';
import './home.scss';
import { Stories } from '../../components/stories/Stories';
import Posts  from '../../components/posts/posts';

function Home () {
	return (
		<div className="home">
			<Stories />
			<Posts />
		</div>
	);
}

export default Home;