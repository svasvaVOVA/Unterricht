'use strict';
class Rect{
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	valCar() {
		return this.height * this.width;
	}
}




class Colort extends Rect{
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}
	sowP() {
		console.log(`Text: ${this.text}, Plus: ${this.bgColor}`);
		
	}
}
const div = new Colort(25, 10, 'Hello', 'red');
div.sowP();
console.log(div.valCar());





const staR = new Rect(15, 3);
console.log(staR.valCar());