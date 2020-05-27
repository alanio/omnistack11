import axios from 'axios';

const api = axios.create({
	// IP updated for WSL enviroment
	baseURL: 'http://172.19.15.223:3333'
});

export default api;



// baseURL: 'http://192.168.0.5:3333'