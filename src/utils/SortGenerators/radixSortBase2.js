import newElements from "../newElements";

export default function* radixSortBase2(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;
	let base = 2;

	for (let exp = 1; Math.floor(arrMax / exp) > 0; exp *= base) {
		let output = new Array(n);
		let count = new Array(base);
		for (let i = 0; i < base; i++) {
			count[i] = 0;

			arr[i].active = true;
			yield newElements(arr, arrMax);
			arr[i].active = false;
		}

		for (let i = 0; i < n; i++)
			count[Math.floor(arr[i].val / exp) % base]++;

		for (let i = 1; i < 10; i++) count[i] += count[i - 1];

		for (let i = n - 1; i >= 0; i--) {
			output[count[Math.floor(arr[i].val / exp) % base] - 1] = arr[i].val;
			count[Math.floor(arr[i].val / exp) % base]--;
		}

		for (let i = 0; i < n; i++) {
			arr[i].val = output[i];

			arr[i].active = true;
			yield newElements(arr, arrMax);
			arr[i].active = false;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i].active = true;
		yield newElements(arr, arrMax);
	}
}
