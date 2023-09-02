// import { eventFn2 } from "./event";

const delay = 200;

function promise(){
    console.log('promise handler')
}

function eventFn(){
    console.log('test me promise')
    // eventFn2();
}

function add(){

}

// debugger;
console.log('it promise')

export { promise, eventFn, delay};
