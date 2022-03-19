import newElements from "./newElements";

export default function* pairwiseSortingNetwork(items, arrMax) {
	let base = JSON.parse(JSON.stringify(items));
	let arr = JSON.parse(JSON.stringify(base));

	let n = arr.length;
	// let goal = 1
	// while (Math.pow(2,goal) < arr.length){
	//     goal++
	// }

	// let localMax = Math.pow(2,goal)
	// for (let i = 1; i <= localMax - 1; i++){
	//     if(arr.length <= i){
	//         arr.push({val: i, active: false})
	//     }
	// }
	// let n = localMax
	let changes = [];

	let a = 1;
	while (a < n) {
		let b = a;
		let c = 0;
		while (b < n) {
			// Compare and sort elements with indices (b - a) and (b)
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

	a = Math.floor(a / 4); // Note: all integer divisions hereon automatically truncate the fractional part
	let e = 1;
	while (a > 0) {
		let d = e;
		while (d > 0) {
			let b = (d + 1) * a;
			let c = 0;
			while (b < n) {
				// Compare and sort elements with indices (b - d*a) and (b)
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

	yield newElements(
		arr.map((el) => ({ val: el.val, active: true })).slice(0, base.length),
		arrMax
	);
}
