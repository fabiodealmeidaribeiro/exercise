console.time();

for (let index = 0; index < 3; index++) console.log('---/---');

for (let index = 0; index < 3; index++) console.count();

for (let index = 0; index < 3; index++) console.log('---/---');

console.timeEnd();

for (let index = 0; index < 3; index++) console.log('---/---');

console.warn('That\'s a warning');

for (let index = 0; index < 3; index++) console.log('---/---');

let objectarray = [
    {
        age : 38,
        name : 'Fábio',
    },
    {
        age : 35,
        name : 'Mária',
    },
    {
        age : 40,
        name : 'Roberto',
    },
];

for (let i = 0; i < objectarray['length']; i++) console.log(new Array(objectarray['length']).fill(objectarray[i]['name']));

for (let index = 0; index < 3; index++) console.log('---/---');

let fruit = [
    'laranja',
    'banana',
];

let vegetable = [
    'alface',
    'espinafre',
];

let food = [
    ...fruit,
    ...vegetable,
];

console.log(food);

for (let index = 0; index < 3; index++) console.log('---/---');

let unify = Array.from(new Set(food));

unify = [
    ...new Set(food),
];

console.log(unify);

for (let index = 0; index < 3; index++) console.log('---/---');

let number = [];

for (let index = 0; index < 10; index++) number.push(index);

let sum = number.reduce((x, y) => x + y );

console.log(sum);

for (let index = 0; index < 3; index++) console.log('---/---');

let first = 'Fábio', last = 'Ribeiro';

console.log(first);

for (let index = 0; index < 3; index++) console.log('---/---');

first = last = 'Ribeiro';

console.log(last);

for (let index = 0; index < 3; index++) console.log('---/---');

let array = [
    'javascript',
    'python',
    'php',
];

for (let i = 0; i < array['length']; i++) console.log(array[i]);

for (let index = 0; index < 3; index++) console.log('---/---');

for (let i of array) console.log(i);

for (let index = 0; index < 3; index++) console.log('---/---');

let onlyNumber = (output = '') => output ? output.replace(/\D/g, '') : output;

console.log(onlyNumber('224.680.508-27asd'));

for (let index = 0; index < 3; index++) console.log('---/---');

array = [
    {
        id : 1,
        name : 'a',
    },
    {
        id : 2,
        name : 'b',
    },
];

console.log(array.find(index => index['name'] === 'a'));

for (let index = 0; index < 3; index++) console.log('---/---');

const name = 'Fábio de Almeida Ribeiro';

const message = `Hi ${ name }! Thank you for being here!`;

console.log(message);

for (let index = 0; index < 3; index++) console.log('---/---');

const object = {
    color : 'red',
    mark : 'dazz',
};

object['speed'] = 5000;

object['dpi'] = () => {
    console.log('dpi');
};

console.log(object);

for (let index = 0; index < 3; index++) console.log('---/---');

delete object['dpi'];

console.log(object);

for (let index = 0; index < 3; index++) console.log('---/---');

let buildListPrimeNumber = (output = 2) => {
    for (let i = 2; i <= output; i++)
        return output % i === 0 ? false : true;
};

let showListPrimeNumber = (output = 2) => {
    for (let i = 2; i < output; i++) buildListPrimeNumber(i) ? console.log(i) : undefined;
};

showListPrimeNumber(15);

for (let index = 0; index < 3; index++) console.log('---/---');

let starBuilder = (output = 3) => {
    for (let i = 0; i <= output; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) pattern += '*';
        console.log(pattern);
    };
};

starBuilder(10);

for (let index = 0; index < 3; index++) console.log('---/---');

let median = (output = []) => {
    let sum = 0;
    for (let i of output)
        sum += i;
    return sum / output['length'];
};

console.log(median([ 50, 40, 30, 20, 10 ]));

for (let index = 0; index < 3; index++) console.log('---/---');

let verifyNumber = (output = 10) => {
    for (let i = 1; i <= output; i++)
        i % 2 === 0
        ? console.log(i.toString().padStart(2, '0') + ' : par')
        : console.log(i.toString().padStart(2, '0') + ' : impar');
};

console.log(verifyNumber(10));

for (let index = 0; index < 3; index++) console.log('---/---');

let verifySpeed = (output) => {
    const kmp = 5, maximum = 70, point = Math.floor((output - maximum) / kmp);
    return output <= maximum ? 'Approved!' : (point <= 12 ? point + ' points!' : 'Suspended!');
};

console.log(verifySpeed(200));

for (let index = 0; index < 3; index++) console.log('---/---');

let maximum = (numberI, numberII) => numberI > numberII ? numberI : numberII;

console.log(maximum(10, 20));

for (let index = 0; index < 3; index++) console.log('---/---');

let random = (minimum, maximum) => Math.random() * (maximum - minimum) + minimum;

console.log(random(10, 20));

for (let index = 0; index < 3; index++) console.log('---/---');

let randomInt = (minimum, maximum) => Math.floor(Math.random() * (Math.floor(maximum) - Math.ceil(minimum)) + Math.ceil(minimum));

console.log(randomInt(10, 20));

for (let index = 0; index < 3; index++) console.log('---/---');

const date = new Date(1982, 3 - 1, 20);

date.setFullYear(2030);

date.toDateString();

console.log(date);

let displayAddress = output => {
    for (let key in output) console.log(key + ' : ' + output[key]);
};

displayAddress({
    street : 'Rua Flor de Couro, 18', city : 'São Paulo', code : '051009-200',
});

for (let index = 0; index < 3; index++) console.log('---/---');

function Builder (title, message, author) {
    this.title = title;
    this.message = message;
    this.author = author;
    this.views = 0;
    this.comments = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ];
    this.live = false;
};

let variable = new Builder('a', 'b', 'c');

console.log(variable);

for (let index = 0; index < 3; index++) console.log('---/---');

number = [];

for (let i = 1; i < 10; i++) number.push(i);

console.log(number);

for (let index = 0; index < 3; index++) console.log('---/---');

number.unshift(0);

console.log(number);

for (let index = 0; index < 3; index++) console.log('---/---');

number.splice(2, 0, 'Look at me here!');

console.log(number);

for (let index = 0; index < 3; index++) console.log('---/---');

number.push(10);

console.log(number);

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(number.indexOf(2));

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(number.lastIndexOf(2) !== - 1);

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(number.includes(2));

for (let index = 0; index < 3; index++) console.log('---/---');

console.log([ { id : 1, name : 'Fábio' }, { id : 2, name : 'Ismael' } ].find(element => element['name'] === 'Fábio'));

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(number.pop());

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(number.shift());

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(number.splice(2, 1));

for (let index = 0; index < 3; index++) console.log('---/---');

number = [];

for (let i = 0; i <= 10; i++) number.push(i);

number.forEach(output => console.log(output));

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(Number(number.join('')) * 2);

for (let index = 0; index < 3; index++) console.log('---/---');

variable = 'Fábio de Almeida Ribeiro';

console.log(variable.split(' '));

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(variable.split(' ').join('-'));

for (let index = 0; index < 3; index++) console.log('---/---');