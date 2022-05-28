// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./files/functions.js";
// Подключение списка активных модулей
import { flsModules } from "./files/modules.js";

import Starry from "starry-rating";

// $(function () {

//    $("#rater").rateYo({
//      starWidth: "20px"
//    });

//  });
// =====Star Rating===========
const cardStars = document.querySelectorAll(".card__rating");
cardStars.forEach((card) => {
	new Starry(card, {
		startValue: 4,
		starSize: 14,
		stars: 5,
	});
});

// ======TIME============
if(document.querySelector('.days')) {
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
		const clock = document.getElementById(id);
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
	
	const deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
	initializeClock("clockdiv", deadline);
	
}
