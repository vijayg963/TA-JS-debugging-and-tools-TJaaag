//  Get full name

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let expected = fullName("Arya", "Stark");

let result = "AryaStark";

if (expected !== result) {
  throw new Error(`${expected} is not equal to ${result}`);
}

if (expected === result) {
  throw new Error(`${expected} is  equal to ${result}`);
}

// Calculate total amount

function totalAmount(amount, taxRate) {
  return amount + amount * taxRate;
}

let expected = totalAmount(10000, 10);

let result = 110000;

if (expected !== result) {
  throw new Error(`${expected} is not equal to ${result}`);
}

if (expected === result) {
  throw new Error(`${expected} is equal to ${result}`);
}
