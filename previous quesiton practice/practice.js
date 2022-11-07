let journal = [
    {events: ['work', 'touched tree', 'pizza', 'running', 'television'],
    squirrel: false},
    {events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], 
squirrel: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
squirrel: true},
// and so on....
]

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2)// true
console.log(object1 == object3); // false

object1.value = 225;
console.log(object2.value)
