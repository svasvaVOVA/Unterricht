'use strict';
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`Hello ${this.name} `);
		
	}
}


User.prototype.exit = function () {
	console.log(`OKKKKK ${this.name} nicht, blibe`);
	
};
const ivan = new User('ivan', 28);
const alex = new User('alex', 44);


ivan.exit();
ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);


// =============================================================================

// Контекст вызова. В строгом режиме use strict this=undefined, но если   то this = window
function shoWt(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b;
		
	}
	console.log(sum());
}
shoWt(4, 5);
	


// ============
// контекст у методов обьекта сам оьект
const obj = {
	a: 20,
	b: 12,
	sum: function () {
		console.log(this);
		
	}
};
obj.sum();
// =============
function user(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name} ${this.id}`);
  };
}
let ila = new user('Ivan', 23222);

ila.hello();   //this в конструкторах и классах - это новый экземпляр обьекта
// ==================================
// РУЧНОЕ ПРИСВОЕНИЕ контекста
function saW(surf) {
	console.log(this);
	console.log(this.name+surf);
	
	
}
const uT = {
	name: 'John'
};
// РУЧНОЕ ПРИСВОЕНИЕ контекста
saW.call(uT, ' ' + 'Smitttt');
// РУЧНОЕ ПРИСВОЕНИЕ контекста
saW.apply(uT, ['SINA'])

// РУЧНОЕ ПРИСВОЕНИЕ контекста
// ============================Еще третий ручной метод новая функция с превязаным контекстом. двйка переходит в this a ddT   nam
function count(num) {
	return this * num;
}
const ddT = count.bind(2);

console.log(ddT(51));


//this в конструкторах и классах - это новый экземпляр обьекта

// Контекст вызова. В строгом режиме use strict this=undefined, но если   то this = window
// контекст у методов обьекта сам оьект
// РУЧНОЕ ПРИСВОЕНИЕ контекста this: call, appl, bind.,


//PRIMER
const btnt = document.querySelector('.button-on');

btnt.addEventListener('click', function () {
	console.log(this);
	
	this.style.color = 'green';
	// тоже самое только с евент.таргет
	// event.target.style.color = 'green';
	
});

const obJt = {
	num: 15,
	saU: function () {
		const sAuf = () => {
			console.log(this.num);
			
		};
		sAuf();
	}

};

obJt.saU();