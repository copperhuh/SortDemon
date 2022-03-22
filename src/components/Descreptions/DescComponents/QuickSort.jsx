import React from "react";
import CodeComponent from "../CodeComponent";

export default function QuickSort() {
	return (
		<>
			<h2 id="quick-sort">Quick Sort</h2>
			<p>
				QuickSort is a <span className="bold">Divide and Conquer</span>{" "}
				algorithm. It picks an element as pivot and partitions the given
				array around the picked pivot. There are many different versions
				of quickSort that pick pivot in different ways.
			</p>
			<ol>
				<li>Always pick first element as pivot.</li>
				<li>Always pick last element as pivot (implemented below)</li>
				<li>Pick a random element as pivot.</li>
			</ol>
			<p>
				In the <span className="bold">Implementation</span> section,
				there will be a different algorithm for each pivot placement.
			</p>
			<h3>Algorithm</h3>
			<ol>
				<li>
					An array is divided into subarrays by selecting a{" "}
					<span className="bold">pivot element</span> (element
					selected from the array).
					<br />
					While dividing the array, the pivot element should be
					positioned in such a way that elements less than pivot are
					kept on the left side and elements greater than pivot are on
					the right side of the pivot.
				</li>
				<li>
					The left and right subarrays are also divided using the same
					approach. This process continues until each subarray
					contains a single element.
				</li>
				<li>
					At this point, elements are already sorted. Finally,
					elements are combined to form a sorted array.
				</li>
			</ol>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sorting_quicksort_anim.gif/220px-Sorting_quicksort_anim.gif"
				alt="quick sort animation"
			/>
			<h3>Working of Quicksort Algorithm</h3>
			<p>
				<span className="bold">1. Select the Pivot Element</span>
			</p>
			<p>
				There are different variations of quicksort where the pivot
				element is selected from different positions. Here, we will be
				selecting the rightmost element of the array as the pivot
				element.{" "}
			</p>
			<img
				src="https://cdn.programiz.com/cdn/farfuture/7qpYqe1UtqYbKzIBY_W8ljqkUz9iS6jZGobim6LDhtM/mtime:1582112622/sites/tutorial2program/files/quick-sort-0.1_0.png"
				alt="Quick Sort Steps"
				title="Selection of rightmost element"
			/>
			<p>
				<span className="bold">2. Rearrange the Array</span>
			</p>
			<p>
				Now the elements of the array are rearranged so that elements
				that are smaller than the pivot are put on the left and the
				elements greater than the pivot are put on the right.
			</p>
			<img
				src="https://cdn.programiz.com/cdn/farfuture/1Xn_e4xeHQjOsXExVhTgVbggPgpMk9WV4Z8gxmZgdyg/mtime:1582112622/sites/tutorial2program/files/quick-sort-0.2_0.png"
				alt="Quick Sort Steps"
				title="pivoting"
			/>
			<p>Here&#39;s how we rearrange the array:</p>
			<ol>
				<li>
					<p>
						A pointer is fixed at the pivot element. The pivot
						element is compared with the elements beginning from the
						first index.
					</p>
				</li>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/zaN86RZ0WfV0PhWpWDhis-f9lWlfgKJt_liYoGjZAIk/mtime:1617189498/sites/tutorial2program/files/quick-sort-partition-first-step.png"
					alt="Quick Sort Steps"
					title="Quick Sort Steps"
				/>
				<li>
					<p>
						If the element is greater than the pivot element, a
						second pointer is set for that element.
					</p>
				</li>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/RzFeResnC88JRu9IFh2YqUKZMXltQ51EeiioINCMcEA/mtime:1617189487/sites/tutorial2program/files/quick-sort-partition-second-step.png"
					alt="Quick Sort Steps"
					title="Quick Sort Steps"
				/>
				<li>
					<p>
						Now, pivot is compared with other elements. If an
						element smaller than the pivot element is reached, the
						smaller element is swapped with the greater element
						found earlier.
					</p>
				</li>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/QA-TsXFkcz3cNyJikcbIWxepFVDu8ntl220KzlG8zdw/mtime:1617189492/sites/tutorial2program/files/quick-sort-partition-third-step.png"
					alt="Quick Sort Steps"
					title="Quick Sort Steps"
				/>
				<li>
					<p>
						Again, the process is repeated to set the next greater
						element as the second pointer. And, swap it with another
						smaller element.
					</p>
				</li>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/tMmdAbX5gev9K20XI1kzQ3n932vSjnN1MszZouHV7Yc/mtime:1617189469/sites/tutorial2program/files/quick-sort-partition-fourth-step.png"
					alt="Quick Sort Steps"
					title="Quick Sort Steps"
				/>
				<li>
					<p>
						The process goes on until the second last element is
						reached.
					</p>
				</li>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/MNYV977xf4N3cgCpAtkB1KDyPqyG9OvlKSkHSdd0kys/mtime:1617189475/sites/tutorial2program/files/quick-sort-partition-fifth-step.png"
					alt="Quick Sort Steps"
					title="Quick Sort Steps"
				/>
				<li>
					<p>
						Finally, the pivot element is swapped with the second
						pointer.
					</p>
				</li>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/lAMcHRRzL8TJEh7bjY3rAufTTy3y5-o4Nt0z5L1AB8A/mtime:1617189481/sites/tutorial2program/files/quick-sort-partition-sixth-step.png"
					alt="Quick Sort Steps"
					title="Quick Sort Steps"
				/>
			</ol>
			<p>
				<span className="bold">3. Divide Subarrays</span>
			</p>
			<p>
				Pivot elements are again chosen for the left and the right
				sub-parts separately. And, <span className="bold">step 2</span>{" "}
				is repeated.
				<img
					src="https://cdn.programiz.com/cdn/farfuture/FxRG-2wIayocfWeQvHxMmUQTKhibQiI2FLqjkIr3Vi4/mtime:1608894915/sites/tutorial2program/files/quick-sort-working.png"
					alt="Quick Sort Steps"
					title="Quick Sort first half"
				/>
			</p>
			<p>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/dK3pGyiHqFZOYklwABPBZ4zq_VZU1dMWBIbWhHJ-Rgw/mtime:1617189464/sites/tutorial2program/files/quick-sort_1.png"
					alt="Quick Sort Steps"
					title="Quick Sort Steps"
				/>
			</p>
			<p>
				The subarrays are divided until each subarray is formed of a
				single element. At this point, the array is already sorted.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n log n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(log n)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<h4>Left Pivot</h4>
			<CodeComponent
				code={`function quickSortLeftPivot(arr, l, r) {
	if (l < r) {
		let pivot = arr[l];
		let i = l;
		let j = r;
		while (i < j) {
			i++;
			while (i <= r && arr[i] < pivot) {
				i++;
			}
			while (j >= l && arr[j] > pivot) {
				j--;
			}
			if (i <= r && i < j) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
		[arr[l], arr[j]] = [arr[j], arr[l]];

		quickSortLeftPivot(arr, l, j - 1);
		quickSortLeftPivot(arr, j + 1, r);
	}
}`}
			/>
			<h4>Middle Pivot</h4>
			<CodeComponent
				code={`function partition(arr, low, high) {
	let mid = Math.floor((low + high) / 2);
	let pivot = arr[mid];

	let i = low;

	for (let j = low; j <= high; j++) {
		if (arr[j] < pivot) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
			if (i > mid) {
				mid = j;
			}
		}
	}
	[arr[i], arr[mid]] = [arr[mid], arr[i]];

	return i;
}

function quickSortMiddlePivot(arr, low, high) {
	if (low < high) {
		let pi = partition(arr, low, high);

		quickSortMiddlePivot(arr, low, pi - 1);
		quickSortMiddlePivot(arr, pi + 1, high);
	}
}`}
			/>
			<h4>Right Pivot</h4>
			<CodeComponent
				code={`function partition(arr, low, high) {
	let pivot = arr[high];

	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

	return i + 1;
}

function quickSortRightPivot(arr, low, high) {
	if (low < high) {
		let pi = partition(arr, low, high);

		quickSortRightPivot(arr, low, pi - 1);
		quickSortRightPivot(arr, pi + 1, high);
	}
}`}
			/>

			<p>
				Source:{" "}
				<a href="https://www.programiz.com/dsa/quick-sort">Programiz</a>
			</p>
		</>
	);
}
