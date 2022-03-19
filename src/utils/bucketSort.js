import newElements from "./newElements";

export default function* bucketSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let x = 30;
	let n = Math.floor(arrMax / x) + 1;

	let buckets = new Array(n);

	for (let i = 0; i < n; i++) {
		buckets[i] = [];
	}

	for (let i = 0; i < arr.length; i++) {
		let idx = Math.floor((arr[i].val - 1) / x);

		buckets[idx].push(arr[i]);
		yield newElements(
			[
				...JSON.parse(JSON.stringify(buckets)).flat(),
				...JSON.parse(JSON.stringify(arr)).slice(i + 1),
			],
			arrMax
		);
	}

	for (let k = 0; k < n; k++) {
		for (let i = 1; i < buckets[k].length; i++) {
			let x = buckets[k][i];
			let j = binarySearch(buckets[k], x, 0, i - 1);

			if (j > 0) buckets[k][j].active = true;
			if (i > 0) buckets[k][i].active = true;
			yield newElements(
				JSON.parse(JSON.stringify(buckets)).flat(),
				arrMax
			);
			if (j > 0) buckets[k][j].active = false;
			if (i > 0) buckets[k][i].active = false;

			buckets[k] = [
				...buckets[k].slice(0, j),
				x,
				...buckets[k].slice(j, i),
				...buckets[k].slice(i + 1),
			];

			if (j > 0) buckets[k][j].active = true;
			if (i > 0) buckets[k][i].active = true;
			yield newElements(
				JSON.parse(JSON.stringify(buckets)).flat(),
				arrMax
			);
			if (j > 0) buckets[k][j].active = false;
			if (i > 0) buckets[k][i].active = false;
		}
	}

	let index = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < buckets[i].length; j++) {
			arr[index++] = buckets[i][j];
		}
	}

	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}

function binarySearch(arr, item, low, high) {
	if (high <= low) {
		return item.val > arr[low].val ? low + 1 : low;
	}

	let mid = Math.floor((low + high) / 2);

	if (item.val === arr[mid].val) {
		return mid + 1;
	}

	if (item.val > arr[mid].val) {
		return binarySearch(arr, item, mid + 1, high);
	}

	return binarySearch(arr, item, low, mid - 1);
}
