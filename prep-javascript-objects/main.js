var person = {
  firstName: 'Natalie',
  lastName: 'Tran',
  hobby: 'Tennis'
};
console.log(person);

var fullName = "The person's name is: " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Nurse';
console.log("The person's current job is: " + person.job);

person.previousJob = 'HR';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);

var myCar = {
  make: 'Toyota',
  model: 'Camry',
  year: 2018
};
console.log(myCar);

myCar['owner'] = 'Natalie Tran';
console.log('My name is ' + myCar.owner + ' and I drive a ' + myCar.year + ' ' + myCar.make + ' ' + myCar.model);

myCar['color'] = 'White';
console.log(myCar);
