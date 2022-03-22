import newElements from "../newElements";

export default function* mergeSortBottomUp(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let merged = [];
	for (let one of arr) {
		merged.push([one]);
	}

	while (merged.length !== 1) {
		let n = 0;

		while (n < merged.length) {
			if (n + 1 !== merged.length) {
				let L = merged[n];
				let R = merged[n + 1];
				let combined = JSON.parse(JSON.stringify([...L, ...R]));
				merged = [
					...merged.slice(0, n),
					combined,
					...merged.slice(n + 2),
				];

				let i = 0;
				let j = 0;
				let k = 0;

				merged[n][k].active = true;
				while (i < L.length && j < R.length) {
					if (L[i].val < R[j].val) {
						merged[n][k].val = L[i].val;
						i++;
					} else {
						merged[n][k].val = R[j].val;
						j++;
					}
					merged[n][k].active = false;
					k++;
					if (k !== merged[n].length) merged[n][k].active = true;

					yield newElements(merged.flat(), arrMax);
				}

				while (i < L.length) {
					merged[n][k].val = L[i].val;
					i++;

					merged[n][k].active = false;
					k++;
					if (k !== merged[n].length) merged[n][k].active = true;

					yield newElements(merged.flat(), arrMax);
				}
				while (j < R.length) {
					merged[n][k].val = R[j].val;
					j++;

					merged[n][k].active = false;
					k++;
					if (k !== merged[n].length) merged[n][k].active = true;

					yield newElements(merged.flat(), arrMax);
				}
			}

			n++;
		}
	}

	for (let i = 0; i < merged.flat().length; i++) {
		merged.flat()[i].active = true;
		yield newElements(merged.flat(), arrMax);
	}
}
