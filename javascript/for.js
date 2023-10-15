for (let index = 0; index < 3; index++) console.log(index);

for (let index = 0; index < 3; index++) console.log('---/---');

for (let index = 3; index > 0; index--) console.log(index);

for (let index = 0; index < 3; index++) console.log('---/---');

let object = {
    name : 'Fábio',
    age : 38,
    profession : 'Cleaner',
};

for (index in object) console.log({ index : object[index] });

for (let index = 0; index < 3; index++) console.log('---/---');

for (index in object) console.log(object[index]);

for (let index = 0; index < 3; index++) console.log('---/---');

let array = [
    'apple',
    'orange',
    'grape',
];

for (index of array) console.log(index);