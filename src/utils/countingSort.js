import newElements from "./newElements";

export default function* countingSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;

	let count = Array.from({ length: arrMax }, (_, i) => 0);
	for (let i = 0; i < n; ++i) {
		count[arr[i].val - 1]++;

		arr[i].active = true;
		yield newElements(arr, arrMax);
		arr[i].active = false;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] += count[i - 1];

		arr[i].active = true;
		yield newElements(arr, arrMax);
		arr[i].active = false;
	}
	for (let i = 0; i < n; i++) {
		let num;
		for (let j = 0; j < count.length; j++) {
			if (count[j] > i) {
				num = j + 1;
				break;
			}
		}
		arr[i].val = num;

		arr[i].active = true;
		yield newElements(arr, arrMax);
		arr[i].active = false;
	}

	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
