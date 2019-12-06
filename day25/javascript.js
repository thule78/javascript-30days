const people = [
{name: 'Wes', cool: true, country: "Canada"},
{name: 'Thu',cool: false, country: "vietnam"},
{name: 'Scott', cool: true, country: 'Merica'},
{name: 'Snickers', cool: true, country: 'Dog country'}
];

people.forEach((person, index)=> {
  console.group(`${person.name}`);
  console.log(person.name);
  console.log(person.cool);
  console.log('Done');
  console.groupEnd(`${person.name}`);
})

console.table(people);
