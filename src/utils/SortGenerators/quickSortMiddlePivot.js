import newElements from "../newElements";

export default function* quickSortLeftPivot(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));

	let changes = [];

	function partition(arr, low, high) {
		let mid = Math.floor((low + high) / 2);
		let pivot = JSON.parse(JSON.stringify(arr[mid]));

		let i = low;

		for (let j = low; j <= high; j++) {
			if (arr[j].val < pivot.val) {
				[arr[i].val, arr[j].val] = [arr[j].val, arr[i].val];
				i++;
				if (i > mid) {
					mid = j;
				}
			}
			if (i < arr.length && i >= 0) arr[i].active = true;
			arr[j].active = true;
			changes.push(JSON.parse(JSON.stringify(arr)));
			if (i < arr.length && i >= 0) arr[i].active = false;
			arr[j].active = false;
		}
		[arr[i].val, arr[mid].val] = [arr[mid].val, arr[i].val];

		arr[i].active = true;
		arr[mid].active = true;
		changes.push(JSON.parse(JSON.stringify(arr)));
		arr[i].active = false;
		arr[mid].active = false;

		return i;
	}

	function sortQ(arr, low, high) {
		if (low < high) {
			let pi = partition(arr, low, high);

			sortQ(arr, low, pi - 1);
			sortQ(arr, pi + 1, high);
		}
	}

	sortQ(arr, 0, arr.length - 1);

	for (let each of changes) {
		yield newElements(each, arrMax);
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i].active = true;
		yield newElements(arr, arrMax);
	}
}
