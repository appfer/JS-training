const country = "england";
const continent = "Europe";
const population = "50";
const isIsland = "false";
const language = "english";


if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(
    `${country}'s population is ${population > 33 ? 'below' :
        'above'} average`,
);

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and 
 its capital city is ${capitalCity}`;
}
const descPortugal = describeCountry('portugal', 50, 'amsterdam');
const descGermany = describeCountry('Germany', 83,
    'Berlin');
const descFinland = describeCountry('Finland', 6,
    'Helsinki');
console.log(descPortugal, descGermany, descFinland);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const persentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
const percNetherlands1 = percentageOfWorld1(83);
console.log(percPortugal1, percChina1, percUSA1, percNetherlands1);

const percentageOfWorld3 = population => (population / 7900)
    * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
const percNetherlands3 = percentageOfWorld3(83);
console.log(percPortugal3, percChina3, percUSA3, percNetherlands3);

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million 
 people, which is about ${percentage}% of the world.`;
    console.log(description);
};
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
describePopulation('Netherlands', 83);

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4)
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);

const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia']
};

console.log(
    `${myCountry.country} has ${myCountry.population} million 
 ${myCountry.language}-speaking people, 
 ${myCountry.neighbours.length} neighbouring countries and 
 a capital called ${myCountry.capital}.`
);
myCountry.population -= 2;
console.log(myCountry.population);
myCountry.population += 2;
console.log(myCountry.population);
myCountry.population -= 2;
console.log(myCountry.population);

const myCountry2 = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million 
 ${this.language}-speaking people, 
 ${this.neighbours.length} neighbouring countries and a 
 capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
            false;
        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};
myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

for (let voter = 1; voter <= 50; voter++)
    console.log(`Voter number ${voter} is currently voting`);

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// data 1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

//data 2
const massMark1 = 95;
const heightMark1 = 1.88;

const massJohn1 = 85;
const heightJohn1 = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const bmiMark1 = massMark1 / heightMark1 ** 2;
const bmiJohn1 = massJohn1 / heightJohn1 ** 2;

console.log(bmiMark, bmiJohn);

console.log(bmiMark1, bmiJohn1);


const markHigherBmi = bmiMark > bmiJohn;
const markHigherBmi1 = bmiMark1 > bmiJohn1;

console.log(markHigherBmi);
console.log(markHigherBmi1);

const firstName = 'Ferry';
const job = 'student';
const birthYear = 1997;
const year = 2021;

const ferry = "I'm" + firstName + ', a' + (year - birthYear) + 'years old' + { job } + '!';
Console.log(ferry);

const ferryNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ferryNew);

Console.log('String with\n\
multiple\n\
lines');

console.log(`String with
multiple
lines`);

const age = 19;

if (age >= 18) {
    console.log('Sarah can start driving licence')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const scoreDolphins = 96 + 108 + 89;
console.log(scoreDolphins / 3);
const gemScoreDolphins = 97.9

const scoreKoalas = 88 + 91 + 110;
console.log(scoreKoalas / 3);
const gemScoreKoalas = 96.3

if (gemScoreDolphins === gemScoreKoalas || gemScoreDolphins && gemScoreKoalas >= 100) {
    console.log("it`s a tie!");
} else if (gemScoreDolphins > gemScoreKoalas && gemScoreDolphins > 100) {
    console.log("The dolphins won this one!");
} else if (gemScoreDolphins < gemScoreKoalas && gemScoreKoalas > 100) {
    console.log("The Koalas won this one!");
} else if (gemScoreDolphins && gemScoreKoalas < 100) {
    console.log("The minimum score is not reached, there is no winner=");
}

const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend!');
        break;
    default: // waneer er een fout of verkeerd gespeld antwoord op de vraag wordt gegeven, wordt default ingeschakeld.
        console.log('not a valid day!');
}
var day = ('wednesday');
if (day === 'monday') {
    console.log('plan course structure')
    console.log('go to coding meetup');
}
else if (day === 'tuesday') {
    console.log('prepare theory videos');
}
else if (day === 'wednesday' || 'thursday') {
    console.log('write code examples');
}
else if (day === 'friday') {
    console.log('record videos');
}
else if (day === 'saturday' || 'sunday') {
    console.log('enjoy the weekend!');
}
else { console.log('not a valid day!'); }


const age = 23;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


const bill = 50;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.15;
const total = bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.20;
console.log(`the bill was €${bill},and the tip was €${tip}, and the total amount was €${total}`);
