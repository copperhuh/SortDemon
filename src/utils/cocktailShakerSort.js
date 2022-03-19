import newElements from "./newElements";

export default function* cocktailShakerSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));

	let swapped = true;
	let start = 0;
	let end = arr.length;

	arr[start].active = true;
	arr[end - 1].active = true;
	yield newElements(arr, arrMax);

	while (swapped === true) {
		swapped = false;

		for (let i = start; i < end - 1; ++i) {
			if (arr[i].val > arr[i + 1].val) {
				[arr[i].val, arr[i + 1].val] = [arr[i + 1].val, arr[i].val];

				swapped = true;
			}

			if (i !== end - 1 && i !== start) arr[i].active = true;
			if (i + 1 !== end - 1 && i + 1 !== start) arr[i + 1].active = true;
			yield newElements(arr, arrMax);
			if (i !== end - 1 && i !== start) arr[i].active = false;
			if (i + 1 !== end - 1 && i + 1 !== start) arr[i + 1].active = false;
		}

		if (swapped === false) break;

		swapped = false;

		if (end !== arr.length) arr[end - 1].active = false;
		end = end - 1;
		if (end !== arr.length) arr[end - 1].active = true;
		yield newElements(arr, arrMax);

		for (let i = end - 1; i >= start; i--) {
			if (arr[i].val > arr[i + 1].val) {
				[arr[i].val, arr[i + 1].val] = [arr[i + 1].val, arr[i].val];

				swapped = true;
			}

			if (i !== end - 1 && i !== start) arr[i].active = true;
			if (i + 1 !== end - 1 && i + 1 !== start) arr[i + 1].active = true;
			yield newElements(arr, arrMax);
			if (i !== end - 1 && i !== start) arr[i].active = false;
			if (i + 1 !== end - 1 && i + 1 !== start) arr[i + 1].active = false;
		}

		arr[start].active = false;
		start = start + 1;
		arr[start].active = true;
		yield newElements(arr, arrMax);
	}

	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })),
		arrMax
	);
}
