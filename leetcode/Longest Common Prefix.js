/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefix = "";

	let shortestWordLength = Number.MAX_VALUE;

	for (let i = 0; i < strs.length; i++) {
		const word = strs[i];
		if (word.length < shortestWordLength)
			shortestWordLength = word.length;
	}

	for (let i = 0; i < shortestWordLength; i++) {
		let currentChar = strs[j][i];
		let toAdd = true;

		for (let j = 0; j < strs.length; j++) {
			// i is th index in word
			// j is the word
			const word = strs[j];
			if (word[i] != currentChar) {
				toAdd = false;
				break;
			}

		}
		if (toAdd)
			prefix = prefix + currentChar;

		else
			break;

	}

};



/*
0 1 2 3 4 5
f l o w e r
f l o w
f l i g h t


Input: strs = ["flower","flow","flight"]
Output: "fl"

*/