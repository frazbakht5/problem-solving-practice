
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

	let maxOfA = -1;

	for (let i = 0; i < a.length; i++) {
		const num = a[i];
		if (num > maxOfA)
			maxOfA = num;
	}

	let minOfB = Number.MAX_VALUE;

	for (let i = 0; i < b.length; i++) {
		const num = b[i];
		if (num < minOfB)
			minOfB = num;
	}

	let count = 0;


	for (let i = maxOfA; i <= minOfB; i++) {

		let isNumMultipleOfA = true;
		let isNumFactorOfB = true;

		for (let j = 0; j < a.length; j++) {
			const elementOfA = a[j];

			if (i % elementOfA != 0) {
				isNumMultipleOfA = false;
				break;
			}
		}

		if (isNumMultipleOfA == false)
			continue;

		for (let j = 0; j < b.length; j++) {
			const elementOfB = b[j];

			if (elementOfB % i != 0) {
				isNumFactorOfB = false;
				break;
			}
		}

		if (isNumFactorOfB == false)
			continue;

		count++;

	}

	return count;
}

