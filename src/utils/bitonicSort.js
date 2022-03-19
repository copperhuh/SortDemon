import newElements from "./newElements";

export default function* bitonicSort(items, arrMax) {
	let base = JSON.parse(JSON.stringify(items));
	let arr = JSON.parse(JSON.stringify(base));

	let goal = 1;
	while (Math.pow(2, goal) < base.length) {
		goal++;
	}

	let localMax = Math.pow(2, goal);
	for (let i = 1; i <= localMax; i++) {
		if (arr.length <= i) {
			arr.push({ val: i, active: false });
		}
	}

	let changes = [];

	function compAndSwap(a, i, j, dir) {
		if (
			(a[i].val > a[j].val && dir === 1) ||
			(a[i].val < a[j].val && dir === 0)
		) {
			[a[i].val, a[j].val] = [a[j].val, a[i].val];

			a[i].active = true;
			a[j].active = true;
			changes.push(JSON.parse(JSON.stringify(a)));
			a[i].active = false;
			a[j].active = false;
		}
	}

	function bitonicMerge(a, low, cnt, dir) {
		if (cnt > 1) {
			var k = parseInt(cnt / 2);
			for (var i = low; i < low + k; i++) compAndSwap(a, i, i + k, dir);
			bitonicMerge(a, low, k, dir);
			bitonicMerge(a, low + k, k, dir);
		}
	}

	function sortB(a, low, cnt, dir) {
		if (cnt >= 1) {
			var k = parseInt(cnt / 2);

			sortB(a, low, k, 1);

			sortB(a, low + k, k, 0);

			bitonicMerge(a, low, cnt, dir);
		}
		changes.push(JSON.parse(JSON.stringify(a)));
	}
	let w = JSON.parse(JSON.stringify(arr));
	sortB(w, 0, w.length, 1);

	let prev = w;
	for (let el of changes) {
		// eslint-disable-next-line no-loop-func
		if (
			!el.slice(0, base.length).every((x, idx) => x.val === prev[idx].val)
		) {
			yield newElements(el.slice(0, base.length), arrMax);
		}
		prev = el;
	}

	yield newElements(
		w.map((el) => ({ val: el.val, active: true })).slice(0, base.length),
		arrMax
	);
}
