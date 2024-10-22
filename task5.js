let numbers = [15, 20, 33, 40, 55, 60, 75, 80, 9, 10];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; // Condition to filter even numbers
});
console.log(evenNumbers);
