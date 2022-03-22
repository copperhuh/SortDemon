import React from "react";
import CodeComponent from "../CodeComponent";

export default function TimSort() {
	return (
		<>
			<h2>Tim Sort</h2>
			<p>
				<span className="bold">Tim sort</span> is an adaptive sorting
				algorithm that needs <span className="bold">O(n log n)</span>{" "}
				comparisons to sort an array of <span className="bold">n</span>{" "}
				elements. It was designed and implemented by Tim Peters in 2002
				in a python programming language. It has been python&#39;s
				standard sorting algorithm since version 2.3.
			</p>
			<p>
				The basic approach used in the Tim sort algorithm is - first
				sort small chunks by using the insertion sort and then merge all
				the big chunks using the merge function of the merge sort.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<ol>
				<li>
					Divide the array into the number of blocks known as run.
				</li>
				<li>Consider the size of run, either 32 or 64.</li>
				<li>
					Sort the individual elements of every run one by one using
					insertion sort.
				</li>
				<li>
					Merge the sorted runs one by one using the merge function of
					merge sort.
				</li>
				<li>
					Double the size of merged sub-arrays after every iteration.
				</li>
			</ol>
			<p>
				In Tim sort, first the array is divided into small chunks that
				are known as <span className="bold">RUN.</span> After dividing,
				each individual <span className="bold">RUN</span> is taken, and
				sorted using the insertion sort technique. After that, all
				sorted RUNs are merged using the merge() function of the merge
				sort algorithm.
			</p>
			<p>
				In Tim sort, the advantage of using the insertion sort is that
				insertion sort works efficiently for the array with small size.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n log n)
				<br />
				<span className="bold">Auxilary Space:</span> O(n)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`let MIN_MERGE = 32;

function timSort(arr, n) {
    let minRun = minRunLength(MIN_MERGE);

        for (let i = 0; i < n; i += minRun) {
            insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1));
        }

        for (let size = minRun; size < n; size = 2 * size) {
            for (let left = 0; left < n; left += 2 * size) {
                let mid = left + size - 1;
                let right = Math.min(left + 2 * size - 1, n - 1);

                if (mid < right) {
                    merge(arr, left, mid, right);
                }
            }
        }
}

function minRunLength(n) {
    let r = 0;
    while (n >= MIN_MERGE) {
        r |= n & 1;
        n >>= 1;
    }
    return n + r;
}

function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];

            j--;
        }
        arr[j + 1] = temp;
    }
}

function merge(arr, l, m, r) {
    let len1 = m - l + 1,
        len2 = r - m;
    let left = new Array(len1);
    let right = new Array(len2);
    for (let x = 0; x < len1; x++) {
        left[x] = arr[l + x];
    }
    for (let x = 0; x < len2; x++) {
        right[x] = arr[m + 1 + x];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];

            i++;
        } else {
            arr[k] = right[j];

            j++;
        }
        k++;
    }

    while (i < len1) {
        arr[k] = left[i];

        k++;
        i++;
    }

    while (j < len2) {
        arr[k] = right[j];

        k++;
        j++;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.javatpoint.com/tim-sort">javatpoint</a>
			</p>
		</>
	);
}
