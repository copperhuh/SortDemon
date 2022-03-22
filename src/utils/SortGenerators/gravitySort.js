import newElements from "../newElements";

export default function* gravitySort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;

	let max = arrMax;
	let beads = [];
	for (let i = 0; i < max * n; i++) {
		beads.push(0);
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < arr[i].val; j++) {
			beads[i * max + j] = 1;
		}
	}
	function format(arr) {
		let a = [];
		for (let i = 0; i < n; i++) {
			a.push({ val: 0, active: false });
		}
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 1) {
				a[Math.floor(i / max)].val++;
			}
		}
		return a;
	}
	yield newElements(JSON.parse(JSON.stringify(format(beads))), arrMax);

	for (let j = 0; j < max; j++) {
		yield newElements(JSON.parse(JSON.stringify(format(beads))), arrMax);

		let sum = 0;
		for (let i = 0; i < n; i++) {
			sum += beads[i * max + j];
			beads[i * max + j] = 0;
		}

		for (let i = n - sum; i < n; i++) {
			beads[i * max + j] = 1;
		}
		yield newElements(JSON.parse(JSON.stringify(format(beads))), arrMax);
	}

	for (let i = 0; i < n; i++) {
		let j = 0;
		while (j < max && beads[i * max + j] === 1) {
			j++;
		}
		arr[i].val = j;
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i].active = true;
		yield newElements(arr, arrMax);
	}
}
