let object = {
    'name' : 'Fábio',
    'idade' : 32,
    height : 1.73,
};

console.log(object);

for (let index = 0; index < 3; index++) console.log('---/---');

let string = JSON.stringify(object);

console.log(string);

for (let index = 0; index < 3; index++) console.log('---/---');

object = JSON.parse(string);

console.log(object);

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(object['name']);

for (let index = 0; index < 3; index++) console.log('---/---');

let array = [
    'bread',
    'ham',
    'cheese',
];

console.log(array);

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(JSON.stringify(array));

for (let i = 0; i < array['length']; i++) console.log((i + 1).toString().padStart(2, '0') + ' : ' + array[i]);