import newElements from "../newElements";

export default function* bogoSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;

	function isSorted() {
		for (let i = 0; i < n - 1; i++) {
			if (arr[i].val > arr[i + 1].val) {
				return false;
			}
		}
		return true;
	}

	while (!isSorted()) {
		let random;
		for (let i = 0; i < n; i++) {
			random = Math.floor(Math.random() * n);
			let temp = arr[random].val;
			arr[random].val = arr[i].val;
			arr[i].val = temp;
		}

		yield newElements(arr, arrMax);
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i].active = true;
		yield newElements(arr, arrMax);
	}
}
