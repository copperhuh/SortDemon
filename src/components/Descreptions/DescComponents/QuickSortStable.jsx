import React from "react";
import CodeComponent from "../CodeComponent";

export default function QuickSortStable() {
	return (
		<>
			<h2>Quick Sort Stable</h2>
			<p>
				Normal <span className="bold">QuickSort</span> is an unstable
				algorithm because we do swapping of elements according to
				pivot’s position (without considering their original positions).{" "}
			</p>
			<p>
				Quicksort can be stable but it typically isn’t implemented that
				way. Making it stable either requires order N storage (as in a
				naive implementation) or a bit of extra logic for an in-place
				version.
				<br />
				In below implementation, we use extra space. The idea is to make
				two separate lists:{" "}
			</p>
			<ol>
				<li>First list contains items smaller than pivot. </li>
				<li>Second list contains items greater than pivot.</li>
			</ol>
			<p>
				<span className="bold">Time Complexity:</span> O(n log n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(n)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> No
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function quickSortStable(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        let pivot = arr[mid];

        let smaller = [];
        let greater = [];

        for (let i = 0; i < arr.length; i++) {
            if (i !== mid) {
                if (arr[i] < pivot) {
                    smaller.push(arr[i]);
                } else if (arr[i] > pivot) {
                    greater.push(arr[i]);
                } else {
                    if (i < mid) {
                        smaller.push(arr[i]);
                    } else {
                        greater.push(arr[i]);
                    }
                }
            }
        }
        return [
            ...quickSortStable(smaller),
            pivot,
            ...quickSortStable(greater),
        ];
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.geeksforgeeks.org/stable-quicksort/">
					GeeksforGeeks
				</a>
			</p>
		</>
	);
}
