
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
	// Write your code here

	let allCombinations = getCombos(s, m);
	let count = 0;

	let unallowedPermutationIndexes = [];
	let n = s.length;

	if (n > 1) {
		for (let i = 0; i < allCombinations.length; i++) {
			let subArrayNumber = parseInt(i / n);
			// console.log("For i = " + i + ", subArrayNumber ===> ", subArrayNumber);

			// unallowedPermutationIndexes.push()
			for (let j = 0; j <= subArrayNumber; j++) {
				// console.log("pushing i = ", i);
				unallowedPermutationIndexes.push(subArrayNumber * n + j)

			}
			i += subArrayNumber;
			// unallowedPermutationIndexes.push(i);
		}
	}
	unallowedPermutationIndexes = [...new Set(unallowedPermutationIndexes)];
	console.log("unallowedPermutationIndexes ===> ", unallowedPermutationIndexes);

	let yesCombinations = [];

	for (let i = 0; i < allCombinations.length; i++) {
		const combination = allCombinations[i];
		console.log("For i = " + i + ", combination ===> ", combination);

		if (unallowedPermutationIndexes.includes(i)) {
			console.log("Skipping");
			continue;
		}


		let sum = 0;

		for (let j = 0; j < combination.length; j++) {
			const num = combination[j];
			sum += num;

			if (sum > d)
				break;
		}
		if (sum == d && !yesCombinations.includes(JSON.stringify(combination))) {
			yesCombinations.push(JSON.stringify(combination));
			count++;
			console.log("Yes");
		}
		else {
			console.log("No");
		}

	}
	return count;

}

const getCombos = (arr, len) => {
	const base = arr.length
	const counter = Array(len).fill(base === 1 ? arr[0] : 0)
	if (base === 1) return [counter]
	const combos = []
	const increment = i => {
		if (counter[i] === base - 1) {
			counter[i] = 0
			increment(i - 1)
		} else {
			counter[i]++
		}
	}

	for (let i = base ** len; i--;) {
		const combo = []
		for (let j = 0; j < counter.length; j++) {
			combo.push(arr[counter[j]])
		}
		combos.push(combo)
		increment(counter.length - 1)
	}

	return combos
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));