// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./files/functions.js";
// Подключение списка активных модулей
import { flsModules } from "./files/modules.js";

import Starry from "starry-rating";

// =====Star Rating===========

const cardStars = document.querySelectorAll(".card__rating");
cardStars.forEach((card) => {
	new Starry(card, {
		startValue: 4,
		starSize: 14,
		stars: 5,
		beginWith: 80,
	});
});

// ======TIME============
if (document.querySelector(".days")) {
	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

		return {
			total,
			days,
			hours,
			minutes,
			seconds,
		};
	}

	function initializeClock(id, endtime) {
		const clock = document.querySelector(".deal__list");
		const daysSpan = clock.querySelector(".days");
		const hoursSpan = clock.querySelector(".hours");
		const minutesSpan = clock.querySelector(".minutes");
		const secondsSpan = clock.querySelector(".seconds");

		function updateClock() {
			const t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
			minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
			secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	}

	// const deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
	const deadline = document.querySelector(".deal__list").getAttribute("data-time");
	initializeClock("clockdiv", deadline);
}

document.addEventListener("click", function (e) {
	let t = e.target;
	let b1 = document.querySelector("#sort_b1");
	let b2 = document.querySelector("#sort_b2");
	let shop = document.querySelector("#shop");
	let c = "sort__btn_active";
	if (t.closest("#sort_b1")) {
		b1.classList.add(c);
		if (b2.classList.contains(c)) {
			b2.classList.remove(c);
		}
		if (shop.classList.contains("shop_list")) {
			shop.classList.remove("shop_list");
		}
	} else if (t.closest("#sort_b2")) {
		b2.classList.add(c);
		if (b1.classList.contains(c)) {
			b1.classList.remove(c);
			shop.classList.add("shop_list");
		}
	}
});
const links = document.querySelectorAll(".menu__link");
const wrapper = document.querySelector(".wrapper");
links.forEach((link) => {
	if (wrapper.classList.contains("wrapper_shop")) {
		link.classList.remove("menu__link_active");
		links[1].classList.add("menu__link_active");
	}
});
