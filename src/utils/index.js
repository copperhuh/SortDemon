export const getShuffledArr = (size, sortType) => {
	let res = [];
	let nums = [];

	if (sortType === "few-unique") {
		const step = Math.ceil(Math.min(size, 60) / 10) + 1;
		let base = [...Array(step + 1).keys()].slice(1);
		nums = [];

		while (nums.length < size) {
			nums.push(...base);
		}

		nums = nums.slice(0, size + 1);
	}

	if (
		sortType === "random" ||
		sortType === "reverse" ||
		sortType === "nearly-sorted"
	) {
		nums = [...Array(size + 1).keys()].slice(1);

		if (sortType === "reverse") {
			nums.reverse();
			return zipWithActive(nums);
		}

		if (size > 2 && sortType === "nearly-sorted") {
			const firstInx = Math.floor(Math.random() * size);
			let secondInx = Math.floor(Math.random() * size);
			while (firstInx === secondInx) {
				secondInx = Math.floor(Math.random() * size);
			}

			const firstVal = nums[firstInx];
			const secondVal = nums[secondInx];

			nums[firstInx] = secondVal;
			nums[secondInx] = firstVal;

			return zipWithActive(nums);
		}
	}

	for (let i = 0; i < size; i++) {
		let random = Math.floor(Math.random() * nums.length);
		res.push(nums[random]);
		nums = [
			...nums.slice(0, random),
			...nums.slice(random + 1, nums.length),
		];
	}

	return zipWithActive(res);
};

const zipWithActive = (arr) => {
	let res = [];
	for (let each of arr) {
		res.push({ val: each, active: false });
	}

	return { items: res, arrMax: Math.max(...arr) };
};

export const deCamelCase = (text) => {
	if (text === "RadixSortLSD") return "Radix Sort LSD";
	const result = text.replace(/([A-Z])/g, " $1");
	return result.charAt(0).toUpperCase() + result.slice(1);
};
