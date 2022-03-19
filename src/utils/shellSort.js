import newElements from "./newElements";

export default function* shellSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let gap = arr.length;

	while (gap > 0) {
		let i = 0;
		let j = gap;

		while (j < arr.length) {
			if (arr[i].val > arr[j].val) {
				[arr[i].val, arr[j].val] = [arr[j].val, arr[i].val];

				if (i < arr.length) arr[i].active = true;
				if (j < arr.length) arr[j].active = true;
				yield newElements(arr, arrMax);
				if (i < arr.length) arr[i].active = false;
				if (j < arr.length) arr[j].active = false;
			}

			i++;
			j++;

			let k = i;
			while (k - gap > -1) {
				if (arr[k - gap].val > arr[k].val) {
					[arr[k - gap].val, arr[k].val] = [
						arr[k].val,
						arr[k - gap].val,
					];

					if (k >= 0) arr[k].active = true;
					if (k - gap >= 0) arr[k - gap].active = true;
					yield newElements(arr, arrMax);
					if (k >= 0) arr[k].active = false;
					if (k - gap >= 0) arr[k - gap].active = false;
				}
				k--;
			}
		}

		gap = Math.floor(gap / 2);
	}

	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
