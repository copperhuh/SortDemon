import newElements from "./newElements";

export default function* pancakeSort(items, arrMax) {
	let base = JSON.parse(JSON.stringify(items));
	let arr = JSON.parse(JSON.stringify(base));

	let changes = [];

	function flip(arr, i) {
		let og = i;
		let start = 0;
		while (start < i) {
			[arr[start].val, arr[i].val] = [arr[i].val, arr[start].val];

			start++;
			i--;
		}
		arr[og].active = true;
		changes.push(JSON.parse(JSON.stringify(arr)));
		arr[og].active = false;
	}

	function findMax(arr, n) {
		let mi, i;
		for (mi = 0, i = 0; i < n; ++i) {
			if (arr[i].val > arr[mi].val) {
				mi = i;
			}
		}

		return mi;
	}

	function sortP(arr, n) {
		for (let curr_size = n; curr_size > 1; --curr_size) {
			let mi = findMax(arr, curr_size);

			if (mi !== curr_size - 1) {
				flip(arr, mi);

				flip(arr, curr_size - 1);
			}
		}

		return 0;
	}
	let w = JSON.parse(JSON.stringify(arr));
	sortP(w, w.length);

	console.log(w);

	for (let el of changes) {
		yield newElements(el.slice(0, base.length), arrMax);
	}

	yield newElements(
		w.map((el) => ({ val: el.val, active: true })).slice(0, base.length),
		arrMax
	);
}
