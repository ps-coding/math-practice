/**
 * @typedef {'+' | '-' | '*' | '/' | '^' | '√'} Operation
 * @typedef {Object} Problem
 * @property {number} firstNum
 * @property {number} secondNum
 * @property {Operation} operation
 * @property {number} answer
 */

/**
 * Returns a random number between min and max (inclusive).
 * @param {number} min - The minimum number.
 * @param {number} max - The maximum number.
 * @returns {number} - A random number between min and max (inclusive).
 */
function randomNumBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates a math problem with a maximum difficulty level.
 * @param {number} maxDifficulty - The maximum difficulty level.
 * @returns {Problem} - A math problem with a maximum difficulty level.
 */
export function getProblem(maxDifficulty) {
	/** @type {Operation[]} */
	const operations = ['+', '-', '*', '/', '^', '√'];
	const operation = operations[randomNumBetween(0, operations.length - 1)];

	/** @type {number} */
	let firstNum;

	/** @type {number} */
	let secondNum;

	/** @type {number} */
	let answer;

	if (operation == '+') {
		firstNum = randomNumBetween(1, 10 * maxDifficulty);
		secondNum = randomNumBetween(1, 10 * maxDifficulty);
		answer = firstNum + secondNum;
	} else if (operation == '-') {
		answer = randomNumBetween(1, 10 * maxDifficulty);
		secondNum = randomNumBetween(1, 10 * maxDifficulty);
		firstNum = answer + secondNum;
	} else if (operation == '*') {
		firstNum = randomNumBetween(1, 4 * maxDifficulty);
		secondNum = randomNumBetween(1, 4 * maxDifficulty);
		answer = firstNum * secondNum;
	} else if (operation == '/') {
		answer = randomNumBetween(1, 4 * maxDifficulty);
		secondNum = randomNumBetween(1, 4 * maxDifficulty);
		firstNum = answer * secondNum;
	} else if (operation == '^') {
		firstNum = randomNumBetween(1, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 3);
		secondNum = randomNumBetween(2, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 2);
		answer = Math.pow(firstNum, secondNum);
	} else {
		answer = randomNumBetween(1, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 3);
		firstNum = randomNumBetween(2, 2 * Math.ceil(Math.log(maxDifficulty / 5)) + 2);
		secondNum = Math.pow(answer, firstNum);
	}

	return { firstNum, secondNum, operation, answer };
}
