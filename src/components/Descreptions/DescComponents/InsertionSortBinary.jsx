import React from "react";
import CodeComponent from "../CodeComponent";

export default function InsertionSortBinary() {
	return (
		<>
			<h2>Insertion Sort Binary</h2>
			<p>
				In a simple <span className="bold">insertion sort</span>{" "}
				algorithm, we maintain a sorted and an unsorted subarray of the
				given array. In each iteration, one value from the unsorted part
				is picked and is inserted in its correct position in the sorted
				part. To achieve this, for every element, we iterate over the
				sorted part of the array to find the position to insert the
				element.
			</p>
			<p>
				<span className="bold">Binary insertion sort</span> is a sorting
				algorithm similar to insertion sort, but instead of using linear
				search to find the position where the element should be
				inserted, we use <span className="bold">binary search</span>.
				Thus, we <span className="bold">reduce</span> the number of
				comparisons for inserting one element{" "}
				<span className="bold">from O(N) to O(log N)</span>.{" "}
			</p>
			<p>
				We first use binary search on the sorted subarray to find the
				position of the element that is{" "}
				<span className="bold">just greater than our key</span>. Let’s
				call this position “pos.” We then right shift all elements from
				position pos to i-1 and then make Array[pos] = key.{" "}
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n*n)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function insertionSortBinary(arr) {
    for (let i = 1; i < arr.length; i++) {
        let x = arr[i];
        let j = binarySearch(arr, x, 0, i - 1);

        arr = [
            ...arr.slice(0, j), 
            x, 
            ...arr.slice(j, i), 
            ...arr.slice(i + 1)
        ];
    }
}

function binarySearch(arr, item, low, high) {
    if (high <= low) {
        return item > arr[low] ? low + 1 : low;
    }

    let mid = Math.floor((low + high) / 2);

    if (item === arr[mid]) {
        return mid + 1;
    }

    if (item > arr[mid]) {
        return binarySearch(arr, item, mid + 1, high);
    }

    return binarySearch(arr, item, low, mid - 1);
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.interviewkickstart.com/learn/binary-insertion-sort">
					interviewkickstart
				</a>
			</p>
		</>
	);
}
