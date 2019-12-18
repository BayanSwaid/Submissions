const stringSize = text => {
  return text.length;
};
const replaceCharacterE = text => {
  return text.replace("e", " ");
};
const concatString = (text1, text2) => {
  return text1.concat(text2);
};
const showChar5 = text => {
  return text.charAt(4);
};
const showChar9 = text => {
  return text.substring(0, 9);
};
const toCapitals = text => {
  return text.toUpperCase();
};
const toLowerCase = text => {
  return text.toLowerCase();
};
const removeSpaces = text => {
  return text.trim();
};
const IsString = text => {
  return typeof text === "string";
};

const getExtension = text => {
  return text.split(".")[1];
};
const countSpaces = text => {
  var i,
    count = 0;
  for (i = 0; i < text.length; i++) {
    if (text.charAt(i) === " ") count++;
  }
  return count;
};
const InverseString = text => {
  return text
    .split("")
    .reverse()
    .join("");
};

const power = (x, y) => {
  return Math.pow(x, y);
};
const absoluteValue = num => {
  return Math.abs(num);
};
const absoluteValueArray = array => {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i]);
  }
  return array;
};
const circleSurface = radius => {
  return Math.round(Math.PI * Math.pow(radius, 2));
};
const hypothenuse = (ab, ac) => {
  return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
};
const BMI = (weight, height) => {
  var BMI = weight / (height * height);

  return Math.round(BMI * Math.pow(10, 2)) / Math.pow(10, 2);
};

const createLanguagesArray = () => {
  const lang_array = ["Html", "CSS", "Java", "PHP"];
  return lang_array;
};

const createNumbersArray = () => {
  const num_array = [];
  for (var j = 0; j < 6; j++) num_array.push(j);
  return num_array;
};

const replaceElement = languages => {
  languages[2] = "Javascript";
  return languages;
};

const addElement = languages => {
  languages.push("Ruby", "Python");
  return languages;
};

const addNumberElement = numbers => {
  numbers.unshift(-2, -1);
  return numbers;
};

const removeFirst = languages => {
  languages.shift();
  return languages;
};

const removeLast = languages => {
  languages.pop();
  return languages;
};

const convertStrToArr = social_arr => {
  return social_arr.split(",");
};

const convertArrToStr = languages => {
  return languages.join();
};

const sortArr = social_arr => {
  social_arr.sort();
  return social_arr;
};

const invertArr = social_arr => {
  social_arr.reverse();
  return social_arr;
};
