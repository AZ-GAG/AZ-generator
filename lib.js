import { readFileSync } from "fs";
import assert from "assert";

/**
 * @type {[a: string, answer: string][]}
 */
const dataset = (() => {
  const question = readFileSync("./AZ-GAG-dataset/question.csv").toString().split("\n").filter((line) => line);
  const answer = readFileSync("./AZ-GAG-dataset/answer.csv").toString().split("\n").filter((line) => line);
  assert(question.length === answer.length);
  return question.map((_, i) => [question[i], answer[i]]);
})();

/**
 * @returns {[question: string, answer: string]} random AZGag
 */
export default function AZGagGenerator() {
  return dataset[Math.floor(Math.random() * dataset.length)];
};
