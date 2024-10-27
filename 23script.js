'use strict'


const solder = {
  lebe: 400,
  gesundheit: 200,
  start: function () {},
};
const solderOne = {
	lebe: 100,

};

solderOne.__proto__ = solder; //устаревшее уже не используют но может встречаться


Object.setPrototypeOf(solderOne, solder); //это тот же метод что и выше только современный.
console.log(solderOne.gesundheit);

// =========================

const star = {
	df: 99,
	ke: 22,
	fuNk: function() {
		console.log('ok');
	}
};
const startwo = Object.create(star);
console.log(startwo);
startwo.fuNk();




