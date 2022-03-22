import newElements from "../newElements";

export default function* oddEvenSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;
	let isSorted = false;

	while (!isSorted) {
		isSorted = true;

		for (let i = 1; i <= n - 2; i = i + 2) {
			if (arr[i].val > arr[i + 1].val) {
				[arr[i].val, arr[i + 1].val] = [arr[i + 1].val, arr[i].val];
				isSorted = false;
			}
			arr[i].active = true;
			arr[i + 1].active = true;
			yield newElements(arr, arrMax);
			arr[i].active = false;
			arr[i + 1].active = false;
		}

		for (let i = 0; i <= n - 2; i = i + 2) {
			if (arr[i].val > arr[i + 1].val) {
				[arr[i].val, arr[i + 1].val] = [arr[i + 1].val, arr[i].val];
				isSorted = false;
			}
			arr[i].active = true;
			arr[i + 1].active = true;
			yield newElements(arr, arrMax);
			arr[i].active = false;
			arr[i + 1].active = false;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i].active = true;
		yield newElements(arr, arrMax);
	}
}
