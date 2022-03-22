import React from "react";
import CodeComponent from "../CodeComponent";

export default function PancakeSort() {
	return (
		<>
			<h2>Pancake Sort</h2>
			<p>
				<span className="bold">Pancake sort</span> is a sorting
				algorithm in which the only allowed operation is to{" "}
				<span className="bold">&quot;flip&quot;</span> one end of the
				list. Pancake sort is called so because it resembles sorting
				pancakes on a plate with a spatula, where you can only use the
				spatula to flip some of the top pancakes in the plate.
			</p>
			<p>
				Unlike traditional sorting algorithms, which attempt to sort
				with the fewest comparisons, pancake sort tries to sort the
				sequence in as few reversals as possible.
			</p>
			<p>
				The idea behind pancake sort is similar to Selection Sort. In
				every iteration, we find the maximum element in the sequence and
				place it at the end, and reduce the size of the sequence by one.
			</p>
			<p>Given an array of integers Arr:</p>
			<ul>
				<li>
					Write a function flip(Arr, i) that reverses the order of the
					first i elements in the array arr.
				</li>
				<li>
					Write a function pancakeSort(Arr) that sorts and returns the
					input array. You are allowed to use only the function flip
					in order to make changes in the array.
				</li>
			</ul>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				Let the given array be Arr[] and size of the array be
				&#39;n&#39;
			</p>
			<ul>
				<li>
					Start from the current size &#39;n&#39; and reduce the
					current size by one while it is greater than one. Let the
					current size be c. Do the following for every &#39;c&#39;.
					<ol>
						<li>
							Find the index &#39;i&#39; of the maximum element in
							Arr[0....c-1].
						</li>
						<li>Call flip(Arr,i)</li>
						<li>Call flip(Arr,c-1)</li>
					</ol>
				</li>
			</ul>
			<h3 id="example">Example</h3>
			<p>
				<img
					src="https://iq.opengenus.org/content/images/2020/07/pancake_Sort.png"
					alt="pancake_Sort"
				/>
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n flips)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function pancakeSort(arr, n) {
    for (let curr_size = n; curr_size > 1; --curr_size) {
        let mi = findMax(arr, curr_size);

        if (mi !== curr_size - 1) {
            flip(arr, mi);

            flip(arr, curr_size - 1);
        }
    }
}

function flip(arr, i) {
    let start = 0;
    while (start < i) {
        [arr[start], arr[i]] = [arr[i], arr[start]];

        start++;
        i--;
    }
}

function findMax(arr, n) {
    let mi, i;
    for (mi = 0, i = 0; i < n; ++i) {
        if (arr[i] > arr[mi]) {
            mi = i;
        }
    }

    return mi;
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://iq.opengenus.org/pancake-sort/">OpenGenus</a>
			</p>
		</>
	);
}
