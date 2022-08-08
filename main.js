let X = 1;
const parentFunction = () => {
    let myValue = 2;
    console.log(X);
    console.log(myValue);
    const childFunction = () => {
        console.log(X += 5);
        console.log(myValue += 1);
    }
    return childFunction;
}
const result = parentFunction();
console.log(result);
result();
result();
result();
console.log(X);
console.log(myValue)




// // //" a clousre is afunction having access to the the perant scope,
// //  even after the parent function  has closed"

let Y =1;
const parentFunction1 =() =>{
    let myValue  =2;
    console.log(Y);
    console.log(myValue);

    const childFunction =() =>{
        console.log(Y += 5);
        console.log(myValue += 1);

    }
   return childFunction;

}
 const result1= parentFunction1();
console.log(result);
result();
result();
result();
console.log(Y);
console.log(myValue);//refferance error private variable



// IIFE ( Immediately invoked Expression )
const privateCounter =(() =>{
    let count = 0;
    console.log('initial value: ${count}');
    return () => { count +=1; console.log(count)  }
     })();
 
     const credits = ((num)=>{
    let credits = num;
    console.log('initial credits values: ${credits}');
    return () =>{
        credits -= 1;
        if (credits > 0) console.log('playing game, ${credits} credits(s) remaining');
        if (ccredits <=0) console.log('not enough credits');

    }
    })(3);
    credits();
    credits();
    credits();


//JS PROTOTYPES


const person1 = {
    alive: true
}
const musician = {
    plays: true
}
musician._proto_ = person1;
console.log(musician.plays);
console.log(musician.alive);



const person2 = {
    alive: true
}
const musician1 = {
    plays: true
}
Object.setPrototypeOf(musician, person2);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto);
console.log(Object.getPrototypeOf(musician) === musician._proto_);




const person3 = {
    alive: true
}
const musician2 = {
    plays: true
}
Object.setPrototypeOf(musician, person3);
console.log(musician.alive);
const guitarist = {
    String: 6,
    _proto_: musician
}
console.log(guitarist.alive)
console.log(guitarist.plays)
console.log(guitarist.String)



const car = {
    doors: 2,
    seats: "viny1",
    get seatMaterial(){
        return this.seats;
    },
    set seatMaterial(material){
        this.seats = material;
    }
}
const luxuryCars = {};
Object.setPrototypeOf(luxuryCars, car);
luxuryCars.seatMaterial = "leather";
console.log(luxuryCars);
console.log(luxuryCars.doors);
console.log(car);
console.log(luxuryCars.valueOf());




function Animal(species){
    this.species = species;
    this.eats = true;
}
Animal.prototype.walks = function (){
    return 'A ${this.species} is walking.';
};
const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());
console.log(Bear._proto_);
console.log(Bear);



class Vehicle {
    constructor() {
        this.wheels =4,
        this.motorized = true
    }
    ready() {
        return "Ready to go!";
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2
    }
    wheelie() {
        return "On one wheel now!";
    }
}
const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());
const myTruck = new Vehicle();
console.log(myTruck);




//Recursion


const countToTen = (num = 1) => {
    while(num <= 10) {
        console.log(num);
        num++;
    }
}
//countToTen();
const recurToTen = (num = 1) => {
    if(num <= 10) {
        console.log(num);
        num++;
        recurToTen(num);
    }
}
recurToTen();



//fibonacci sequence

//without recursion


