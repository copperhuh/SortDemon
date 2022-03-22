import React from "react";
import CodeComponent from "../CodeComponent";

export default function CountingSort() {
	return (
		<>
			<h2>Counting Sort</h2>
			<p>
				<span className="bold">Counting sort</span> is a sorting
				technique that is based on the keys between specific ranges.
				This sorting technique doesn&#39;t perform sorting by comparing
				elements. It performs sorting{" "}
				<span className="bold">by counting objects</span> having
				distinct key values like hashing. After that, it performs some
				arithmetic operations to calculate each object&#39;s index
				position in the output sequence. Counting sort is{" "}
				<span className="bold">not used</span> as a general-purpose
				sorting algorithm.
			</p>
			<p>
				Counting sort is effective when range is not greater than number
				of objects to be sorted.
			</p>
			<h2 id="example">Example:</h2>
			<p>Let the elements of array are -</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort.png"
					alt="Counting Sort"
				/>
			</p>
			<ol>
				<li>
					Find the maximum element from the given array. Let{" "}
					<span className="bold">max</span> be the maximum element.
				</li>
			</ol>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort2.png"
					alt="Counting Sort"
				/>
			</p>
			<ol start="2">
				<li>
					Now, initialize array of length{" "}
					<span className="bold">max + 1</span> having all 0 elements.
					This array will be used to store the count of the elements
					in the given array.
				</li>
			</ol>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort3.png"
					alt="Counting Sort"
				/>
			</p>
			<ol start="3">
				<li>
					Now, we have to store the count of each array element at
					their corresponding index in the count array.
				</li>
			</ol>
			<p>
				The count of an element will be stored as - Suppose array
				element &#39;4&#39; is appeared two times, so the count of
				element 4 is 2. Hence, 2 is stored at the 4th position of the
				count array. If any element is not present in the array, place
				0, i.e. suppose element &#39;3&#39; is not present in the array,
				so, 0 will be stored at 3rd position.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort4.png"
					alt="Counting Sort"
				/>
				<br />
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort5.png"
					alt="Counting Sort"
				/>
			</p>
			<p>
				Now, store the cumulative sum of{" "}
				<span className="bold">count</span> array elements. It will help
				to place the elements at the correct index of the sorted array.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort6.png"
					alt="Counting Sort"
				/>
				<br />
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort7.png"
					alt="Counting Sort"
				/>
			</p>
			<p>Similarly, the cumulative count of the count array is -</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort8.png"
					alt="Counting Sort"
				/>
			</p>
			<ol start="4">
				<li>
					Now, find the index of each element of the original array
				</li>
			</ol>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort9.png"
					alt="Counting Sort"
				/>
			</p>
			<p>
				After placing element at its place, decrease its count by one.
				Before placing element 2, its count was 2, but after placing it
				at its correct position, the new count for element 2 is 1.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort10.png"
					alt="Counting Sort"
				/>
			</p>
			<p>Similarly, after sorting, the array elements are -</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/counting-sort11.png"
					alt="Counting Sort"
				/>
			</p>
			<p>Now, the array is completely sorted.</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n)
				<br />
				<span className="bold">Auxilary Space:</span> O(n)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> No
			</p>
			<h3 id="implementation">Implementation</h3>
			<span className="bold">
				Note that this algorithm is specifically made for sorting
				natural numbers
			</span>
			<CodeComponent
				code={`function countingSort(arr, max) {
    let n = arr.length;

    let count = Array.from({ length: max }, (_, i) => 0);
    for (let i = 0; i < n; ++i) {
        count[arr[i] - 1]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = 0; i < n; i++) {
        let num;
        for (let j = 0; j < count.length; j++) {
            if (count[j] > i) {
                num = j + 1;
                break;
            }
        }
        arr[i] = num;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.javatpoint.com/counting-sort">
					javatpoint
				</a>
			</p>
		</>
	);
}
