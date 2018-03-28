//Parent class
class Dog {
	constructor(name) {
		this.name= name;
	}
	speak() {
		return "woof";
	}
}

//child class
class Labrador extends Dog {
	constructor(name,color,breedWeight) {
		super(name);
		this.color= color;
		this.breedWeight= breedWeight;
	}
	speak() {
		return this.name + " says Woof";
	}
}
//Creating object
var l1 = new Labrador("Labrador","brown", 50);
console.log(l1.speak());