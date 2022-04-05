
import {choice, remove} from './helpers' 
import fruit from './food.js'


const randFruit = choice(fruit)

console.log(`I'd like one ${randFruit}, please`)

console.log(`Here you go: ${randFruit}`)

console.log(`Delicious may I have another?`)

const fruitsLeft = remove(fruit, randFruit)

console.log(`I'm sorry were all out. We have ${fruitsLeft}`)

