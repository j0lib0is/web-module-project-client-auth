import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
	state = {
		friend: {
			name: '',
			email: ''
		}
	}

	handleChange = event => {
		this.setState({
			friend: {
				...this.state.friend,
				[event.target.name]: event.target.value,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		axiosWithAuth()
			.post('/friends', this.state.friend)
			.then(res => {
				this.props.history.push('/friends');
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div>
				<h2>Add Friend</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						name='name'
						value={this.state.friend.name}
						onChange={this.handleChange}
					/>
					<input
						type='email'
						name='email'
						value={this.state.friend.email}
						onChange={this.handleChange}
					/>
					<button>Add Friend</button>
				</form>
			</div>
		);
	}
}

export default AddFriend;