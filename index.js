// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
    drivers.unshift(name)
}

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveFirstDriver(name) { 
 drivers.shift(name)
}

function appendDriver(name){
let x;

   x = drivers.concat(name)
   return x

}

function prependDriver(name){
   return [name, ...drivers]
}

function appendDriver(name) {
  return [...drivers, name]
}

function removeFirstDriver() {
    return drivers.slice(1)
}


function removeLastDriver() {
return drivers.slice(0,drivers.length - 1)
}