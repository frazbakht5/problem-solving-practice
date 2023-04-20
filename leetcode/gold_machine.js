const calculateGold = (x, z, n, arr, k) => {
	let ans = 0;
	let min = findMin(arr);
	let carryForward = 0;
	let machinesBought = 0;

	for (let i = 0; i < k; i++) {
		console.log("\n");
		let totalGold = x + carryForward;
		totalGold += machinesBought * z;
		console.log("At start of day " + (i + 1) + " :");
		console.log("totalGold ===> ", totalGold);
		console.log("carryForward ===> ", carryForward);
		console.log("machinesBought ===> ", machinesBought);
		console.log("min ===> ", min);

		if (min && totalGold >= min[1]) {
			//buy machine

			//us case me agar khareednay me fayda bhi ho
			let numberOfRemainingDays = k - i - 1;
			let priceOfNewMachine = min[1];

			let newMachineBenefit = numberOfRemainingDays * z;

			if (newMachineBenefit > priceOfNewMachine) {
				console.log("Buying machine on index " + min[0] + " with price " + min[1]);
				totalGold = totalGold - priceOfNewMachine;	//subtract price from total
				arr[min[0]] = undefined;
				min = findMin(arr);
				machinesBought++;
			}
		}
		// totalGold += machinesBought * z;
		carryForward = totalGold;
	}

	return carryForward;
}

const findMin = (arr) => {
	let min = Number.MAX_VALUE;
	let pair;

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

		if (!element)
			continue;

		if (element < min) {
			min = element;
			pair = [i, min];
		}
	}

	if (pair)
		return pair;
	else
		return undefined;
}

//x, z, n, arr, k
// console.log((calculateGold(1, 2, 3, [3, 2, 4], 5)));
// console.log((calculateGold(3, 2, 3, [4, 2, 3], 4)));