moment.locale('be');

let d = moment();
// console.log(d.format('LL'));

// console.log(d.month());
// console.log(d.date());
// d.month(10).date(25);
// console.log(d.month());
// console.log(d.date());
const d2 = moment('2005-09-01');
d.add(3, 'weeks').subtract({weeks: 3, minutes: 5});

const result = d2.diff(d);
const human = moment.duration(result).as('hours');
console.log(human);


// console.log(d.fromNow());


