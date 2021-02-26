function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(4, 4);
console.log(addTwoNumbersResult);

function convertHoursToMinutes(number) {
  return number * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(convertHoursToMinutesResult);

function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}
var personalizeGreetingResult = personalizeGreeting('World');
console.log(personalizeGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log(getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log(getFullNameResult);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeResult = cube(5);
console.log(cubeResult);
