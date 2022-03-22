import React from "react";
import CodeComponent from "../CodeComponent";

export default function SelectionSort() {
	return (
		<>
			<h2>Selection Sort</h2>
			<p>
				Selection sort is a sorting algorithm that divides the input
				list into two parts: a sorted sublist of items which is built up
				from left to right at the front (left) of the list and a sublist
				of the remaining unsorted items that occupy the rest of the
				list. Initially, the sorted sublist is empty and the unsorted
				sublist is the entire input list. The algorithm proceeds by
				finding the smallest (or largest, depending on sorting order)
				element in the unsorted sublist, exchanging (swapping) it with
				the leftmost unsorted element (putting it in sorted order), and
				moving the sublist boundaries one element to the right.
			</p>
			<h3 id="working-of-selection-sort">Algorithm</h3>
			<ol>
				<li>
					<p>
						Set the first element as <code>minimum</code>.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/w1ZKsO2Obaw1WV03_lamX22SVyapwhbiKoLkT5Raiiw/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0-initial-array.png"
							alt="Selection Sort Steps"
							title="New Array Initialized"
						/>
					</p>
				</li>
				<li>
					<p>
						Compare <code>minimum</code> with the second element. If
						the second element is smaller than <code>minimum</code>,
						assign the second element as <code>minimum</code>.<br />
						Compare <code>minimum</code> with the third element.
						Again, if the third element is smaller, then assign{" "}
						<code>minimum</code> to the third element otherwise do
						nothing. The process goes on until the last element.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/9jjqXX0fGtJE2ul2Mga20fvf_GkNlFAFsDMwrrwFzbQ/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0-comparision.png"
							alt="Selection Sort Steps"
							title="comparison"
						/>
					</p>
				</li>
				<li>
					<p>
						After each iteration, <code>minimum</code> is placed in
						the front of the unsorted list.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/6o-qergdHNq6D7eBxBi87yIuCLc7MJy2BHR4QHeNxxQ/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0-swapping.png"
							alt="Selection Sort Steps"
							title="swapping"
						/>
					</p>
				</li>
				<li>
					<p>
						For each iteration, indexing starts from the first
						unsorted element. Step 1 to 3 are repeated until all the
						elements are placed at their correct positions.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/VPGtdVYag2vfHBotOaFEiYLqvWAD_Jwfnwur_AtKQHo/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0.png"
							alt="Selection Sort Steps"
							title="Selection Sort Step 0"
						/>
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/hgxXpCSrHui7tbyJUQNnh8N5l8MPbdbL6dlstS4-G3M/mtime:1582112622/sites/tutorial2program/files/Selection-sort-1.png"
							alt="Selection sort steps"
							title="Selection sort steps 1"
						/>
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/mDT4W_wUoS9eYT1JoUWjZuh4XBVXGDuiV9cr4Rylggk/mtime:1582112622/sites/tutorial2program/files/Selection-sort-2.png"
							alt="Selection sort steps"
							title="Selection sort steps 2"
						/>
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/dsZIa58W_SRP0yB21QmrWGQvrmob8yAVa94iCtIPWoo/mtime:1582112622/sites/tutorial2program/files/Selection-sort-3_1.png"
							alt="Selection sort steps"
							title="Selection sort steps 3"
						/>
					</p>
				</li>
			</ol>
			<p>
				<span className="bold">Time Complexity:</span> O(n*n)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function selectionSort(arr) {
    let i = 0;

    while (i < arr.length) {
        let j = i + 1;
        let min = i;

        while (j < arr.length) {
            
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];

        i++;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.programiz.com/dsa/selection-sort">
					Programiz
				</a>
			</p>
		</>
	);
}
