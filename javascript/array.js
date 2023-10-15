let indexes = [
    'red',
    'blue',
    'green'
];

console.log(indexes);

indexes.push(...[
    'violet', 
    'yellow'
]);

console.log(indexes);

let last = indexes.pop();

console.log(last);

console.log(indexes);

let first = indexes.shift();

console.log(first);

console.log(indexes);

for (let index = 0; index < 3; index++) console.log('---/---');

indexes = [
    'red',
    'green',
    'blue'
];

console.log(indexes);

let exclude = indexes.pop();

console.log(indexes);

let include = indexes.unshift(exclude);

console.log(indexes);

exclude = indexes.shift();

console.log(indexes);

indexes.push(exclude);

console.log(indexes);

console.log(indexes.indexOf('red'));

console.log(indexes.indexOf('green'));

console.log(indexes.indexOf('blue'));

console.log(indexes.indexOf('yellow'));

let array = indexes.join(', ');

console.log(array);

include = indexes.push('red');

console.log(indexes.lastIndexOf('red'));

console.log(indexes);

exclude = indexes.pop();

console.log(indexes);

for (let index = 0; index < 3; index++) console.log('---/---');

let number = [];

for (let index = 1; index <= 9; index++) number.push(index);

let double = number.map(value => value * 2);

console.log(double);

let filtered = number.filter(value => value <= 5 );

console.log(filtered);

let sum = number.reduce((cumulative, value) => cumulative + value);

console.log(sum);

number.forEach((value, index) => console.log({ value : value, index : index }));

for (let index = 0; index < 3; index++) console.log('---/---');

let object = {
    a : 1,
    b : 2,
    c : 3
};

array = [];

for (let index in object) array.push(object[index]);

console.log(array);

array = [];

for (let index in object) array.push(index);

console.log(array);