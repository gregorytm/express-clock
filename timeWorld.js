const rawDataMinutes =
  "o'clock one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen ninteen twenty twenty-one twenty-two twenty-three twenty-four twenty-five twenty-six twenty-seven twenty-eight twenty-nine thirty thirty-one thirty-two thirty-three thirty-four thirty-five thirty-six thirty-seven thirty-eight thirty-nine fourty fourty-one fourty-two fourty-three fourty-four fourty-five fourty-six fourty-seven fourty=eight fourty-nine fifty fifty-one fifty-two fifty-three fifty-four fifty-five fifty-six fifty-seven fifty-eight fifty-nine";

const rawDataHours =
  "twelve one two three four five six seven eight nine ten eleven twelve one two three four five six seven eight nine ten elven";

function worldTime(args) {
  const hours = getHours(args);
  const min = getMin(args);
  const special = noonAndMidnight(hours, min);
  if (special) {
    return special;
  }
  const amPm = amPmCheck(hours);
  const checkListHours = rawToList(rawDataHours);
  const checkListMinutes = rawToList(rawDataMinutes);
  const hoursMatch = findMatch(hours, checkListHours);
  const minutesMatch = findMatch(min, checkListMinutes);
  const final = join(hoursMatch, minutesMatch, amPm);
  return final;
}

function getHours(args) {
  const hours = args.slice(0, 2);
  return hours;
}

function getMin(args) {
  const min = args.slice(3);
  return min;
}

function amPmCheck(hours) {
  if (Number(hours) <= 11) {
    return "am";
  } else {
    return "pm";
  }
}

function findMatch(arg, list) {
  return list[arg];
}

function rawToList(rawData) {
  const checkList = rawData.split(" ");
  const checkDict = {};
  for (const [i, v] of checkList.entries()) {
    checkDict[i] = v;
  }
  return checkDict;
}

function noonAndMidnight(hours, min) {
  if (hours === "0" && min === "0") {
    return "midnight";
  }
  if (hours === "12" && min === "0") {
    return "noon";
  }
}

function join(hoursMatch, minutesMatch, amPm) {
  return `${hoursMatch} ${minutesMatch} ${amPm}`;
}
