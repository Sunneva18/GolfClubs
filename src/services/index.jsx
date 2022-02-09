import axios from 'axios';

const token = 'qzuxm2llvoy933etxa8d2nzj5y9p6wcv7cygz6a0';

export const getClubs = async () => {
	let allClubs;
	await axios({
		url: 'https://api.ja.is/search/v6/?q=golfklúbbur&scope=businesses&start=1&count=39&fields=first_name,phone,url,url_pretty,social,geo',
		method: 'GET',
		headers: {
			'Authorization': token,
		}
	}).then((response) => {
		allClubs = response.data.items;
	}).catch((error) => {
		console.log(error.response.data);
	});
	return allClubs;
};