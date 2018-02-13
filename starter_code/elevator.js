class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.requests   = [];
    this.direction ="up";
    this.startInterval = 0;
    this.waitingList = [];
    this.passenger = [];
  }

  start() {
    this.startInterval =
    setInterval(()=> this.update(),1000)
   }
  stop() { 
    clearInterval(this.startIntervalstart)
  }
  update() {
    this.log();
    if (this.direction == "up"){
      this.floorUp;
    }
    if (this.direction == "down"){
      this.floorDown;
    }
   }

  _passengersEnter(individuo) { 
    if (this.floor == individuo.originFloor)
    this.passenger.push(individuo.name)
    this.passenger.push(individuo.destinationFloor)
  }

  _passengersLeave() {
    
   }

  floorUp() {
    if (this.floor < this.MAXFLOOR){this.floor ++};
   }
  floorDown() { 
    if (this.floor > this.MINFLOOR){this.floor --};
  }
  call(individuo) { 
    this.requests.push(individuo);
    console.log(this.requests)
    this.waitingList.push(individuo.name);
    console.log(this.waitingList)
  }
  log() {
console.log(`Direction : ${this.direction} Floor : ${this.floor}`)
 }
}

module.exports = Elevator;

