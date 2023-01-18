'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
	// Write your code here
	console.log("\n");

	let maxOfA = -1;

	for (let i = 0; i < a.length; i++) {
		const num = a[i];
		if (num > maxOfA)
			maxOfA = num;
	}
	console.log("maxOfA ===> ", maxOfA);

	let minOfB = Number.MAX_VALUE;

	for (let i = 0; i < b.length; i++) {
		const num = b[i];
		if (num < minOfB)
			minOfB = num;
	}
	console.log("minOfB ===> ", minOfB);

	let count = 0;


	for (let i = maxOfA; i <= minOfB; i++) {

		let isNumMultipleOfA = true;
		let isNumFactorOfB = true;

		console.log("checking for i ===> ", i);

		for (let j = 0; j < a.length; j++) {
			const elementOfA = a[j];

			if (i % elementOfA != 0) {
				isNumMultipleOfA = false;
				console.log("Not a multiple for elementOfA ===> ", elementOfA);
				break;
			}
		}

		if (isNumMultipleOfA == false)
			continue;

		if (i == 8)
			console.log("A array test passed");

		for (let j = 0; j < b.length; j++) {
			const elementOfB = b[j];

			if (elementOfB % i != 0) {
				isNumFactorOfB = false;
				console.log("Not a factor for elementOfB ===> ", elementOfB);

				break;
			}
		}

		if (isNumFactorOfB == false)
			continue;

		if (i == 8)
			console.log("B array test passed");

		count++;
		console.log("count++. Now count ===> ", count);

	}

	return count;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

	const n = parseInt(firstMultipleInput[0], 10);

	const m = parseInt(firstMultipleInput[1], 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

	const total = getTotalX(arr, brr);

	ws.write(total + '\n');

	ws.end();
}
