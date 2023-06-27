import React, { useContext } from 'react';
import './Comments.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

export const Comments = () => {
	const {currentUser} = useContext(AuthContext);
	const {profilePic} = currentUser;
	const comments = [
		{
			id: 1,
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam',
			name: 'John Doe',
			userId: 1,
			profilePicture:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		},
		{
			id: 2,
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam',
			name: 'Jane Doe',
			userId: 2,
			profilePicture:
            'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
	];
	return (
		<div className='comments'>
			<div className="write">
				<img src={profilePic} alt="user-img" />
				<input type="text" placeholder='Write a comment' />
				<button>Send</button>
			</div>
			{comments.map((comment) => {
				const {id, desc, name, userId, profilePicture} = comment;
				return(
					<div 
						className="comment"
						key={id}
					>
						<img src={profilePicture} alt="user-img" />
						<div className="info">
							<Link to={`/profile/${userId}`} style={{textDecoration:'none', color:'inherit'}}>
								<span>{name}</span>
							</Link>
							<p>{desc}</p>
						</div>
						<span className='date'>1 hour ago</span>
					</div>
				);
			})}
		</div>
	);
};
