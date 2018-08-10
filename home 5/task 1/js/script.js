// function SpaceShip (name,length,width) {
// 	this.name = name;
// 	this.length = length;
// 	this.width = width;
// }
// function Cutter(name,length,width,shuttle){
// 	this.name = name;
// 	this.length = length;
// 	this.width = width;
// 	this.shuttle = shuttle;
// }

// var obj1 = new Cutter('apolon','10', '5', '3');
// console.log(obj1);

class SpaceShip {
	constructor (name,length,width){
		this.name = name;
		this.length = length;
		this.width = width;
	}
    nameShip(){
        console.log(this.name);
        return this;
    }
    lengthShip(){
       console.log(this.length);
       return this;
    }
    widthShip(){
       console.log(this.width);
       return this;
    }
}

class Cutter extends SpaceShip {
    constructor (name,length,width,shuttle,oil,people){
        super(name,length,width,shuttle,oil,people)
        this.shuttle = shuttle;
        this.oil = oil;
        this.people = people; 
        
    }
    shuttleShip(){
        console.log(this.shuttle);
        return this;
    }
    oilShip () {
        console.log(this.oil);
        return this;
    }
    peopleInShip (){
        console.log(this.people);
        return this;
    }
}
class Corvette extends SpaceShip {
    constructor (name,length,width,computer,windows,wings){
        super(name,length,width,computer,windows,wings)
        this.computer = computer;
        this.windows = windows;
        this.wings = wings; 
        
    }
    computerShip(){
        console.log(this.computer);
        return this;
    }
    windowsShip () {
        console.log(this.windows);
        return this;
    }
    wingsShip (){
        console.log(this.wings);
        return this;
    }
}
class Frigate extends SpaceShip {
    constructor (name,length,width,flag,weapon,supports){
        super(name,length,width,flag,weapon,supports)
        this.flag = flag;
        this.weapon = weapon;
        this.supports = supports; 
        
    }
    flagShip(){
        console.log(this.flag);
        return this;
    }
    weaponShip () {
        console.log(this.weapon);
        return this;
    }
    supportsInShip (){
        console.log(this.supports);
        return this;
    }
}
let ship1 = new SpaceShip('apolon','10','5');
let ship2 = new Cutter('apolon','10','5','15','1000','5 man');
let ship3 = new Corvette('apolon','10','5','lenovo','18','2');
let ship4 = new Frigate('apolon','10','5','black','arrow','150');
console.log(ship1)
console.log(ship2)
console.log(ship3)
console.log(ship4)
ship1.nameShip().lengthShip();
ship2.nameShip().oilShip();
ship3.nameShip().windowsShip();
ship4.nameShip().weaponShip();