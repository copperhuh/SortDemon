import React from "react";
import CodeComponent from "../CodeComponent";

export default function DoubleSelectionSort() {
	return (
		<>
			<h2>Double Selection Sort</h2>
			<p>
				<span className="bold">Selection Sort</span> is not known to be
				a good algorithm because it is an in-place comparison sort based
				sorting algorithm. However, efforts have been made to improve
				the performance of the algorithm particularly where auxiliary
				memory is limited. With{" "}
				<span className="bold">Double Selection Sort</span>, the average
				number of comparisons is slightly reduced.
			</p>
			<p>
				The <span className="bold">double selection</span> sort starts
				from <span className="bold">two elements</span> and searches the
				entire list until it finds the{" "}
				<span className="bold">minimum</span> value and{" "}
				<span className="bold">maximum</span> value. The sort places the
				minimum value in the <span className="bold">first place</span>{" "}
				and maximum value in the{" "}
				<span className="bold">last place</span>, selects the second and
				second last element and searches for the second smallest and
				largest element. This process continues until the complete list
				is sorted. In other words, a take on an elementary sorting
				algorithm that is designed to minimize the number of exchanges
				that are performed. It works by making N-1 passes over the
				shrinking unsorted portion of the array, each time selecting the
				smallest and largest value. Those values are then moved into
				their final sorted position with one exchange a piece
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
				code={`function doubleSelectionSort(arr) {
    let n = arr.length;
    let l = 0;
    let r = n - 1;
    while (l <= r) {
        let min = l;

        for (let i = l + 1; i <= r; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
        if (min !== l) {
            [arr[l], arr[min]] = [arr[min], arr[l]];
        }

        l++;
        let max = r;

        for (let j = r - 1; j >= l; j--) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        if (max !== r) {
            [arr[max], arr[r]] = [arr[r], arr[max]];
        }
        r--;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.ijaiem.org/Volume2Issue5/IJAIEM-2013-05-31-098.pdf">
					Improving the performance of selection sort using a modified
					double-ended selection sorting
				</a>
			</p>
		</>
	);
}
