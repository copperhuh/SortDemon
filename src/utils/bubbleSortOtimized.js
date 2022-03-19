import newElements from "./newElements";

export default function* bubbleSortOptimized(items, arrMax) {
	let i = 0;
	let j = 0;
	let arr = JSON.parse(JSON.stringify(items));

	while (i < arr.length) {
		let wasSwapped = false;
		j = 0;

		arr[i].active = true;
		arr[j].active = true;

		while (j < arr.length - 1 - i) {
			if (arr[j].val > arr[j + 1].val) {
				[arr[j].val, arr[j + 1].val] = [arr[j + 1].val, arr[j].val];
				wasSwapped = true;
			}

			if (j !== i) arr[j].active = false;
			j++;
			arr[j].active = true;
			if (j + 1 !== arr.length) arr[j + 1].active = true;

			yield newElements(arr, arrMax);
		}

		if (j + 1 !== arr.length) arr[j + 1].active = false;
		arr[j].active = false;
		arr[i].active = false;

		i++;

		if (i !== arr.length) arr[i].active = true;

		yield newElements(arr, arrMax);

		if (!wasSwapped) {
			break;
		}
	}

	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
