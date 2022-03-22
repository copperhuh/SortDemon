import React from "react";
import CodeComponent from "../CodeComponent";

export default function BitonicSort() {
	return (
		<>
			<h2>Bitonic Sort</h2>
			<p>
				<span className="bold">Bitonic sort</span> is a parallel sorting
				algorithm that performs O(n*n 2log n) comparisons. Although the
				number of comparisons is more than that in any other popular
				sorting algorithm, it performs better for the parallel
				implementation because elements are compared in a predefined
				sequence that must not depend upon the data being sorted. The
				predefined sequence is called the Bitonic sequence.
			</p>
			<p>
				To understand the bitonic sort, we first have to understand the{" "}
				<span className="bold">Bitonic sequence</span>.
			</p>
			<p>
				In <span className="bold">Bitonic sequence,</span> elements are
				first arranged in increasing order, and then after some
				particular index, they start decreasing.
			</p>
			<p>
				An array with A[0…i…n-1] is said to be bitonic, if there is an
				index i, such that -
			</p>
			<ol>
				<li>
					A[0] &lt; A[1] &lt; A[2] .... A[i-1] &lt; A[i] &gt; A[i+1]
					&gt; A[i+2] &gt; A[i+3] &gt; ... &gt;A[n-1]
				</li>
			</ol>
			<p>Where, 0 ≤ i ≤ n-1.</p>
			<h3 id="converting-a-random-sequence-into-a-bitonic-sequence">
				Converting a random sequence into a bitonic sequence
			</h3>
			<p>
				Consider a sequence A[ 0 ... n-1] of n elements. First, start
				constructing a Bitonic sequence by using 4 elements of the
				sequence. Sort the first 2 elements in ascending order and the
				last 2 elements in descending order, concatenate this pair to
				form a Bitonic sequence of 4 elements. Repeat this process for
				the remaining pairs of the element until we find a Bitonic
				sequence.
			</p>
			<p>
				Let&#39;s understand the process to convert the random sequence
				into a bitonic sequence using an example.
			</p>
			<p>
				Suppose the elements of array are -{" "}
				<span className="bold">(30, 70, 40, 80, 60, 20, 10, 50)</span>
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/bitonic-sort.png"
					alt="Bitonic Sort"
				/>
			</p>
			<p>After conversion, the bitonic sequence that we will get is -</p>
			<p>
				<span className="bold">30, 40, 70, 80, 60, 50, 20, 10</span>
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				The steps used to perform the bitonic sort are listed as follows
				-
			</p>
			<ol>
				<li>
					In first step, we have to create the bitonic sequence from
					the given random sequence as we have done above. It is
					considered as the first step of the process. After this
					step, we will get a sequence in which the elements in the
					first half are arranged in ascending order, while the
					elements of the second half are arranged in descending
					order.
				</li>
				<li>
					Now, in the second step, we have to compare the first
					element of first half with the first element of second half,
					then second element of first half with the second element of
					second half, and so on. Here, we have to swap the elements
					if any element in the second half is found to be smaller.
				</li>
				<li>
					After the above step, we got all the elements in the first
					half smaller than all the elements in the second half. The
					compare and swap results into the two sequences of n/2
					length each. Repeat the process performed in the second step
					recursively onto every sequence until we get a single sorted
					sequence of length n.
				</li>
			</ol>
			<p>
				Now, let&#39;s see the entire procedure of bitonic sort with an
				example. It will be easier to understand the bitonic sort with
				an example as it makes the explanation clearer and easier.
			</p>
			<p>
				In the below example, we are using the bitonic sequence given
				above that we created from a random sequence.
			</p>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/bitonic-sort2.png"
					alt="Bitonic Sort"
				/>
			</p>
			<p>Now, the given array is completely sorted.</p>
			<p>
				<span className="bold">Time Complexity:</span> O(2 log n log n)
				<br />
				<span className="bold">Auxilary Space:</span> O(2n log n log n)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> No
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function bitonicSort(arr, low, cnt, dir) {
    if (cnt >= 1) {
        var k = parseInt(cnt / 2);

        bitonicSort(arr, low, k, 1);

        bitonicSort(arr, low + k, k, 0);

        bitonicMerge(arr, low, cnt, dir);
    }
}

function bitonicMerge(arr, low, cnt, dir) {
    if (cnt > 1) {
        var k = parseInt(cnt / 2);
        for (var i = low; i < low + k; i++) {
            compAndSwap(arr, i, i + k, dir);
        }
        bitonicMerge(arr, low, k, dir);
        bitonicMerge(arr, low + k, k, dir);
    }
}

function compAndSwap(arr, i, j, dir) {
    if ((arr[i] > arr[j] && dir === 1) || (arr[i] < arr[j] && dir === 0)) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.javatpoint.com/bitonic-sort">javatpoint</a>
			</p>
		</>
	);
}
