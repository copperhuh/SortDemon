import newElements from "./newElements";

export default function* quickSortStable(items, arrMax) {
	let base = JSON.parse(JSON.stringify(items));
	let arr = JSON.parse(JSON.stringify(base));
	let starter = JSON.parse(JSON.stringify(base));

	let changes = [];

	function sortQ(ar) {
		if (ar.length <= 1) {
			return ar;
		} else {
			let mid = Math.floor(ar.length / 2);
			let pivot = JSON.parse(JSON.stringify(ar[mid]));

			let smaller = [];
			let greater = [];

			for (let indx = 0; indx < ar.length; indx++) {
				if (indx !== mid) {
					if (ar[indx].val < pivot.val) smaller.push(ar[indx]);
					else if (ar[indx].val > pivot.val) {
						greater.push(ar[indx]);
					} else {
						if (indx < mid) {
							smaller.push(ar[indx]);
						} else {
							greater.push(ar[indx]);
						}
					}
				}
			}
			changes.push(
				JSON.parse(JSON.stringify([...smaller, pivot, ...greater]))
			);
			return JSON.parse(
				JSON.stringify([...sortQ(smaller), pivot, ...sortQ(greater)])
			);
		}
	}
	let w = JSON.parse(JSON.stringify(arr));
	w = sortQ(w);

	let steps = [];
	for (let one of changes) {
		let baseCopy = [...base];
		let baseNums = baseCopy.map((el) => el.val);
		let indexes = [];
		for (let each of one) {
			indexes.push(baseNums.indexOf(each.val));
		}
		indexes = indexes.sort((a, b) => a - b);
		baseCopy = [
			...baseCopy.slice(0, indexes[0]),
			...one,
			...baseCopy.slice(indexes[indexes.length - 1] + 1),
		];
		steps.push([baseCopy, indexes]);
		base = [...baseCopy];
	}
	steps.push([w, Array.from(Array(w.length).keys())]);

	for (let el of steps) {
		for (let i = 0; i < el[0].length; i++) {
			if (el[1].includes(i) || el[0].length === el[1].length) {
				el[0][i].active = true;
				starter[i] = el[0][i];
				yield newElements(starter, arrMax);
				starter[i].active = false;
			}
		}
	}

	yield newElements(
		w.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
