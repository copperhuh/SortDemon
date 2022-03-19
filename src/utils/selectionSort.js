import newElements from "./newElements";

export default function* selectionSort(items, maxArr) {
	let i = 0;
	let j = 0;
	let arr = JSON.parse(JSON.stringify(items));

	while (i < arr.length) {
		j = i + 1;
		let min = i;

		arr[i].active = true;
		if (i + 1 !== arr.length) arr[j].active = true;
		arr[min].active = true;

		while (j < arr.length) {
			if (arr[min].val > arr[j].val) {
				if (min !== i && min !== j) arr[min].active = false;
				min = j;
				arr[min].active = true;
			}

			if (j !== i && j !== min) arr[j].active = false;
			j++;
			if (j !== arr.length) arr[j].active = true;

			yield newElements(arr, maxArr);
		}

		[arr[i].val, arr[min].val] = [arr[min].val, arr[i].val];

		arr[min].active = false;
		arr[i].active = false;
		i++;
		if (i !== arr.length) arr[i].active = true;

		yield newElements(arr, maxArr);
	}
	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		maxArr
	);
}
