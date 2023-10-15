let day  = 'sunday';

if (day === 'sunday') {
    console.log('sunday');
} else if (day === 'monday') {
    console.log('monday');
} else if (day === 'tuesday') {
    console.log('tuesday');
} else if (day === 'wednesday') {
    console.log('wednesday');
} else if (day === 'thursday') {
    console.log('thursday');
} else if (day === 'friday') {
    console.log('friday');
} else if (day === 'saturday') {
    console.log('saturday');
} else {
    console.log('...');
};

for (let index = 0; index < 3; index++) console.log('---/---');

switch (day) {
    case 'sunday':
        console.log('sunday');
    break;
    case 'monday':
        console.log('monday');
    break;
    case 'tuesday':
        console.log('tuesday');
    break;
    case 'wednesday':
        console.log('wednesday');
    break;
    case 'thursday':
        console.log('thursday');
    break;
    case 'friday':
        console.log('friday');
    break;
    case 'saturday':
        console.log('saturday');
    break;
    default:
        console.log('...');
    break;
};

for (let index = 0; index < 3; index++) console.log('---/---');

let random = parseInt(Math.random() * (10 - 1) + 1);

let number = random <= 9 ? '0' + random : random;

console.log(number);

for (let index = 0; index < 3; index++) console.log('---/---');

console.log(random.toString().padStart(2, '0'));