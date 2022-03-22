import React from "react";
import CodeComponent from "../CodeComponent";

export default function RadixSort() {
	return (
		<>
			<h2>RadixSort</h2>
			<p>
				<span className="bold">Radix sort</span> is a sorting algorithm
				that sorts the elements by first grouping the individual digits
				of the same <span className="bold">place value</span>. Then,
				sort the elements according to their increasing/decreasing
				order.
			</p>
			<h3 id="meaning-of-base">Meaning of Base</h3>
			<p>
				Base specifies in which{" "}
				<span className="bold">number system</span> will our numbers be
				compared digit by digit. Radix sort with base 10 (below) -
				decimal system; Base 2 - binary; Base 5 - quinary
			</p>
			<p>
				Suppose, we have an array of 8 elements. First, we will sort
				elements based on the value of the unit place. Then, we will
				sort elements based on the value of the tenth place. This
				process goes on until the last significant place.
			</p>
			<p>
				Let the initial array be{" "}
				<code>[121, 432, 564, 23, 1, 45, 788]</code>. It is sorted
				according to radix sort as shown in the figure below.
			</p>
			<p>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/GKQPB3dxbVfvYT3qiSZtTQDI5UOENnLr-oTPlCbYKaM/mtime:1582112622/sites/tutorial2program/files/Radix-sort-0_0.png"
					alt="Radix Sort Working"
					title="Working of Radix Sort"
				/>
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<ol>
				<li>
					<p>
						Find the largest element in the array, i.e. max. Let{" "}
						<code>X</code> be the number of digits in{" "}
						<code>max</code>. <code>X</code> is calculated because
						we have to go through all the significant places of all
						elements.{" "}
					</p>
					<p>
						In this array{" "}
						<code>[121, 432, 564, 23, 1, 45, 788]</code>, we have
						the largest number 788. It has 3 digits. Therefore, the
						loop should go up to hundreds place (3 times).
					</p>
				</li>
				<li>
					<p>Now, go through each significant place one by one. </p>
					<p>
						Use any stable sorting technique to sort the digits at
						each significant place. We have used counting sort for
						this.{" "}
					</p>
					<p>
						Sort the elements based on the unit place digits (
						<code>X=0</code>).
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/uCNpqDxCh0fa6L5HIYKbmYCbiZHlGhzXXBsxKVpItSs/mtime:1591330108/sites/tutorial2program/files/Radix-sort-one.png"
							alt="Radix Sort working with Counting Sort as intermediate step"
							title="Radix Sort Steps"
						/>
					</p>
				</li>
				<li>
					<p>Now, sort the elements based on digits at tens place.</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/k2d_8gQeDKJ5pafc96mpZMqZvEqOOrh9eBCVmKRTBsg/mtime:1591330113/sites/tutorial2program/files/Radix-sort-ten.png"
							alt="Radix Sort Step"
							title="Radix Sort Step"
						/>
					</p>
				</li>
				<li>
					<p>
						Finally, sort the elements based on the digits at
						hundreds place.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/CvIF-W6hxb0-kwt-hn9Gb3IWlpTVxR3PK7X4TQimROc/mtime:1591330096/sites/tutorial2program/files/Radix-sort-hundred.png"
							alt="Selection Sort Step"
							title="Selection Sort Step"
						/>
					</p>
				</li>
			</ol>
			<p>
				<span className="bold">Time Complexity:</span> O(n)
				<br />
				<span className="bold">Auxilary Space:</span> O(n)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> No
				<h3>Implementation</h3>
				<CodeComponent
					code={`function radixSort(arr, max, base) {
	let n = arr.length;

	for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
		let output = new Array(n);
		let count = new Array(base);
		for (let i = 0; i < base; i++) {
			count[i] = 0;
		}

		for (let i = 0; i < n; i++) {
			count[Math.floor(arr[i] / exp) % base]++;
		}

		for (let i = 1; i < base; i++) {
			count[i] += count[i - 1];
		}

		for (let i = n - 1; i >= 0; i--) {
			let idx = Math.floor(arr[i] / exp) % base
			output[count[idx] - 1] = arr[i];
			count[idx]--;
		}

		for (let i = 0; i < n; i++) {
			arr[i] = output[i];
		}
	}
}`}
				/>
				Source:{" "}
				<a href="https://www.programiz.com/dsa/radix-sort">Progamiz</a>
			</p>
		</>
	);
}
