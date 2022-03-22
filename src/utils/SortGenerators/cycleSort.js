import newElements from "../newElements";

export default function* cycleSort(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));
	let n = arr.length;

	for (let cycle_start = 0; cycle_start <= n - 2; cycle_start++) {
		let item = arr[cycle_start];
		let pos = cycle_start;

		for (let i = cycle_start + 1; i < n; i++) {
			if (arr[i].val < item.val) {
				pos++;
			}
		}

		if (pos === cycle_start) {
			continue;
		}

		while (item.val === arr[pos].val) {
			pos++;

			arr[pos].active = true;
			arr[cycle_start].active = true;
			yield newElements(arr, arrMax);
			arr[pos].active = false;
			arr[cycle_start].active = false;
		}

		if (pos !== cycle_start) {
			[arr[pos].val, item.val] = [item.val, arr[pos].val];
		}

		while (pos !== cycle_start) {
			pos = cycle_start;

			for (let i = cycle_start + 1; i < n; i++) {
				if (arr[i].val < item.val) {
					pos++;
					if (pos === cycle_start) {
						break;
					}
					arr[pos].active = true;
					arr[i].active = true;
					yield newElements(arr, arrMax);
					arr[pos].active = false;
					arr[i].active = false;
				}
			}

			if (pos === cycle_start) {
				break;
			}

			while (item.val === arr[pos].val) {
				pos++;

				arr[pos].active = true;
				arr[cycle_start].active = true;
				yield newElements(arr, arrMax);
				arr[pos].active = false;
				arr[cycle_start].active = false;

				if (pos === cycle_start) {
					break;
				}
			}

			if (item.val !== arr[pos].val) {
				[arr[pos].val, item.val] = [item.val, arr[pos].val];
			}

			arr[pos].active = true;
			arr[cycle_start].active = true;
			yield newElements(arr, arrMax);
			arr[pos].active = false;
			arr[cycle_start].active = false;
		}
		arr[pos].active = true;
		arr[cycle_start].active = true;
		yield newElements(arr, arrMax);
		arr[pos].active = false;
		arr[cycle_start].active = false;
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i].active = true;
		yield newElements(arr, arrMax);
	}
}
