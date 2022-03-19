import newElements from "./newElements";

export default function* gnomeSortOptimized(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;

	let i = 1;
	let j = 0;
	while (i < n) {
		if (arr[i].val >= arr[i - 1].val) {
			if (j !== 0) {
				i = j;
				j = 0;
			}
			i++;
		} else {
			[arr[i].val, arr[i - 1].val] = [arr[i - 1].val, arr[i].val];
			if (i > 1) {
				if (j === 0) {
					j = i;
				}
				i--;
			} else {
				i++;
			}
		}
		if (i !== n) arr[i].active = true;
		if (i !== 0) arr[i - 1].active = true;
		yield newElements(arr, arrMax);
		if (i !== n) arr[i].active = false;
		if (i !== 0) arr[i - 1].active = false;
	}
	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
