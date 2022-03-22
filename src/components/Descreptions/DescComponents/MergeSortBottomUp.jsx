import React from "react";
import CodeComponent from "../CodeComponent";

export default function MergeSortBottomUp() {
	return (
		<>
			<h2>Merge Sort Bottom Up</h2>
			<p>
				<span className="bold">Merge sort</span> is an efficient sorting
				algorithm that falls under the Divide and Conquer paradigm and
				produces a stable sort. It operates by dividing a large array
				into two smaller subarrays and then recursively sorting the
				subarrays.
			</p>
			<p>
				In a recursive approach, the problem is broken down into
				smaller, simple subproblems in a top-down manner until the
				solution becomes trivial.
			</p>
			<p>
				We can also implement merge sort iteratively in a{" "}
				<span className="bold">bottom-up</span> manner. We start by
				sorting all subarrays of <span className="bold">1</span>{" "}
				element; then merge results into subarrays of{" "}
				<span className="bold">2</span> elements, then merge results
				into subarrays of <span className="bold">4</span> elements.
				Likewise, perform successive merges until the array is
				completely sorted.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n log n)
				<br />
				<span className="bold">Auxilary Space:</span> O(n)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> No
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function mergeSortBottomUp(arr) {
    let merged = [];
    for (let one of arr) {
        merged.push([one]);
    }

    while (merged.length !== 1) {
        let n = 0;

        while (n < merged.length) {
            if (n + 1 !== merged.length) {
                let L = merged[n];
                let R = merged[n + 1];
                let combined = JSON.parse(JSON.stringify([...L, ...R]));
                merged = [
                    ...merged.slice(0, n),
                    combined,
                    ...merged.slice(n + 2),
                ];

                let i = 0;
                let j = 0;
                let k = 0;

                merged[n][k].active = true;
                while (i < L.length && j < R.length) {
                    if (L[i] < R[j]) {
                        merged[n][k] = L[i];
                        i++;
                    } else {
                        merged[n][k] = R[j];
                        j++;
                    }
                    k++;

                }

                while (i < L.length) {
                    merged[n][k] = L[i];
                    i++;
                    k++;
                }
                while (j < R.length) {
                    merged[n][k] = R[j];
                    j++;
                    k++;
                }
            }
            n++;
        }
    }
    return merged
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.techiedelight.com/iterative-merge-sort-algorithm-bottom-up/">
					techiedelight
				</a>
			</p>
		</>
	);
}
