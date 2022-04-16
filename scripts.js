const banners = () => {
	const bannersData = {
		titles: [
			'Promoção Notebooks',
			'Lançamento de acessórios',
			'Câmeras Potentes',
		],
	};

	for (let i = 0; i < bannersData.titles.length; i++) {
		const bannersContainer = document.querySelector('.banners');
		bannersContainer.innerHTML += `
		<div class="banner" id="banner-${i + 1}">
			<div class="banner-cover"></div>
			<div class="banner-content">
				<h2>${bannersData.titles[i]}</h2>
				<a href="#">Ver Mais <i class="fas fa-arrow-circle-right"></i></a>
			</div>
		</div>
	`;
	}
};

const products = () => {
	const productsData = {
		names: ['Monitor', 'Microfone HyperX', 'Televisor LCD', 'Gabinete'],
		images: [
			'/assets/images/prod-1.jpg',
			'/assets/images/prod-2.jpg',
			'/assets/images/prod-3.jpg',
			'/assets/images/prod-4.jpg',
		],
		prices: ['R$1250', 'R$850', 'R$999,90', 'R$489,90'],
		ratings: {
			prod1: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
			],
			prod2: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'far fa-star',
			],
			prod3: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'far fa-star',
				'far fa-star',
			],
			prod4: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'far fa-star',
			],
		},
	};

	const productRating = (index) => {
		const values = Object.values(productsData.ratings);
		let aux = '';
		for (const rating of values[index]) {
			aux = aux + `<i class="${rating}"></i>`;
		}
		return aux;
	};

	productsData.names.map((prod, index) => {
		const productsContainer = document.querySelector(
			'.products-grid-container'
		);
		productsContainer.innerHTML += `
		<div class="products-grid-card">
			<span class="label new">New</span>
			<img src=${productsData.images[index]} alt="product-${index + 1}">
			<p class="category">Categoria</p>
			<h3 class="product-name">${prod}</h3>
			<p class="product-price">${productsData.prices[index]}</p>
			<div class="rating-box">
				${productRating(index)}
			</div>
			<button class="btn">Comprar</button>
		</div>
	`;
	});
};

const productsBestSellers = () => {
	const productsData = {
		names: [
			'Controle Xbox sem fio',
			'Samsung Galaxy A50 128GB ',
			'ACER Notebook Gamer Nitro 5',
			'Mouse Gamer Redragon',
		],
		images: [
			'/assets/images/prod-5.jpg',
			'/assets/images/prod-6.jpg',
			'/assets/images/prod-7.jpg',
			'/assets/images/prod-8.jpg',
		],
		prices: ['R$329,90', 'R$1899,90', 'R$2459,90', 'R$124,90'],
		ratings: {
			prod1: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'far fa-star',
			],
			prod2: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'far fa-star',
			],
			prod3: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'far fa-star',
			],
			prod4: [
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'fas fa-star',
				'far fa-star',
			],
		},
	};

	const productRating = (index) => {
		const values = Object.values(productsData.ratings);
		let aux = '';
		for (const rating of values[index]) {
			aux = aux + `<i class="${rating}"></i>`;
		}
		return aux;
	};

	productsData.names.map((prod, index) => {
		const productsContainer = document.querySelector(
			'.products-grid-container__best-sellers'
		);
		productsContainer.innerHTML += `
		<div class="products-grid-card">
			<span class="label hot">Hot</span>
			<img src=${productsData.images[index]} alt="product-${index + 5}">
			<p class="category">Categoria</p>
			<h3 class="product-name">${prod}</h3>
			<p class="product-price">${productsData.prices[index]}</p>
			<div class="rating-box">
				${productRating(index)}
			</div>
			<button class="btn">Comprar</button>
		</div>
	`;
	});
};

const timer = () => {
	timerData = {
		days: [02, 'dias'],
		hours: [13, 'horas'],
		minutes: [30, 'minutos'],
		seconds: [33, 'segundos'],
	};

	const timerContainer = document.querySelector(
		'.deal-container__content--timer'
	);
	arrTimerData = Object.values(timerData);
	arrTimerData.map((data) => {
		timerContainer.innerHTML += `
			<div class="deal-container__timer">
				<span class="deal-container__timer--time">${data[0]}</span>
				<span class="deal-container__timer--word">${data[1]}</span>
			</div>
		`;
	});
};

banners();
products();
timer();
productsBestSellers();
