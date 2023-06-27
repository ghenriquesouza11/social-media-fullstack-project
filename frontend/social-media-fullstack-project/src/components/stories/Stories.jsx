import React, { useContext } from 'react';
import './Stories.scss';
import {AuthContext} from '../../contexts/authContext';

export const Stories = () => {
	const {currentUser} = useContext(AuthContext);
	const {name, profilePic} = currentUser;
	const stories = [
		{
			id: 1,
			name: 'John Doe',
			img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		},
		{
			id: 2,
			name: 'John Doe',
			img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		},
		{
			id: 3,
			name: 'John Doe',
			img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		},
		{
			id: 4,
			name: 'John Doe',
			img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		},
	];
	return (
		<div className='stories'>
			<div 
				className="story"
			>
				<img src={profilePic} alt="story-img" />
				<span>{name}</span>
				<button>+</button>
			</div>
			{stories.map((story) => {
				const {id, name, img} = story;
				return(
					<div 
						key={id} 
						className="story"
					>
						<img src={img} alt="story-img" />
						<span>{name}</span>
					</div>
				);
			})}
		</div>
	);
};
