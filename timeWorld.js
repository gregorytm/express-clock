function worldTime(args) {
  const hours = getHours(args);
  const min = getMin(args);
}

function getHours(args) {
  const hours = args.slice(0, 2);
  console.log(hours);
  return hours;
}

function getMin(args) {
  const min = args.slice(3);
  console.log(min);
  return min;
}

function hourCheck(args) {
  const checkList = {
    00: "twelve",
    01: "one",
    02: "two",
    03: "three",
    04: "four",
    05: "five",
    06: "six",
    07: "seven",
    08: "eight",
    09: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "one",
    14: "two",
    15: "three",
    16: "four",
    17: "five",
    18: "six",
    19: "seven",
    20: "eight",
    21: "nine",
    22: "ten",
    23: "eleven",
  };
}

function minCheck(args) {
  const checkList = {
    00: "o'clock",
  };
}
