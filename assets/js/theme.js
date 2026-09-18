(function () {
	'use strict';

	const toggle = document.querySelector('.mobile-menu-toggle');
	const menu = document.querySelector('#site-menu-panel');

	if (toggle && menu) {
		toggle.addEventListener('click', () => {
			const expanded = toggle.getAttribute('aria-expanded') === 'true';
			toggle.setAttribute('aria-expanded', String(!expanded));
			menu.classList.toggle('is-open', !expanded);
			menu.style.maxHeight = expanded ? '0px' : menu.scrollHeight + 'px';
			menu.style.opacity = expanded ? '0' : '1';
		});
	}

	const carousel = document.querySelector('[data-featured-carousel]');
	if (carousel) {
		const slides = Array.from(carousel.querySelectorAll('.featured-slide'));
		const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
		const prevButton = carousel.querySelector('[data-carousel-prev]');
		const nextButton = carousel.querySelector('[data-carousel-next]');
		let activeIndex = 0;
		const showSlide = (index) => {
			activeIndex = (index + slides.length) % slides.length;
			slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeIndex));
			dots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === activeIndex));
		};
		prevButton?.addEventListener('click', () => showSlide(activeIndex - 1));
		nextButton?.addEventListener('click', () => showSlide(activeIndex + 1));
		dots.forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.carouselDot))));
		window.setInterval(() => showSlide(activeIndex + 1), 5000);
	}

	const copyLink = document.querySelector('[data-copy-link]');
	if (copyLink) {
		copyLink.addEventListener('click', async () => {
			await navigator.clipboard.writeText(window.location.href);
			copyLink.textContent = '✓';
			window.setTimeout(() => { copyLink.textContent = '↗'; }, 1600);
		});
	}

	const article = document.querySelector('.single-content');
	const readButton = document.querySelector('[data-read-article]');
	const stopButton = document.querySelector('[data-stop-reading]');
	const status = document.querySelector('[data-reading-status]');
	let fontScale = 0;

	if (article && readButton && stopButton && 'speechSynthesis' in window) {
		readButton.addEventListener('click', () => {
			window.speechSynthesis.cancel();
			const utterance = new SpeechSynthesisUtterance(article.innerText);
			utterance.lang = 'pt-BR';
			utterance.rate = 0.95;
			utterance.onstart = () => { stopButton.disabled = false; status.textContent = 'Leitura em andamento'; };
			utterance.onend = () => { stopButton.disabled = true; status.textContent = 'Leitura concluída'; };
			window.speechSynthesis.speak(utterance);
		});
		stopButton.addEventListener('click', () => {
			window.speechSynthesis.cancel();
			stopButton.disabled = true;
			status.textContent = 'Leitura pausada';
		});
	} else if (readButton) {
		readButton.disabled = true;
		readButton.title = 'A leitura em voz alta não está disponível neste navegador';
	}

	document.querySelector('[data-font-increase]')?.addEventListener('click', () => {
		fontScale = Math.min(fontScale + 1, 2);
		document.documentElement.dataset.fontScale = String(fontScale);
	});
	document.querySelector('[data-font-decrease]')?.addEventListener('click', () => {
		fontScale = Math.max(fontScale - 1, -1);
		document.documentElement.dataset.fontScale = String(fontScale);
	});
	document.querySelector('[data-contrast-toggle]')?.addEventListener('click', (event) => {
		const button = event.currentTarget;
		const enabled = document.documentElement.classList.toggle('accessibility-contrast');
		button.setAttribute('aria-pressed', String(enabled));
	});
})();
