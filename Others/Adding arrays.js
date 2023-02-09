let testCases = [
	{
		id: 0,
		str1: "123456789",
		str2: "987654321",
		ans: "1111111110"
	},
	{
		id: 1,
		str1: "365487",
		str2: "333666998855114",
		ans: "333666999220601"
	},

	{
		id: 2,
		str1: "321654987951657",
		str2: "987654321",
		ans: "321655975605978"
	},
	{
		id: 3,
		str1: "3666998855999999998245893216247",
		str2: "3336669988551143645782458932876",
		ans: "7003668844551143644028352149123"
	},
	{
		id: 4,
		str1: "123456789123456789",
		str2: "987654321987654321",
		ans: "1111111111111111110"
	},
	{
		id: 5,
		str1: "123456789987654321",
		str2: "987654321123456789",
		ans: "1111111111111111110"
	},

]

const addStrings = (str1, str2) => {
	let ans = "";

	let longer = str1.length > str2.length ? str1 : str2;
	let shorter = str1.length > str2.length ? str2 : str1;

	//console.log("longer ===> ", longer);
	//console.log("shorter ===> ", shorter);

	//appending zeroes
	while (shorter.length < longer.length) {
		shorter = `0${shorter}`;
	}

	let carry = 0;
	let i = longer.length - 1;
	let j = shorter.length - 1;

	for (let looper = 0; looper < shorter.length; looper++) {

		const longDigit = parseInt(longer.charAt(i));
		const shortDigit = parseInt(shorter.charAt(j));

		//console.log(" longDigit ===> ", longDigit);
		//console.log("shortDigit ===> ", shortDigit);
		//console.log();

		let sum = longDigit + shortDigit + carry;
		if (sum < 10) {
			carry = 0;
			ans = `${sum}${ans}`
		}
		else {
			let sumStr = "" + sum + "";
			carry = parseInt(sumStr.charAt(0));
			ans = `${sumStr.charAt(1)}${ans}`
		}

		i--;
		j--;
	}

	if (carry > 0) {
		ans = `${carry}${ans}`;
	}

	return ans;
}

for (let i = 0; i < testCases.length; i++) {
	const testCase = testCases[i];
	let ans = addStrings(testCase.str1, testCase.str2);

	//console.log("ans ===> ", ans);
	//console.log("testCase.ans ===> ", testCase.ans);

	if (new String(ans).valueOf() == new String(testCase.ans).valueOf())
		console.log(`Test case ${testCase.id} Passed.`);
	else
		console.log(`Test case ${testCase.id} Failed.`);
}