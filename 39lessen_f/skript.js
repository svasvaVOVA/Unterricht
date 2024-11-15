'use strict';
const btn = document.querySelector('.btn');
let timerId;

function maiAnime() {
	const elem = document.querySelector('.box');
	let pos = 0;
	const stArT = setInterval(frame, 10);
	function frame() {
		if (pos === 300) { 
			clearInterval(stArT);
		} else {
			
			pos++;
				elem.style.top = pos + 'px';
			elem.style.left = pos  +'px';
			
	}
	}
	
}

btn.addEventListener('click', maiAnime);



// let i = 0;

// btn.addEventListener('click', () => {
// 	timerId = setInterval(loger, 500);
// });

// function loger() {
// 	if (i === 3) {
// 		clearInterval(timerId);
// 	}
// 	console.log('OKKKE');
// 	i++;
// }

// let id = setInterval((log) => {
// 	console.log('HAIIIII');
// 	id = setInterval(log, 500);
// }, 500);