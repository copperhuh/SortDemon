import React from "react";
import CodeComponent from "../CodeComponent";

export default function BubbleBogoSort() {
	return (
		<>
			<h2>Bubble Bogo Sort</h2>
			<p>
				<span className="bold">Bubble bogo sort</span> is a version of{" "}
				<span className="bold">Bubble sort</span> in which you{" "}
				<span className="bold">randomly</span> choose two elements from
				the array, compare them and then switch them if needed.
			</p>
			<span className="bold">
				Note: The visualization of this algorithm may seem quite fast,
				but that's only because it doesn't show iterations, in which the
				two compared elements are not switched (which is especially
				common in the latter portion of the runtime)
			</span>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function bubbleBogoSort(arr) {
    let n = arr.length;

    const isSorted = () => {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    };

    while (!isSorted()) {
        let rand1 = Math.floor(Math.random() * n);
        let rand2 = Math.floor(Math.random() * n);

        if (rand1 > rand2) {
            [rand1, rand2] = [rand2, rand1];
        }

        if (arr[rand1] > arr[rand2]) {
            [arr[rand1], arr[rand2]] = [arr[rand2], arr[rand1]];
        }
    }
}`}
			/>
		</>
	);
}
