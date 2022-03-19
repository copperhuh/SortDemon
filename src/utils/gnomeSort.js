import newElements from "./newElements";

export default function* gnomeSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;

	let i = 0;

	while (i < n) {
		if (i === 0) {
			i++;
		} else if (arr[i].val >= arr[i - 1].val) {
			i++;
		} else {
			[arr[i].val, arr[i - 1].val] = [arr[i - 1].val, arr[i].val];
			i--;
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
