import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {
	const { push } = useHistory();

	useEffect(() => {
		const token = localStorage.getItem('token');

		axiosWithAuth()
			.post('http://localhost:9000/api/logout')
			.then(res => {
				localStorage.removeItem('token');
				localStorage.removeItem('username');
				localStorage.removeItem('role');
				push('/');
			})
			.catch(err => console.error(err));
	}, []);

	return(<div></div>);
}

export default Logout;