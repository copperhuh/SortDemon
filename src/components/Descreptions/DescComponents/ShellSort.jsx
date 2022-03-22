import React from "react";
import CodeComponent from "../CodeComponent";

export default function ShellSort() {
	return (
		<>
			<h2>Shell Sort</h2>
			<p>
				<span className="bold">Shell sort</span> is a highly efficient
				sorting algorithm and is based on{" "}
				<span className="bold">insertion sort</span> algorithm. This
				algorithm avoids large shifts as in case of insertion sort, if
				the smaller value is to the far right and has to be moved to the
				far left.
			</p>
			<p>
				This algorithm uses insertion sort on a widely spread elements,
				first to sort them and then sorts the less widely spaced
				elements. This spacing is termed as{" "}
				<span className="bold">interval</span>.
			</p>
			<h3 id="example">Example</h3>
			<p>
				Let us consider the following example to have an idea of how
				shell sort works. We take the same array we have used in our
				previous examples. For our example and ease of understanding, we
				take the interval of 4. Make a virtual sub-list of all values
				located at the interval of 4 positions. Here these values are{" "}
				{(35, 14)}, {(33, 19)}, {(42, 27)} and {(10, 44)}
			</p>
			<p>
				<img
					src="https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_4.jpg"
					alt="Shell Sort"
				/>
			</p>
			<p>
				We compare values in each sub-list and swap them (if necessary)
				in the original array. After this step, the new array should
				look like this −
			</p>
			<p>
				<img
					src="https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_1.jpg"
					alt="Shell Sort"
				/>
			</p>
			<p>
				Then, we take interval of 1 and this gap generates two sub-lists
				- {(14, 27, 35, 42)}, {(19, 10, 33, 44)}
			</p>
			<p>
				<img
					src="https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_2.jpg"
					alt="Shell Sort"
				/>
			</p>
			<p>
				We compare and swap the values, if required, in the original
				array. After this step, the array should look like this −
			</p>
			<p>
				<img
					src="https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_2.jpg"
					alt="Shell Sort"
				/>
			</p>
			<p>
				Finally, we sort the rest of the array using interval of value
				1. Shell sort uses insertion sort to sort the array.
			</p>
			<p>Following is the step-by-step depiction −</p>
			<p>
				<img
					src="https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort.jpg"
					alt="Shell Sort"
				/>
			</p>
			<p>
				We see that it required only four swaps to sort the rest of the
				array.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n log n)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function shellSort(arr) {
    let gap = arr.length;

    while (gap > 0) {
        let i = 0;
        let j = gap;

        while (j < arr.length) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }

            i++;
            j++;

            let k = i;
            while (k - gap > -1) {
                if (arr[k - gap] > arr[k]) {
                    [arr[k - gap], arr[k]] = [
                        arr[k],
                        arr[k - gap],
                    ];
                }
                k--;
            }
        }

        gap = Math.floor(gap / 2);
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm">
					tutorialspoint
				</a>
			</p>
		</>
	);
}
