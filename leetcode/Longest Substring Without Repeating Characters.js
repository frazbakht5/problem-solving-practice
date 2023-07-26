/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (inputString) {
	if (inputString.length == 0)
		return 0;
	else if (inputString.length == 1)
		return 1;

	let hashSet = {};

	let maxLength = -1;

	let substring = "";

	let substringStartIndex = 0;

	for (let i = 0; i < inputString.length; i++) {
		const currentChar = inputString[i];
		substring += currentChar;

		const isCharPresentInSubstring = currentChar in hashSet;
		let isSubstringStartIndexBigger = substringStartIndex > hashSet[currentChar];

		if (isCharPresentInSubstring && !isSubstringStartIndexBigger) {
			let indexOfDuplicateChar = hashSet[currentChar];
			let currentSubstringLength = substring.length;

			maxLength = Math.max(maxLength, currentSubstringLength - 1);

			substringStartIndex = indexOfDuplicateChar + 1;
			substring = inputString.substring(substringStartIndex, i + 1);
			hashSet[currentChar] = i;
		}
		else {
			hashSet[currentChar] = i;
			let currentSubstringLength = substring.length;
			maxLength = Math.max(maxLength, currentSubstringLength);
		}
	}

	return maxLength;
};