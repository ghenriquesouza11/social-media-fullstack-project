import React from 'react';
import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/posts';

function Profile () {
	return (
		<div className="profile">
			<div className="images">
				<img src="https://wallpapercave.com/wp/wp3460281.jpg" alt="coverImg" className="cover" />
				<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-img" className="profile" />
			</div>
			<div className="profileContainer">
				<div className="profileUserInfo">
					<div className="left">
						<a href="http://facebook.com">
							<FacebookTwoToneIcon fontSize="medium" />
						</a>
						<a href="http://facebook.com">
							<InstagramIcon fontSize="medium" />
						</a>
						<a href="http://facebook.com">
							<TwitterIcon fontSize="medium" />
						</a>
						<a href="http://facebook.com">
							<LinkedInIcon fontSize="medium" />
						</a>
						<a href="http://facebook.com">
							<PinterestIcon fontSize="medium" />
						</a>
					</div>
					<div className="center">
						<span>John Doe</span>
						<div className="info">
							<div className="item">
								<PlaceIcon />
								<span>USA</span>
							</div>
							<div className="item">
								<LanguageIcon />
								<span>google.com</span>
							</div>
						</div>
						<button>follow</button>
					</div>
					<div className="right">
						<EmailOutlinedIcon />
						<MoreVertIcon />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
}

export default Profile;