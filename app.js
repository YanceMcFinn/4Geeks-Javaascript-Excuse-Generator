let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getWord(array) {
  let i = getRandomInt(array.length);
  return array[i];
}
function onLoad() {
  let excuse =
    getWord(who) +
    " " +
    getWord(action) +
    " " +
    getWord(what) +
    " " +
    getWord(when);
  document.getElementById("excuse").innerHTML = excuse;
}
