import React from "react";
import CodeComponent from "../CodeComponent";

export default function OddEvenMergeSort() {
	return (
		<>
			<h2>Odd Even Merge Sort</h2>
			<p>
				The odd-even mergesort algorithm was developed by K.E. Batcher.
				It is based on a merge algorithm that merges two sorted halves
				of a sequence to a completely sorted sequence.
			</p>
			<p>
				In contrast to mergesort, this algorithm is not data-dependent,
				i.e. the same comparisons are performed regardless of the actual
				data. Therefore, odd-even mergesort can be implemented as a
				sorting network
			</p>
			<p>
				<span className="bold">Comparator networks</span> are abstract
				devices built up of a fixed number of &quot;wires&quot;,
				carrying values, and comparator modules that connect pairs of
				wires, swapping the values on the wires if they are not in a
				desired order. Such networks are typically designed to perform
				sorting on fixed numbers of values, in which case they are
				called <span className="bold">sorting networks</span>.
			</p>
			<p>
				Sorting networks differ from general comparison sortsin that
				they are not capable of handling arbitrarily large inputs, and
				in that their sequence of comparisons is set in advance,
				regardless of the outcome of previous comparisons. In order to
				sort larger amounts of inputs, new sorting networks must be
				constructed. This independence of comparison sequences is useful
				for parallel execution and for implementation in hardware.
				Despite the simplicity of sorting nets, their theory is
				surprisingly deep and complex.
			</p>
			<p>
				Odd–even mergesort, to work properly needs the input&#39;s
				length to be equal to{" "}
				<span className="bold">some power of 2</span>{" "}
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(2n log n log n)
				<br />
				<span className="bold">Auxilary Space:</span> O(2n log n log n)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> No
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function oddEvenMergeSort(arr, lo, n) {
    if (n > 1) {
        let m = Math.floor(n / 2);
        oddEvenMergeSort(arr, lo, m);
        oddEvenMergeSort(arr, lo + m, m);
        oddEvenMerge(arr, lo, n, 1);
    }
}

function oddEvenMerge(arr, lo, n, r) {
    let m = r * 2;
    if (m < n) {
        oddEvenMerge(arr, lo, n, m);
        oddEvenMerge(arr, lo + r, n, m);
        for (let i = lo + r; i + r < lo + n; i += m) {
            compare(arr, i, i + r);
        }
    } else {
        compare(arr, lo, lo + r);
    }
}

function compare(arr, i, j) {
    if (i >= 0 && j >= 0) {
        if (arr[i] > arr[j]) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.inf.hs-flensburg.de/lang/algorithmen/sortieren/networks/oemen.htm">
					hs-flensburg
				</a>
			</p>
		</>
	);
}
