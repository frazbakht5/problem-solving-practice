'use strict';

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
	// Write your code here

	let minScore = scores[0];
	let maxScore = scores[0];
	let minCount = 0;
	let maxCount = 0;

	if (scores.length > 1) {
		for (let i = 1; i < scores.length; i++) {
			const score = scores[i];

			if (score < minScore) {
				minScore = score;
				minCount++;
			}
			else if (score > maxScore) {
				maxScore = score;
				maxCount++;
			}

		}
	}

	return [maxCount, minCount];

}
