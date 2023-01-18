'use strict';

function kangaroo(x1, v1, x2, v2) {
	// Write your code here
	let firstKangarooPosition = x1;
	let secondKangarooPosition = x2;

	if (secondKangarooPosition > firstKangarooPosition && v2 > v1)
		return "NO";
	else if (secondKangarooPosition < firstKangarooPosition && v2 < v1)
		return "NO";
	else if (x1 != x2 && v1 == v2)
		return "NO";


	while (true) {
		firstKangarooPosition += v1;
		secondKangarooPosition += v2;

		if (firstKangarooPosition == secondKangarooPosition)
			return "YES";
		else if (secondKangarooPosition > firstKangarooPosition && v2 > v1)
			return "NO";
		else if (secondKangarooPosition < firstKangarooPosition && v2 < v1)
			return "NO";
	}

}
