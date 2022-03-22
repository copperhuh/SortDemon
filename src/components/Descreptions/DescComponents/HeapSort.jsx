import React from "react";
import CodeComponent from "../CodeComponent";

export default function HeapSort() {
	return (
		<>
			<h2>Heap Sort</h2>
			<p>
				<span className="bold">Heap sort</span> is an efficient
				comparison-based sorting algorithm that creates a{" "}
				<span className="bold">heap from the input array</span> and then
				sorts the array by taking advantage of a heap&#39;s properties.{" "}
				<span className="bold">
					<span className="bold">Heap sort</span>
				</span>{" "}
				processes the elements by creating the min-heap or max-heap
				using the elements of the given array.{" "}
				<span className="bold">Min-heap</span> or{" "}
				<span className="bold">max-heap</span> represents the ordering
				of array in which the root element represents the minimum or
				maximum element of the array.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<ol>
				<li>
					Since the tree satisfies Max-Heap property, then the largest
					item is stored at the root node.
				</li>
				<li>
					<span className="bold">Swap:</span> Remove the root element
					and put at the end of the array (nth position) Put the last
					item of the tree (heap) at the vacant place.
				</li>
				<li>
					<span className="bold">Remove:</span> Reduce the size of the
					heap by 1.
				</li>
				<li>
					<span className="bold">Heapify:</span> Heapify the root
					element again so that we have the highest element at root.
				</li>
				<li>
					The process is repeated until all the items of the list are
					sorted.
				</li>
			</ol>
			<p>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/VicaT2DyDXxbtM88OYklajepD4hkdSumEHTg2nBwe7s/mtime:1586942728/sites/tutorial2program/files/heap_sort.png"
					alt="procedures for implementing heap sort"
					title="We need to repeatedly exchange root element with last element and heapify the root element to implement heap sort "
				/>
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n log n)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<h4>Max Heap</h4>
			<CodeComponent
				code={`function heapSortMax(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0);
    }
}

function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest !== i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]];

        heapify(arr, n, largest);
    }
}`}
			/>
			<h4>Min Heap</h4>
			<CodeComponent
				code={`function heapSortMin(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0);
    }
}

function heapify(arr, n, i) {
    let smallest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] < arr[smallest]) {
        smallest = l;
    }

    if (r < n && arr[r] < arr[smallest]) {
        smallest = r;
    }

    if (smallest !== i) {
        [arr[smallest], arr[i]] = [arr[i], arr[smallest]];

        heapify(arr, n, smallest);
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.programiz.com/dsa/heap-sort">Programiz</a>
			</p>
		</>
	);
}
