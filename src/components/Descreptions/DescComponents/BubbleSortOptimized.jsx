import React from "react";
import CodeComponent from "../CodeComponent";

export default function BubbleSortOptimized() {
	return (
		<>
			<h2 id="bubble-sort-optimized">Bubble Sort Optimized</h2>
			<p>
				In normal <span className="bold">BubbleSort</span>, all the
				comparisons are made even if the array is already sorted.
			</p>
			<p>This increases the execution time.</p>
			<p>
				To solve this, we can introduce an extra variable &#39;
				<em>swapped</em>&#39;. The value of &#39;<em>swapped</em>&#39;
				is set true if there occurs swapping of elements. Otherwise, it
				is set <span className="bold">false</span>.
			</p>
			<p>
				After an iteration, if there is no swapping, the value of &#39;
				<em>swapped</em>&#39; will be{" "}
				<span className="bold">false</span>. This means elements are
				already sorted and there is no need to perform further
				iterations.
			</p>
			<p>
				We can optimize <span className="bold">BubbleSort</span>{" "}
				further, by shortening each inner loop&#39;s instance by one,
				since we know that with each instance the greatest element will
				be placed in its correct position at the end.
			</p>
			<p>
				This will reduce the execution time and helps to optimize the
				bubble sort.
			</p>
			<p>
				<span className="bold">Time Complexity: </span>
				O(n*n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(1)
				<br />
				<span className="bold">In Place:</span> Yes
				<br />
				<span className="bold">Stable:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function bubbleSortOptimized(arr) {
    let i = 0;

    while (i < arr.length) {
        let wasSwapped = false;
        let j = 0;
        while (j < arr.length - 1 - i) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwapped = true;
            }
            j++;
        }
        i++;

        if (!wasSwapped) {
            break;
        }
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.programiz.com/dsa/bubble-sort">
					Programiz
				</a>
			</p>
		</>
	);
}
