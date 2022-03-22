import React from "react";
import CodeComponent from "../CodeComponent";

export default function GnomeSort() {
	return (
		<>
			<h2>Gnome Sort</h2>
			<p>
				<span className="bold">Gnome Sort</span> is based on the concept
				of a Garden Gnome sorting his flower pots. A garden gnome sorts
				the flower pots by the following method-
			</p>
			<ul>
				<li>
					He looks at the flower pot next to him and the previous one;
					if they are in the right order he steps one pot forward,
					otherwise he swaps them and steps one pot backwards.
				</li>
				<li>
					If there is no previous pot (he is at the starting of the
					pot line), he steps forwards; if there is no pot next to him
					(he is at the end of the pot line), he is done.
				</li>
			</ul>
			<h3>Algorithm Steps</h3>
			<ol>
				<li>
					If you are at the start of the array then go to the right
					element (from arr[0] to arr[1]).
				</li>
				<li>
					If the current array element is larger or equal to the
					previous array element then go one step right
				</li>
				<li>
					If the current array element is smaller than the previous
					array element then swap these two elements and go one step
					backwards
				</li>
				<li>
					Repeat steps 2) and 3) till ‘i’ reaches the end of the array
					(i.e- ‘n - 1’)
				</li>
				<li>
					If the end of the array is reached then stop and the array
					is sorted.
				</li>
			</ol>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/3/37/Sorting_gnomesort_anim.gif"
				alt="Gnome Sort"
			/>
			<p>
				<span className="bold">Time Complexity</span> : O(n*n)
				<br />
				<span className="bold">Auxiliary Space</span> : O(1)
				<br />
				<span className="bold">In Place:</span> Yes
				<br />
				<span className="bold">Stable:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function gnomeSort(arr) {
    let n = arr.length;
    let i = 0;

    while (i < n) {
        if (i === 0) {
            i++;
        } else if (arr[i] >= arr[i - 1]) {
            i++;
        } else {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        }
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.geeksforgeeks.org/gnome-sort-a-stupid-one/">
					GeeksforGeeks
				</a>
			</p>
		</>
	);
}
