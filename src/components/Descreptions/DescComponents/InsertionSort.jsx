import React from "react";
import CodeComponent from "../CodeComponent";

export default function InsertionSort() {
	return (
		<>
			<h2>Insertion Sort</h2>
			<p>
				<span className="bold">Insertion sort</span> is a simple sorting
				algorithm that works similar to the way you sort playing cards
				in your hands. The array is virtually split into a{" "}
				<span className="bold">sorted</span> and an{" "}
				<span className="bold">unsorted part</span>. Values from the
				unsorted part are picked and placed at the correct position in
				the sorted part.
			</p>
			<p>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif"
					alt="insertion sort animation"
				/>
			</p>
			<h2 id="algorithm">Algorithm</h2>
			<p>Suppose we need to sort the following array.</p>
			<p>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/K-kSm72ww4_afH0mQJDuR3Y-fPZYgBYo_Pclx7WlYUo/mtime:1582112622/sites/tutorial2program/files/Frame%204_0.png"
					alt="Insertion Sort Steps"
					title="Initial array"
				/>
			</p>
			<ol>
				<li>
					<p>
						The first element in the array is assumed to be sorted.
						Take the second element and store it separately in{" "}
						<code>key</code>.{" "}
					</p>
					<p>
						Compare <code>key</code> with the first element. If the
						first element is greater than <code>key</code>, then key
						is placed in front of the first element.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/l-X2VCkF2rp4i0X8mZX6BGJL_FQW9EL8PkKhBswQfpc/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-0_1.png"
							alt="Insertion Sort Steps"
							title="Insertion Sort Step 0"
						/>
					</p>
				</li>
				<li>
					<p>Now, the first two elements are sorted. </p>
					<p>
						Take the third element and compare it with the elements
						on the left of it. Placed it just behind the element
						smaller than it. If there is no element smaller than it,
						then place it at the beginning of the array.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/MqcrLAaQHEhcuJTmF_m712GG_wMemTY9AID0J9w4T6E/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-1_1.png"
							alt="Insertion Sort Steps"
							title="Insertion Sort Step 1"
						/>
					</p>
				</li>
				<li>
					<p>
						Similarly, place every unsorted element at its correct
						position.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/hWFdFWWU0lZD2xWGz0CoMDESnjYa9Wg1HwpH99jTTH0/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-2_2.png"
							alt="Insertion Sort Steps"
							title="Insertion Sort Step 2"
						/>
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/TxAcrgHKfahw_BPEIKwCWB9BY2GNiI91yzWeetMfG9Q/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-3_2.png"
							alt="Insertion Sort Steps"
							title="Insertion Sort Step 3"
						/>
					</p>
				</li>
			</ol>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function insertionSort(arr) {
    let i = 1;

    while (i < arr.length) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];

            j--;
        }
        arr[j + 1] = current;

        i++;
    }
}`}
			/>
			<p>
				<span className="bold">Time Complexity:</span> O(n*n)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<p>
				Source:{" "}
				<a href="https://www.programiz.com/dsa/insertion-sort">
					Programiz
				</a>
			</p>
		</>
	);
}
