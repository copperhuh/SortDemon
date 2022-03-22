import React from "react";
import CodeComponent from "../CodeComponent";

export default function FlashSort() {
	return (
		<>
			<h2>Flash Sort</h2>
			<p>
				<span className="bold">Flashsort</span> is a distribution
				sorting algorithm showing linear computational complexity O(n)
				for uniformly distributed data sets and relatively little
				additional memory requirement. The basic idea behind flashsort
				is that in a data set with a{" "}
				<span className="bold">known distribution</span>, it is easy to
				immediately <span className="bold">estimate</span> where an
				element should be placed after sorting when the{" "}
				<span className="bold">range of the set is known</span>.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				To sort we need to use a special{" "}
				<span className="bold">buffer</span> - &quot;buckets&quot;. This
				is an array of 256 lengths, each element of which contains the
				size of the bucket, and a link to the border of this bucket - a
				pointer to the first bucket element in the original array.
				Initially, the buffer is initialized with zeros.
			</p>
			<p>
				<span className="bold">Stage 1. Counting bucket size</span>
			</p>
			<p>
				In a first step size of buckets is calculated. We use our
				buffer, where a counter of the number of elements is used for
				each bucket. We run through all the elements, we take the value
				of the i-th byte and increment the counter for the corresponding
				bucket.
			</p>
			<p>
				<span className="bold">
					Stage 2. The alignment of the boundaries
				</span>
			</p>
			<p>
				Now, as we know the dimensions of each bucket, we can set clear
				boundaries in our original array for every bucket. We run
				through our buffer and set the boundaries – then set the
				pointers on the elements of each bucket.
			</p>
			<p>
				<span className="bold">Stage 3. Permutation</span>
			</p>
			<p>
				Now we rearrange the elements in the source array so that each
				of them was in its place, in its bucket.
			</p>
			<p>
				<em>Permutation algorithm is as follows:</em>
			</p>
			<p>
				We run through all elements of the array. For the current
				element, we take its i-th byte.
			</p>
			<ul>
				<li>
					<p>
						If the current element is in its place (in your bucket),
						then everything is OK - we move on to the next element.
					</p>
				</li>
				<li>
					<p>
						If the item is not in its place – and the corresponding
						bucket is further, then we make a permutation of the
						element which is in the far bucket. We repeat this
						procedure until we get the right element with the
						desired bucket. Each time, making the change, we put the
						current element in the bucket and don’t re-analyze it.
						Thus, the number of permutations will never exceed N.
					</p>
				</li>
			</ul>
			<p>
				During each permutation, the counters in the buffer will be
				decremented back for the corresponding bucket, and in the end,
				our buffer will again be filled with zeros and is ready to be
				used in other iterations.
			</p>
			<p>
				Permutation process will, in theory, be performed in the linear
				time since the number of permutations will never exceed N - the
				number of elements.
			</p>
			<p>
				<span className="bold">Stage 4. Recursive descent</span>
			</p>
			<p>
				And the last stage. Now we recursively sort items within each
				formed bucket. For each iteration, it is only necessary to know
				the border of the current bucket. Since we do not use additional
				memory, before moving to the inner iteration, we again run
				through the elements and compute the length of the current
				bucket.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n)
				<br />
				<span className="bold">Auxilary Space:</span> O(n)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3 id="implementation">Implementation</h3>
			<CodeComponent
				code={`function flashSort(arr) {
    var max = 0,
        min = arr[0];
    var n = arr.length;
    var m = ~~(0.45 * n);
    var l = new Array(m);

    for (var i = 1; i < n; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[max]) {
            max = i;
        }
    }

    if (min === arr[max]) {
        return arr;
    }

    var c1 = (m - 1) / (arr[max] - min);

    for (var k = 0; k < m; k++) {
        l[k] = 0;
    }
    for (var j = 0; j < n; ++j) {
        k = ~~(c1 * (arr[j] - min));
        ++l[k];
    }

    for (var p = 1; p < m; ++p) {
        l[p] = l[p] + l[p - 1];
    }

    var hold = arr[max];
    arr[max] = arr[0];
    arr[0] = hold;

    var move = 0,
        t,
        flash;
    j = 0;
    k = m - 1;

    while (move < n - 1) {
        while (j > l[k] - 1) {
            ++j;
            k = ~~(c1 * (arr[j] - min));
        }
        if (k < 0) break;
        flash = arr[j];
        while (j !== l[k]) {
            k = ~~(c1 * (flash - min));
            hold = arr[(t = --l[k])];
            arr[t] = flash;
            flash = hold;
            ++move;
        }
    }

    for (j = 1; j < n; j++) {
        hold = arr[j];
        i = j - 1;
        while (i >= 0 && arr[i] > hold) {
            arr[i + 1] = arr[i--];
        }
        arr[i + 1] = hold;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://steemit.com/popularscience/@krishtopa/the-fastest-sort-method-flashsort">
					steemit
				</a>
				,{" "}
				<a href="https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-12.php">
					w3resource
				</a>
			</p>
		</>
	);
}
