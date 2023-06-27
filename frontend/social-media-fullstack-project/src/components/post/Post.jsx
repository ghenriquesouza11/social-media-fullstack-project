import React, { useState } from 'react';
import './post.scss';
import PropTypes from 'prop-types';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import { Comments } from '../comments/Comments';

const Post = ({post}) => {
	const {
		// id,
		name,
		userId,
		profilePic,
		desc,
	} = post;

	const [commentOpen, setCommentOpen] = useState(false);

	const liked = false;
	return (
		<div className='post'>
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img src={profilePic} alt="author-img" />
						<div className="details">
							<Link to={`profile/${userId}`} style={{textDecoration: 'none', color: 'inherit'}}>
								<span className='name'>{name}</span>
							</Link>
							<span className='date'>1 min ago</span>
						</div>
					</div>
					<MoreHorizIcon />
				</div>
				<div className="content">
					<p>{desc}</p>
					<img src={profilePic} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{!liked ? <FavoriteBorderOutlinedIcon /> : <FavoriteOutlinedIcon />}
            12 Likes
					</div>
					<div className="item" onClick={() => setCommentOpen(!commentOpen)}>
						<TextsmsOutlinedIcon />
            12 Comments
					</div>
					<div className="item">
						<ShareOutlinedIcon />
            Share
					</div>
				</div>
				{commentOpen ? <Comments /> : null}
			</div>
		</div>
	);
};

export default Post;

Post.propTypes = {
	post: PropTypes.shape().isRequired
};