import React from 'react';
import axios from 'axios';

// import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	state = {
		friends: []
	};

	componentDidMount() {
		const token = localStorage.getItem('token');

		axios.get('http://localhost:9000/api/friends')
			.then(res => {
				this.setState({
					friends: res,
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div>
				<h2>Friend's List</h2>
				<p className='friend'>Joey Tribbiani - joey@friends.com</p>
				<p className='friend'>Rachel Green - rachel@friends.com</p>
				<p className='friend'>Chandler Bing - chandler@friends.com</p>
				<p className='friend'>Ross Geller - ross@friends.com</p>
				<p className='friend'>Monica Bing - Monica@friends.com</p>
				<p className='friend'>Phoebe Buffay-Hannigan - phoebe@friends.com</p>
			</div>
		);
	}
}

export default FriendsList;