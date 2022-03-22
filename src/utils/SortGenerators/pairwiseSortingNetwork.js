import newElements from "../newElements";

export default function* pairwiseSortingNetwork(items, arrMax) {
	let base = JSON.parse(JSON.stringify(items));
	let arr = JSON.parse(JSON.stringify(base));

	let n = arr.length;
	let changes = [];

	let a = 1;
	while (a < n) {
		let b = a;
		let c = 0;
		while (b < n) {
			if (arr[b - a].val > arr[b].val) {
				[arr[b].val, arr[b - a].val] = [arr[b - a].val, arr[b].val];

				arr[b - a].active = true;
				arr[b].active = true;
				changes.push(JSON.parse(JSON.stringify(arr)));
				arr[b - a].active = false;
				arr[b].active = false;
			}

			b++;
			c++;
			if (c >= a) {
				c = 0;
				b += a;
			}
		}
		a *= 2;
	}

	a = Math.floor(a / 4);
	let e = 1;
	while (a > 0) {
		let d = e;
		while (d > 0) {
			let b = (d + 1) * a;
			let c = 0;
			while (b < n) {
				if (arr[b - d * a].val > arr[b].val) {
					[arr[b].val, arr[b - d * a].val] = [
						arr[b - d * a].val,
						arr[b].val,
					];

					arr[b - d * a].active = true;
					arr[b].active = true;
					changes.push(JSON.parse(JSON.stringify(arr)));
					arr[b - d * a].active = false;
					arr[b].active = false;
				}

				c++;
				b++;
				if (c >= a) {
					c = 0;
					b += a;
				}
			}
			d = Math.floor(d / 2);
		}
		a = Math.floor(a / 2);
		e = 2 * e + 1;
	}

	for (let el of changes) {
		yield newElements(el.slice(0, base.length), arrMax);
	}

	for (let i = 0; i < base.length; i++) {
		arr[i].active = true;
		yield newElements(arr.slice(0, base.length), arrMax);
	}
}
