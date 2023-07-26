function hasDuplicateCharacters(str) {
	const charSet = new Set();

	for (const char of str) {
		if (charSet.has(char)) {
			return true; // Duplicate character found
		}
		charSet.add(char);
	}

	return false; // No duplicate characters found
}

function getSubstringsByChar(str, char) {
	console.log(`\ngetSubstringsByChar(${str} , ${char})`);
	let indexes = [];

	for (let i = 0; i < str.length; i++) {
		const element = str[i];

		if (element == char)
			indexes.push(i);
	}

	console.log("indexes ===> ", indexes);

	let substrings = [];

	substrings.push(str.substring(0, indexes[1]))

	for (let i = 0; i < indexes.length; i++) {
		const index = indexes[i];


		if (i == indexes.length - 1) {
			substrings.push(str.substring(index))
		}
		else {
			console.log("index+1 ===> ", index+1);
			console.log("indexes[i+1] ===> ", indexes[i+1]);
			let sub = str.substring(index + 1, indexes[i + 2]);
			console.log("sub ===> ", sub);


			// if(!hasDuplicateCharacters(sub))
			substrings.push(sub)
		}
	}

	return substrings;
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s.length == 0)
		return 0;
	else if (s.length == 1)
		return 1;
	else if (!hasDuplicateCharacters(s)) {
		return s.length
	}

	const hashSet = {};
	let allSubstrings = [];

	const charSet = new Set();

	for (const char of s) {
		charSet.add(char);
	}

	for (const letter of charSet) {
		hashSet[letter] = 0;
	}

	for (const char of s) {
		hashSet[char]++;
	}

	for (const key in hashSet) {
		console.log(`Key: ${key}, Value: ${hashSet[key]}`);
	}

	for (const key in hashSet) {
		if (hashSet[key] > 1) {

			let newSubstrings = getSubstringsByChar(s, key);

			/* for (let i = 0; i < newSubstrings.length; i++) {
				const substring = newSubstrings[i];

				newSubstrings[i] = key + substring;
			} */
			console.log("newSubstrings ===> ", newSubstrings);

			let prevAllSubstrings = [...allSubstrings]
			allSubstrings = [...prevAllSubstrings, ...newSubstrings]

		}
	}

	let maxLength = 0;

	console.log("\nallSubstrings ===> ", allSubstrings);

	for (const substring of allSubstrings) {
		const length = substring.length;
		if (length > maxLength && !hasDuplicateCharacters(substring)) {

			maxLength = length;
		}
	}

	return maxLength;
};

const input = "ohomm";
console.log("input ===> ", input);
console.log("Final answer ===> ", lengthOfLongestSubstring(input));