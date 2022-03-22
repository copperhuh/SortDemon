import React from "react";
import CodeComponent from "../CodeComponent";

export default function MergeSort() {
	return (
		<>
			<h2>Merge Sort</h2>
			<p>
				<span className="bold">Merge sort</span> is similar to the quick
				sort algorithm as it uses the{" "}
				<span className="bold">divide and conquer</span> approach to
				sort the elements. It is one of the{" "}
				<span className="bold">most popular</span> and efficient sorting
				algorithm. It divides the given list into{" "}
				<span className="bold">two equal halves</span>, calls itself for
				the two halves and then merges the two sorted halves.{" "}
			</p>
			<p>
				The sub-lists are{" "}
				<span className="bold">divided again and again</span> into
				halves until the list cannot be divided further. Then we combine
				the pair of <span className="bold">one element lists</span> into
				two-element lists, sorting them in the process. The sorted
				two-element pairs are merged into the four-element lists, and so
				on until we get the sorted list.
			</p>
			<h3 id="example">Example</h3>
			<p>Let the elements of array are -</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/merge-sort.png"
					alt="Merge sort"
				/>
			</p>
			<p>
				According to the merge sort, first divide the given array into
				two equal halves. Merge sort keeps dividing the list into equal
				parts until it cannot be further divided.
			</p>
			<p>
				As there are eight elements in the given array, so it is divided
				into two arrays of size 4.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/merge-sort2.png"
					alt="Merge sort"
				/>
			</p>
			<p>
				Now, again divide these two arrays into halves. As they are of
				size 4, so divide them into new arrays of size 2.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/merge-sort3.png"
					alt="Merge sort"
				/>
			</p>
			<p>
				Now, again divide these arrays to get the atomic value that
				cannot be further divided.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/merge-sort4.png"
					alt="Merge sort"
				/>
			</p>
			<p>Now, combine them in the same manner they were broken.</p>
			<p>
				In combining, first compare the element of each array and then
				combine them into another array in sorted order.
			</p>
			<p>
				So, first compare 12 and 31, both are in sorted positions. Then
				compare 25 and 8, and in the list of two values, put 8 first
				followed by 25. Then compare 32 and 17, sort them and put 17
				first followed by 32. After that, compare 40 and 42, and place
				them sequentially.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/merge-sort5.png"
					alt="Merge sort"
				/>
			</p>
			<p>
				In the next iteration of combining, now compare the arrays with
				two data values and merge them into an array of found values in
				sorted order.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/merge-sort6.png"
					alt="Merge sort"
				/>
			</p>
			<p>
				Now, there is a final merging of the arrays. After the final
				merging of above arrays, the array will look like -
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/merge-sort7.png"
					alt="Merge sort"
				/>
			</p>
			<p>Now, the array is completely sorted.</p>
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
				code={`function mergeSort(array) {
    if (array.length > 1) {
        let mid = Math.floor(array.length / 2);
        let L = array.slice(0, mid);
        let R = array.slice(mid);
        mergeSort(L);
        mergeSort(R);

        let i = 0;
        let j = 0;
        let k = 0;
        while (i < L.length && j < R.length) {
            if (L[i] < R[j]) {
                array[k] = L[i];
                i++;
            } else {
                array[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < L.length) {
            array[k] = L[i];
            i++;
            k++;
        }
        while (j < R.length) {
            array[k] = R[j];
            j++;
            k++;
        }
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.javatpoint.com/merge-sort">javatpoint</a>
			</p>
		</>
	);
}