const fibonacci = (num, array = [0, 1]) => {
    while(num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}
console.log(fibonacci(12));
//with Recursion:
const fib = (num, array = [0,1]) =>{
    if(num <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num -1, [...array, nextToLast + last]);
}
console.log(fib(12));


const getAWSProductIdImages = async () => {
    if(data.IsTruncated) {
        return await getAWSProductIdImages(
            productId,
            s3,
            resultArray,
            data.NextContinuationToken
        );
    }
    return resultArray;
}





//Decorators


let sum1 = (...args) => {
    return [...args].reduce((acc, num)=> acc + num);
}
const callCounter = (fn) => {
    let count = 0;
    return(...args) => {
        console.log('sum has been called ${count += 1} times');
        return fn(...args);
    }
}
sum = callCounter(sum1);
console.log(sum1(2, 3, 5));
console.log(sum1(1, 5));
console.log(sum1(14, 5));




let rectangleArea = (length, width) => {
    return length * width;
}
const countParams = (fn) => {
    return(...params) => {
        if(params.length !== fn.length){
            throw new Error('Incorrect number of parameters for ${fn.name}');
        }
        return fn(...params);
    }
}
const requireIntegers = (fn) => {
    return(...params) => {
        params.forEach(param =>{
            if(!Number.isInteger(param)){
                throw new TypeError('params for ${fn.name} must be integers');
            }
        });
        return fn(...params);
    }
}
rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));







//functions

//currying


const buildSandwich = (ingredient1) => {
    return(ingredient2) => {
        return(ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}
const mySandwich = buildSandwich("Bacon")("Lettuce")("tomato")
console.log(mySandwich);
const buildSammy = ingred1 => ingred2 => ingred3 =>{
    `${ingred1}, ${ingred2}, ${ingred3}`;
}
const mySammy = buildSammy("turkey")("cheese")("bread");




const multiply = (x,y) => x * y;
const curriedMultiply = x => y => x * y;
console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));
const timeTen = curriedMultiply(10);
console.log(timeTen);
console.log(timeTen(8));
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElemText('header');
updateHeaderText('Hello Abhin');





const addCustomer = fn => (...args) => {
    console.log('saving customer info..')
    return fn(...args);
}
const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`)
    return fn(...args);
}
let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`)
}
completeOrder = (processOrder(completeOrder));
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder));
completeOrder("1000")


//pure functions


let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray)
console.log(xArray)


//mutable vs immutable


let myName = "Abhin";
myName[0] = "w";
console.log(myName);
myName = "Abhin";
console.log(myName);
yArray[0] = 9;
console.log(yArray);
console.log(xArray)



const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
}
const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));






const scoreObj = {
    "first": 44,
    "second": 12,
    "third": {"a": 1, "b": 2}
}
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);





const add = (x, y) => x + y;
console.log(add(2, 3));
const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("sebastian", "joseph"));




const z = 5;
const sum = (a, y) => a + y + z;
console.log(sum(2, 2));
let a = 1;
const increment1 = ()=> a+= 1;
console.log(increment1());
console.log(a);



const myArray = [1, 2, 3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray, 4));
console.log(myArray)




//IIFE



const Z = "whatever";
const helloWorld = () => "Hello World";
(() => {
    const Z = "life whatever";
    const helloWorld = () => "Hello IIFE";
    console.log(Z);
    console.log(helloWorld());
})();
console.log(Z);
console.log(helloWorld());





const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credit(s).`);
    return () => {counter++; credits(counter); }
})();
increment();
increment();



const Score = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
})();
Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());






//Hoisting



const initApp = () => {
    console.log(stepOne);
    stepOne();
}
document.addEventListener("DOMContentLoaded", initApp);
const stepOne = () => {
    console.log('step One');
}



//Debounce


//composition


class pizza {
    constructor(size, Crust, sauce){
        this.size = size;
        this.Crust = Crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() { console.log('Preparing..')}
    bake() { console.log('Baking..')}
    ready() { console.log('Ready!')}
}
class Salad {
    constructor(size, dressing) {
        this.size = size;
        this.dressing = dressing
    }
    prepare() {console.log('Preparing..')}
    toss() { console.log('Tossing..')}
    // ready() { console.log('Ready!')}
}
class stuffedCrustPizza extends pizza{
    stuff() { console.log('Stuffing the Crust...')}
}
class butteredCrustPizza extends pizza {
    butter() { console.log('Buttering the Crust...')}
}
class stuffedButteredCrustPizza extends pizza{
    stuff() { console.log('stuffing the Crust...')}
    butter() { console.log('Buttering the Crust')}
}
const myPizza = new stuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();

