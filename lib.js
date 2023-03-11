const { readFileSync } = require("fs");
const { resolve } = require("path");
const assert = require("assert");

/**
 * @type {[a: string, answer: string][]}
 */
const dataset = (() => {
  const question = readFileSync(resolve(__dirname, "AZ-GAG-dataset/question.csv")).toString().split("\n").filter((line) => line);
  const answer = readFileSync(resolve(__dirname, "AZ-GAG-dataset/answer.csv")).toString().split("\n").filter((line) => line);
  assert(question.length === answer.length);
  return question.map((_, i) => [question[i], answer[i]]);
})();

/**
 * @returns {[question: string, answer: string]} random AZGag
 */
module.exports = function AZGagGenerator() {
  return dataset[Math.floor(Math.random() * dataset.length)];
};
