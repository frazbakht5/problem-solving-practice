/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let length1 = word1.length;
	let length2 = word2.length;

	let bigger = length1 >= length2 ? length1 : length2;

	let arr = [];
	let alternateString;

	for (let i = 0; i < bigger; i++) {
		const char1 = word1[i];
		const char2 = word2[i];

		if (char1) arr.push(char1);
		if (char2) arr.push(char2);
	}
	alternateString = arr.join("");

	return alternateString;
};