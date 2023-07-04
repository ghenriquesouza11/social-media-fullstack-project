import React from 'react';
import './posts.scss';
import Post from '../post/Post';
import { useQuery } from 'react-query';
import { makeRequest } from '../../axios';

const Posts = () => {
	
	const {isLoading, error, data } = useQuery(['posts'], async () => {
		const res = await makeRequest.get('/posts');
		return res.data;
	}) ;
	
	return (
		<div className='posts'>
			{error ? 'Something went wrong!' : (isLoading ? 'loading...' : data.map((post) => {
				const { postId} = post;
				return (
					<Post key={postId} post={ post } />
				);
			}))}
		</div>
	);
};

export default Posts;
