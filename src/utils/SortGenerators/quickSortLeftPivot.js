import newElements from "../newElements";

export default function* quickSortLeftPivot(items, arrMax) {
	let arr = JSON.parse(JSON.stringify(items));

	let changes = [];

	function sortQ(arr, l, r) {
		if (l < r) {
			let pivot = arr[l];
			let i = l;
			let j = r;
			while (i < j) {
				i++;
				while (i <= r && arr[i].val < pivot.val) {
					i++;
					if (i < arr.length && i >= 0) arr[i].active = true;
					arr[j].active = true;
					changes.push(JSON.parse(JSON.stringify(arr)));
					if (i < arr.length && i >= 0) arr[i].active = false;
					arr[j].active = false;
				}
				while (j >= l && arr[j].val > pivot.val) {
					j--;
					if (i < arr.length && i >= 0) arr[i].active = true;
					arr[j].active = true;
					changes.push(JSON.parse(JSON.stringify(arr)));
					if (i < arr.length && i >= 0) arr[i].active = false;
					arr[j].active = false;
				}
				if (i <= r && i < j) {
					[arr[i].val, arr[j].val] = [arr[j].val, arr[i].val];
				}
				if (i < arr.length && i >= 0) arr[i].active = true;
				arr[j].active = true;
				changes.push(JSON.parse(JSON.stringify(arr)));
				if (i < arr.length && i >= 0) arr[i].active = false;
				arr[j].active = false;
			}
			[arr[l].val, arr[j].val] = [arr[j].val, arr[l].val];

			arr[l].active = true;
			arr[j].active = true;
			changes.push(JSON.parse(JSON.stringify(arr)));
			arr[l].active = false;
			arr[j].active = false;

			sortQ(arr, l, j - 1);
			sortQ(arr, j + 1, r);
		}
	}

	sortQ(arr, 0, arr.length - 1);

	for (let each of changes) {
		yield newElements(each, arrMax);
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i].active = true;
		yield newElements(arr, arrMax);
	}
}
