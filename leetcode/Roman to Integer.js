const symbolValues = {
	"I": 1,
	"V": 5,
	"X": 10,
	"L": 50,
	"C": 100,
	"D": 500,
	"M": 1000
}


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

	if (s.length == 0)
		return 0;

	let total = 0;
	let lastChar = s[0];

	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		if (symbolValues[char] <= symbolValues[lastChar])
			total += symbolValues[char];
		else
			total -= symbolValues[char];
	}

	return total;
};
