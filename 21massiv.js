

const arr = [2, 2, 3, 6, 8];

for (let i = 0; i < arr.length; i++){
	console.log(arr);
	
}

// цикл for in

for (let val of arr) {
	console.log(val);

	
}

arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} и массив ${arr}`);
	
});
const str = prompt("", "");
const product = str.split(",");
console.log(product);
product.sort();
product.sort(com);
console.log(product);
function com(a, b) {
	return a - b;
}
console.log(product);


