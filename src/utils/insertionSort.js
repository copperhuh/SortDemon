import newElements from "./newElements";

export default function* insertionSort(items, arrMax) {
	let i = 1;
	let arr = JSON.parse(JSON.stringify(items));

	while (i < arr.length) {
		let current = arr[i].val;
		let j = i - 1;

		arr[i].active = true;
		arr[j].active = true;
		while (j >= 0 && arr[j].val > current) {
			arr[j + 1].val = arr[j].val;

			arr[j].active = false;
			j--;
			if (j >= 0) arr[j].active = true;

			yield newElements(arr, arrMax);
		}

		arr[j + 1].val = current;

		if (j >= 0) arr[j].active = false;
		arr[j + 1].active = false;
		arr[i].active = false;
		i++;
		if (i !== arr.length) arr[i].active = true;

		yield newElements(arr, arrMax);
	}

	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
