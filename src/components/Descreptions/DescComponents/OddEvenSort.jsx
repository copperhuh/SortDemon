import React from "react";
import CodeComponent from "../CodeComponent";

export default function OddEvenSort() {
	return (
		<>
			<h2>Odd Even Sort</h2>
			<p>
				An <span className="bold">Odd Even Sort</span> or brick sort is
				a simple sorting algorithm, which is developed for use on
				parallel processors with local interconnection.{" "}
			</p>
			<p>
				This algorithm is divided into two phases - Odd and Even Phase.
				The algorithm runs until the array elements are sorted and in
				each iteration two phases occurs - Odd and Even Phases.{" "}
			</p>
			<p>
				In the odd phase, we perform a bubble sort on odd indexed
				elements and in the even phase, we perform a bubble sort on even
				indexed elements.
			</p>
			<img
				src="https://i.stack.imgur.com/LZJKu.jpg"
				alt="Odd Even Sort"
			/>
			<p>
				<span className="bold">Time Complexity</span> : O(n*n)
				<br />
				<span className="bold">Auxiliary Space</span> : O(1)
				<br />
				<span className="bold">In Place:</span> Yes
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function oddEvenSort(arr) {
    let n = arr.length;
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (let i = 1; i <= n - 2; i = i + 2) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }

        for (let i = 0; i <= n - 2; i = i + 2) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.geeksforgeeks.org/odd-even-sort-brick-sort/">
					GeeksforGeeks
				</a>
				,{" "}
				<a href="https://riptutorial.com/algorithm/example/24482/odd-even-sort-basic-information">
					RIP Tutorial
				</a>
			</p>
		</>
	);
}
