import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	}
	
	handleChange = event => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[event.target.name]: event.target.value,
			},
		})
	};

	handleSubmit = event => {
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<h2>Log In</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						name='username'
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type='password'
						name='password'
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;