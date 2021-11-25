// 1st Function Add to number .

function add(numA = 0, numB = 0) {
  if (typeof numA !== `number` && typeof numB === `number`) {
    console.error("Invalid Input");
  } else {
    return numA + numB;
  }
}

// 2nd Function multiply of to number

function multiply(numA = 0, numB = 0) {
  if (typeof numA !== `number` && typeof numB !== `number`) {
    console.error(`Enter Valid input`);
  } else {
    return numA * numB;
  }
}

// Testing FrameWork
function test(message, callback) {
  try {
    callback();
    console.log("😉", message);
  } catch (error) {
    console.error(error);
    console.log("❌", message);
  }
}

// Assertion Liberary
function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not aqual to ${expected}`);
      }
    },
    toBeEqual: function (expected) {
      if (typeof actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

// Addition calls
test("add 10+5 to be 15", () => {
  expect(add(10, 5)).toEqual(15);
});
test("add 5+5 to be 20", () => {
  expect(add(5, 5)).toEqual(20);
});
test("add 30+9 to be 39", () => {
  expect(add(30, 9)).toEqual(39);
});
test("add 10+80 to be 90", () => {
  expect(add(10, 80)).toEqual(90);
});
test("add 25+5 to be 25", () => {
  expect(add(25, 5)).toEqual(20);
});

// Multiplication calls
test("add 10*5 to be 50", () => {
  expect(multiply(10, 5)).toEqual(50);
});
test("add 5*5 to be 25", () => {
  expect(multiply(5, 5)).toEqual(20);
});
test("add 30*9 to be 270", () => {
  expect(multiply(30, 9)).toEqual(270);
});
test("add 10*80 to be 800", () => {
  expect(multiply(10, 80)).toEqual(80);
});
test("add 25*5 to be 125", () => {
  expect(multiply(25, 5)).toEqual(120);
});
