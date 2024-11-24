'use strict';
const logsS = function (a, b, ...rest) {
	console.log(a, b, rest);
	
}
logsS('basic', 'rest', 'ojjj', 'usage');

function calcO(numb, basis = 2) {
	console.log(numb*basis);
	
}

// calcO(3, 7);
calcO(3);