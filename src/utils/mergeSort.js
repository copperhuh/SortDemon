import newElements from "./newElements";

export default function* mergeSort(items, arrMax) {
	let base = JSON.parse(JSON.stringify(items));
	let arr = JSON.parse(JSON.stringify(base));
	let starter = JSON.parse(JSON.stringify(base));

	let changes = [];

	function sortM(array) {
		if (array.length > 1) {
			let mid = Math.floor(array.length / 2);
			let L = array.slice(0, mid);
			let R = array.slice(mid);
			sortM(L);
			sortM(R);

			let i = 0;
			let j = 0;
			let k = 0;
			while (i < L.length && j < R.length) {
				if (L[i].val < R[j].val) {
					array[k] = L[i];
					i++;
				} else {
					array[k] = R[j];
					j++;
				}
				k++;
			}

			while (i < L.length) {
				array[k] = L[i];
				i++;
				k++;
			}
			while (j < R.length) {
				array[k] = R[j];
				j++;
				k++;
			}
			if (array !== []) {
				changes.push(JSON.parse(JSON.stringify([...array])));
			}
		}
	}
	let w = JSON.parse(JSON.stringify(arr));
	sortM(w);

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
