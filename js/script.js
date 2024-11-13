window.addEventListener('DOMContentLoaded', () => {
	//XMLHttpRequest 
/* 	function req() {
		const request = new XMLHttpRequest();
		request.open('GET', 'http://localhost:3000/people');
		request.setRequestHeader('Contet-type', 'application/json; charset=utf-8');
		request.send();

		request.addEventListener('load', function() {
			if (request.status === 200) {
				let data = JSON.parse(request.response);
				console.log(data);
				createCards(data);
				
			} else {
				console.error('Something went wrong');
			}
		});
		this.remove();
	}

	document.querySelector('button').addEventListener('click', req, {'once': true});

	function createCards(response) {
		response.forEach(item => {
			let card = document.createElement('div');
			card.classList.add('card');

			let icon;
			if (item.sex === 'male') {
				icon = 'icons/mars.png';
			} else {
				icon = 'icons/female.png';
			}

			card.innerHTML = `
			<img src='${item.photo}' alt='user photo'>
			<div class='name'>${item.name}</div>
			<div class='sex'><img src=${icon} alt='icon'></div>
			<div class='age'>${item.age}</div>
			`;

			document.querySelector('.app').appendChild(card);
		});
	} */

	//fetch
/* 	function req() {
		getResource('http://localhost:3000/people')
			.then(data => createCards(data))
			.catch(err => console.error(err));
		
		this.remove();
	}
	document.querySelector('button').addEventListener('click', req, {'once': true});

	async function getResource(url) {
		const res = await fetch(`${url}`);

		if(!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	function createCards(response) {
		response.forEach(item => {
			let card = document.createElement('div');
			card.classList.add('card');

			let icon;
			if (item.sex === 'male') {
				icon = 'icons/mars.png';
			} else {
				icon = 'icons/female.png';
			}

			card.innerHTML = `
			<img src='${item.photo}' alt='user photo'>
			<div class='name'>${item.name}</div>
			<div class='sex'><img src=${icon} alt='icon'></div>
			<div class='age'>${item.age}</div>
			`;

			document.querySelector('.app').appendChild(card);
		});
	} */
    
	//axios
/* 	function req() {
		getResource('http://localhost:3000/people')
			.then(data => createCards(data.data))
			.catch(err => console.error(err));
		
		this.remove();
	}
	document.querySelector('button').addEventListener('click', req, {'once': true});

	async function getResource(url) {
		const res = await axios(`${url}`);
		if (res.status !== 200) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return res;
	}

	function createCards(response) {
		response.forEach(item => {
			let card = document.createElement('div');
			card.classList.add('card');

			let icon;
			if (item.sex === 'male') {
				icon = 'icons/mars.png';
			} else {
				icon = 'icons/female.png';
			}

			card.innerHTML = `
			<img src='${item.photo}' alt='user photo'>
			<div class='name'>${item.name}</div>
			<div class='sex'><img src=${icon} alt='icon'></div>
			<div class='age'>${item.age}</div>
			`;

			document.querySelector('.app').appendChild(card);
		});
	}	 */

	//POST: XMLHttpRequest: FormData: json
/* 	const form = document.querySelector('form');
	function req(e) {
		e.preventDefault();
		let formData = new FormData(form);
		formData.append('id', Math.random());

		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		const request = new XMLHttpRequest();
		request.open('POST', 'http://localhost:3000/people');
		request.setRequestHeader('Contet-type', 'application/json; charset=utf-8');
		request.send(json);

		request.addEventListener('load', function() {
			if (request.status === 200) {
				let data = JSON.parse(request.response);
				console.log(data);
				// createCards(data);
				
			} else {
				console.error('Something went wrong');
			}
		});
		// this.remove();
	}

	form.addEventListener('submit', (e) => req(e), {'once': true}); */

	//POST: fetch: FormData: json
/* 	const form = document.querySelector('form');
	function req(e) {
		e.preventDefault();
		let formData = new FormData(form);
		formData.append('id', Math.random());

		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});

		async function getResource(url, data) {
			const res = await fetch(`${url}`, {
				method: 'POST',
				headers: {
					'Contet-type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			if(!res.ok) {
				throw new Error(`Could not fetch ${url}, status: ${res.status}`);
			}
			return await res.json();
		}

		getResource('http://localhost:3000/people', obj)
			.catch(err => console.error(err));
		
	}

	form.addEventListener('submit', (e) => req(e), {'once': true}); */

	//POST: axios: FormData: json
/* 	const form = document.querySelector('form');
	function req(e) {
		e.preventDefault();
		let formData = new FormData(form);
		formData.append('id', Math.random());

		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});
		axios.post('http://localhost:3000/people', obj);
	}

	form.addEventListener('submit', (e) => req(e), {'once': true}); */

	//POST: XMLHttpRequest: FormData: classic
/* 	const form = document.querySelector('form');
	function req(e) {
		e.preventDefault();
		let formData = new FormData(form);

		const request = new XMLHttpRequest();
		request.open('POST', './api.php');
		// request.setRequestHeader('Contet-type', 'multipart/form-data');
		request.send(formData);

		request.addEventListener('load', function() {
			if (request.status === 200) {
				console.log(request.response);
			} else {
				console.error('Something went wrong');
			}
		});
	}

	form.addEventListener('submit', (e) => req(e), {'once': true}); */

	//POST: fetch: FormData: classic
/* 	const form = document.querySelector('form');
	function req(e) {
		e.preventDefault();
		let formData = new FormData(form);

		async function getResource(url, data) {
			const res = await fetch(`${url}`, {
				method: 'POST',
				body: data
			});
			if(!res.ok) {
				throw new Error(`Could not fetch ${url}, status: ${res.status}`);
			}
			return await res.text();
		}

		getResource('./api.php', formData)
			.then(data => console.log(data))
			.catch(err => console.error(err));
	}

	form.addEventListener('submit', (e) => req(e), {'once': true}); */

	//POST: axios: FormData: classic
	const form = document.querySelector('form');
	function req(e) {
		e.preventDefault();
		let formData = new FormData(form);

		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});
		axios({
			method: 'post',
			url: './api.php',
			data: formData
			// headers: {'content-type': 'multipart/form-data'}
		})
		.then(data => console.log(data.data));
	}

	form.addEventListener('submit', (e) => req(e), {'once': true});
});