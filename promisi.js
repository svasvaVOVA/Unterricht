'use strict';

// console.log('oooooooooLLLLLLLLLL');


// // const req = new Promise(function (resolve, reject) {
// // 	setTimeout(() => {
// // 	console.log('PPPPPPPPPPP2222222');
// // 	const product = {
// // 		names: 'TV',
// // 		price: 2000
// // 	};
// // 	setTimeout(() => {
// // 		product.status = 'order';
// // 		console.log(product);
		
// // 	}, 2000);
	
// // }, 2000);
// // })

// const req = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		console.log('PPPPPPPPPPP2222222');
// 		const product = {
// 			names: 'TV',
// 			price: 2000
// 		};

// 		resolve(product);

// 	}, 2000);
// });
	

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			resolve(product);
// 				// reject();
// 		}, 2000);
// 	});
// }).then((data) => {
// 	data.modify = true;
// 	return data;
	  
// }).then((data) => {
// 	  	console.log(data);
// }).catch (() => {
// 	console.error(OCHIBKA);
	
// }).finally(() => {
// 	console.log('NORM FiNALLY');
	
// })


const test = times => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), times);
	});
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('ALL');
	
// });
Promise.race([test(1000), test(2000)]).then(() => {
	console.log('RESE');
	
});
