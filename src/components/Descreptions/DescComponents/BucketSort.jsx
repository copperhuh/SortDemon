import React from "react";
import CodeComponent from "../CodeComponent";

export default function BucketSort() {
	return (
		<>
			<h2>Bucket Sort</h2>
			<p>
				<span className="bold">Bucket sort</span> is a sorting algorithm
				that separate the elements into{" "}
				<span className="bold">multiple groups</span> said to be
				buckets. Elements in bucket sort are first{" "}
				<span className="bold">uniformly divided</span> into groups
				called buckets, and then they are sorted by any other sorting
				algorithm. After that, elements are gathered in a sorted manner.
			</p>
			<p>
				The basic procedure of performing the bucket sort is given as
				follows -
			</p>
			<ul>
				<li>
					First, partition the range into a fixed number of buckets.
				</li>
				<li>Then, toss every element into its appropriate bucket.</li>
				<li>
					After that, sort each bucket individually by applying a
					sorting algorithm.
				</li>
				<li>And at last, concatenate all the sorted buckets.</li>
			</ul>
			<p>The advantages of bucket sort are -</p>
			<ul>
				<li>Bucket sort reduces the no. of comparisons.</li>
				<li>
					It is asymptotically fast because of the uniform
					distribution of elements.
				</li>
			</ul>
			<p>The limitations of bucket sort are -</p>
			<ul>
				<li>It may or may not be a stable sorting algorithm.</li>
				<li>
					It is not useful if we have a large array because it
					increases the cost.
				</li>
				<li>
					It is not an in-place sorting algorithm, because some extra
					space is required to sort the buckets.
				</li>
			</ul>
			<p>
				The best and average-case complexity of bucket sort is{" "}
				<span className="bold">O(n + k)</span>, and the worst-case
				complexity of bucket sort is{" "}
				<span className="bold">O(n*n)</span>, where{" "}
				<span className="bold">n</span> is the number of items.
			</p>
			<p>Bucket sort is commonly used -</p>
			<ul>
				<li>With floating-point values.</li>
				<li>
					When{" "}
					<span className="bold">
						input is distributed uniformly over a range.
					</span>
				</li>
			</ul>
			<p>
				<span className="bold">Scatter Gather Approach</span>
			</p>
			<p>
				The process of bucket sort can be understood as a{" "}
				<span className="bold">scatter-gather approach</span>. Here,
				elements are first scattered into buckets then the elements in
				each bucket are sorted. Finally, the elements are gathered in
				order.
			</p>
			<p>
				<img
					src="https://cdn.programiz.com/cdn/farfuture/gNSELV0jV05rlFjkjScrcZWCFeRsJqJUczwEOcne9D0/mtime:1582112622/sites/tutorial2program/files/Bucket_2.png"
					alt="Bucket Sort Working"
					title="Working of bucket sort"
				/>
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<ol>
				<li>
					<p>Suppose, the input array is:</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/nZnEPMDyED_o3k9I9B_kA62pnHztKRSQy2CjCqLRI0I/mtime:1582112622/sites/tutorial2program/files/Bucket-sort-0.1_0.png"
							alt="Bucket Sort Steps"
							title="Original Array"
						/>
					</p>
					<p>
						Create an array of size 10. Each slot of this array is
						used as a bucket for storing elements.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/Vfhp1cQfAtSDdhNoGxyahhZ1usg1tFN-048etgx7w7k/mtime:1582112622/sites/tutorial2program/files/Bucket-sort-0_0.png"
							alt="Bucket Sort Steps"
							title="Bubble Sort step 0"
						/>
					</p>
				</li>
				<li>
					<p>
						Insert elements into the buckets from the array. The
						elements are inserted according to the range of the
						bucket.{" "}
					</p>
					<p>
						In our example code, we have buckets each of ranges from
						0 to 1, 1 to 2, 2 to 3,...... (n-1) to n.
						<br />
						Suppose, an input element is <code>.23</code> is taken.
						It is multiplied by <code>size = 10</code> (ie.{" "}
						<code>.23*10=2.3</code>). Then, it is converted into an
						integer (ie. <code>2.3≈2</code>). Finally, .23 is
						inserted into <span className="bold">bucket-2</span>.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/hREOdaen0Rf3tOH3peobau0_r1NK0tB8B3OsChICkc0/mtime:1582112622/sites/tutorial2program/files/Bucket-sort-0.2_0.png"
							alt="Bucket Sort Steps"
							title="Bucketing"
						/>
					</p>
					<p>
						Similarly, .25 is also inserted into the same bucket.
						Everytime, the floor value of the floating point number
						is taken.{" "}
					</p>
					<p>
						<span className="bold">
							If we take integer numbers as input, we have to
							divide it by the interval (10 here) to get the floor
							value.
						</span>{" "}
					</p>
					<p>
						Similarly, other elements are inserted into their
						respective buckets.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/zNeS_ImQpS0e-lHiTIZC5tLlOuX4M58TwCaZV8tveOE/mtime:1582112622/sites/tutorial2program/files/Bucket-sort-0.3_0.png"
							alt="Bucket Sort Steps"
							title="Bucketing Completed"
						/>
					</p>
				</li>
				<li>
					<p>
						The elements of each bucket are sorted using any of the
						stable sorting algorithms. Here, we have used quicksort
						(inbuilt function).
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/mOL3yaTcJAp3WbD0kTJq7rWgnLl6nMrR762voPIsyN8/mtime:1582112622/sites/tutorial2program/files/Bucket-sort-0.4_0.png"
							alt="Bucket Sort Steps"
							title="Elements sorted in each bucket"
						/>
					</p>
				</li>
				<li>
					<p>
						The elements from each bucket are gathered. It is done
						by iterating through the bucket and inserting an
						individual element into the original array in each
						cycle. The element from the bucket is erased once it is
						copied into the original array.
					</p>
					<p>
						<img
							src="https://cdn.programiz.com/cdn/farfuture/VobtThxrLKyQDQa8o5gUKmCAHBAJzBIjZ3wEuEyL8Fc/mtime:1582112622/sites/tutorial2program/files/Bucket-sort-0.5_0.png"
							alt="Bucket Sort Steps"
							title="Gathering from buckets into original array"
						/>
					</p>
				</li>
			</ol>
			<p>
				<span className="bold">Time Complexity:</span> O(n)
				<br />
				<span className="bold">Auxilary Space:</span> O(n*n)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> No
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function bucketSort(arr, max) {
	let x = 30;
	let n = Math.floor(max / x) + 1;

	let buckets = new Array(n);

	for (let i = 0; i < n; i++) {
		buckets[i] = [];
	}

	for (let i = 0; i < arr.length; i++) {
		let idx = Math.floor((arr[i] - 1) / x);

		buckets[idx].push(arr[i]);
	}

	for (let i = 0; i < n; i++) {
		insertionSortBinary(buckets[i])
	}

	let index = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < buckets[i].length; j++) {
			arr[index++] = buckets[i][j];
		}
	}
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.javatpoint.com/bucket-sort">javatpoint</a>,{" "}
				<a href="https://www.programiz.com/dsa/bucket-sort">
					Programiz
				</a>
			</p>
		</>
	);
}
