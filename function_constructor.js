'use strict';
function user(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
console.log(`Hello ${this.name} `);
	}
}


user.prototype.exit = function () {
	console.log(`OKKKKK ${this.name} nicht, blibe`);
	
};
const ivan = new user('ivan', 28);
const alex = new user('alex', 44);


ivan.exit();
ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

