import newElements from "./newElements";

export default function* timSort(items, arrMax) {
	let base = JSON.parse(JSON.stringify(items));
	let arr = JSON.parse(JSON.stringify(base));

	let changes = [];

	let MIN_MERGE = 32;

	function minRunLength(n) {
		let r = 0;
		while (n >= MIN_MERGE) {
			r |= n & 1;
			n >>= 1;
		}
		return n + r;
	}

	function insertionSort(arr, left, right) {
		for (let i = left + 1; i <= right; i++) {
			let temp = arr[i].val;
			let j = i - 1;

			while (j >= left && arr[j].val > temp) {
				arr[j + 1].val = arr[j].val;

				arr[j + 1].active = true;
				arr[j].active = true;
				changes.push(JSON.parse(JSON.stringify(arr)));
				arr[j + 1].active = false;
				arr[j].active = false;

				j--;
			}
			arr[j + 1].val = temp;

			arr[j + 1].active = true;
			arr[i].active = true;
			changes.push(JSON.parse(JSON.stringify(arr)));
			arr[j + 1].active = false;
			arr[i].active = false;
		}
	}

	function merge(arr, l, m, r) {
		let len1 = m - l + 1,
			len2 = r - m;
		let left = new Array(len1);
		let right = new Array(len2);
		for (let x = 0; x < len1; x++) {
			left[x] = arr[l + x].val;
		}
		for (let x = 0; x < len2; x++) {
			right[x] = arr[m + 1 + x].val;
		}

		let i = 0;
		let j = 0;
		let k = l;

		while (i < len1 && j < len2) {
			if (left[i] <= right[j]) {
				arr[k].val = left[i];

				arr[k].active = true;
				changes.push(JSON.parse(JSON.stringify(arr)));
				arr[k].active = false;

				i++;
			} else {
				arr[k].val = right[j];

				arr[k].active = true;
				changes.push(JSON.parse(JSON.stringify(arr)));
				arr[k].active = false;

				j++;
			}
			k++;
		}

		while (i < len1) {
			arr[k].val = left[i];

			arr[k].active = true;
			changes.push(JSON.parse(JSON.stringify(arr)));
			arr[k].active = false;

			k++;
			i++;
		}

		while (j < len2) {
			arr[k].val = right[j];

			arr[k].active = true;
			changes.push(JSON.parse(JSON.stringify(arr)));
			arr[k].active = false;

			k++;
			j++;
		}
	}

	function sortT(arr, n) {
		let minRun = minRunLength(MIN_MERGE);

		for (let i = 0; i < n; i += minRun) {
			insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1));
		}

		for (let size = minRun; size < n; size = 2 * size) {
			for (let left = 0; left < n; left += 2 * size) {
				let mid = left + size - 1;
				let right = Math.min(left + 2 * size - 1, n - 1);

				if (mid < right) {
					merge(arr, left, mid, right);
				}
			}
		}
	}
	let w = JSON.parse(JSON.stringify(arr));
	sortT(w, w.length);

	console.log(w);

	for (let el of changes) {
		yield newElements(el.slice(0, base.length), arrMax);
	}

	yield newElements(
		w.map((el) => ({ val: el.val, active: true })).slice(0, base.length),
		arrMax
	);
}
