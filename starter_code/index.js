const Elevator = require('./elevator.js');
const Person = require('./person.js')

let myElevator = new Elevator();



let PassengerOne = new Person("Dim", 0, 7);
let PassengerTwo = new Person("Julie", 2, 5)

myElevator.call(PassengerOne)

myElevator.call(PassengerTwo)


myElevator.start()