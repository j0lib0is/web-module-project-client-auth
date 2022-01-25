import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	state = {
		friends: []
	};
	
	componentDidMount() {
		const token = localStorage.getItem('token');

		axiosWithAuth()
			.get('/friends')
			.then(res => {
				this.setState({
					friends: res.data,
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div>
				<h2>Friend's List</h2>
				{this.state.friends.map(friend => {
					return <p>{friend.name} - {friend.email}</p>;
				})}
			</div>
		);
	}
}

export default FriendsList;