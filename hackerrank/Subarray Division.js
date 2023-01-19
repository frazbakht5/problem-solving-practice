
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

	let counter = 0;

	for (let i = 0; i < s.length; i++) {
		const segment = s.slice(i, i + m);
		//console.log("segment ===> ", segment);

		const segmentSum = segment.reduce((total, current) => {
			return total + current;
		});

		if (segmentSum == d) {
			counter++;
		}
	}

	return counter;
}
