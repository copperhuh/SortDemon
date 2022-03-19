import newElements from "./newElements";

export default function* flashSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	var max = 0,
		min = arr[0].val;
	var n = arr.length;
	var m = ~~(0.45 * n);
	var l = new Array(m);

	for (var i = 1; i < n; ++i) {
		if (arr[i].val < min) {
			min = arr[i].val;
		}
		if (arr[i].val > arr[max].val) {
			max = i;
		}

		arr[i].active = true;
		yield newElements(arr, arrMax);
		arr[i].active = false;
	}

	if (min === arr[max]) {
		return arr;
	}

	var c1 = (m - 1) / (arr[max].val - min);

	for (var k = 0; k < m; k++) {
		l[k] = 0;
	}
	for (var j = 0; j < n; ++j) {
		k = ~~(c1 * (arr[j].val - min));
		++l[k];

		arr[j].active = true;
		yield newElements(arr, arrMax);
		arr[j].active = false;
	}

	for (var p = 1; p < m; ++p) {
		l[p] = l[p] + l[p - 1];
	}

	var hold = arr[max].val;
	arr[max].val = arr[0].val;
	arr[0].val = hold;

	//permutation
	var move = 0,
		t,
		flash;
	j = 0;
	k = m - 1;

	while (move < n - 1) {
		while (j > l[k] - 1) {
			++j;
			k = ~~(c1 * (arr[j].val - min));
		}
		if (k < 0) break;
		flash = arr[j].val;
		while (j !== l[k]) {
			k = ~~(c1 * (flash - min));
			hold = arr[(t = --l[k])].val;
			arr[t].val = flash;
			flash = hold;
			++move;

			arr[t].active = true;
			yield newElements(arr, arrMax);
			arr[t].active = false;
		}
	}

	//insertion
	for (j = 1; j < n; j++) {
		hold = arr[j].val;
		i = j - 1;
		while (i >= 0 && arr[i].val > hold) {
			arr[i + 1].val = arr[i--].val;

			arr[i + 1].active = true;
			yield newElements(arr, arrMax);
			arr[i + 1].active = false;
		}
		arr[i + 1].val = hold;

		arr[i + 1].active = true;
		yield newElements(arr, arrMax);
		arr[i + 1].active = false;
	}
	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
