import React from "react";
import CodeComponent from "../CodeComponent";

export default function CircleSort() {
	return (
		<>
			<h2>Circle Sort</h2>
			<p>
				<span className="bold">Circle sort</span> is a sorting algorithm
				in which concentric <span className="bold">circles</span> are
				made on array and the elements lying on the same circle
				diametrically opposite to each other are compared and if the
				element in left side is found to be greater than that of right
				side then they are swapped. The above process is repeated in the{" "}
				<span className="bold">recursive</span> manner and the array is
				divided into sub arrays until we get the array of sorted pairs.
			</p>
			<p>
				It&#39;s one of the <span className="bold">fastest</span> ways
				to sort an <span className="bold">inverted array</span>.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<ol>
				<li>Consider an array of n elements.</li>
				<li>
					Compare the first elemment of the array to the last element,
					then the second element to the last element and so on.
				</li>
				<li>
					Then recursively split the array into two sub arrays and
					repeat the above step until we get the array of single
					element.
				</li>
			</ol>
			<h3 id="example">Example</h3>
			<p>
				Assume the Unsorted input array is:{" "}
				<span className="bold">[6,5,3,1,8,7,2,4]</span>.
			</p>
			<p>
				Based on the above algorithm we first compare the first and the
				last element and then the second and second the last element and
				so on until all the elements get compared, and then we divide
				the array int two sub-arrays and make the same comparison until
				we get the sorted array.
			</p>
			<p>
				<span className="bold">Step 1</span>: Compare i th element with
				n-i th element and swap if there are not in the correct order
			</p>
			<p>
				<img
					src="https://iq.opengenus.org/content/images/2019/05/circle_sort_1.png"
					alt="circle_sort_1"
				/>
			</p>
			<p>
				<span className="bold">Step 2</span>: Split the array into two
				parts of equal size and follow the above step for each part
			</p>
			<p>
				<img
					src="https://iq.opengenus.org/content/images/2019/05/circle_sort_2.png"
					alt="circle_sort_2"
				/>
			</p>
			<p>
				<span className="bold">Step 3</span>: Split each part into
				another two parts and follow the same comparison
			</p>
			<p>
				<img
					src="https://iq.opengenus.org/content/images/2019/05/circle_sort_3.png"
					alt="circle_sort_3"
				/>
			</p>
			<p>
				<span className="bold">Step 4</span>: On splitting the array
				into equal parts, each part is of size 1 and hence, we have a
				sorted array
			</p>
			<p>
				<img
					src="https://iq.opengenus.org/content/images/2019/05/circle_sort_4.png"
					alt="circle_sort_4"
				/>
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n log n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>

			<h3 id="implementation">Implementation</h3>
			<CodeComponent
				code={`function circleSort(arr, low, high) {
    let swapped = false;
    
    if (low === high) {
        return false;
    }
    
    let lo = low;
    let hi = high;
    
    while (lo < hi) {
        if (arr[lo] > arr[hi]) {
            [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
            swapped = true;
        }
        lo++;
        hi--;
    }
    
    if (lo === hi) {
        if (arr[lo] > arr[hi + 1]) {
            [arr[lo], arr[hi + 1]] = [arr[hi + 1], arr[lo]];
            swapped = true;
        }
    }
    
    let mid = Math.floor((high - low) / 2);
    let firstHalf = circleSort(arr, low, low + mid);
    let secondHalf = circleSort(arr, low + mid + 1, high);
    
    return swapped || firstHalf || secondHalf;
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://iq.opengenus.org/circle-sort/">OpenGenus</a>
			</p>
		</>
	);
}
