import React from "react";
import CodeComponent from "../CodeComponent";

export default function CycleSort() {
	return (
		<>
			<h2>Cycle Sort</h2>
			<p>
				<span className="bold">Cycle sort</span> is a comparison sorting
				algorithm that forces array to be factored into the number of
				cycles where each of them can be{" "}
				<span className="bold">rotated</span> to produce a sorted array.
				It is theoretically optimal in the sense that it reduces the
				number of writes to the original array.
			</p>
			<p>
				Cycle sort forces an array to be factored into a number of
				cycles where every element can rotate in order to produce a
				sorted array.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				Given an element <span className="bold">A</span>, we can find
				its index by counting the number of elements smaller than{" "}
				<span className="bold">A</span>.
			</p>
			<ol>
				<li>
					If the element is at its correct position, simply leave it
					as it is.
				</li>
				<li>
					Else, we have to find the correct position of{" "}
					<span className="bold">A</span> by counting the number of
					elements smaller than it. Another element{" "}
					<span className="bold">B</span> is replaced to be moved to
					its correct position. This process continues until we get an
					element at the original position of{" "}
					<span className="bold">A</span>.
				</li>
			</ol>
			<h3 id="example">Example</h3>
			<p>
				<img
					src="https://static.javatpoint.com/ds/images/cycle-sort.png"
					alt="Cycle Sort"
				/>
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n*n)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function cycleSort(arr) {
    let n = arr.length;

    for (let cycle_start = 0; cycle_start < n - 1; cycle_start++) {
        let item = arr[cycle_start];
        let pos = cycle_start;

        for (let i = cycle_start + 1; i < n; i++) {
            if (arr[i] < item) {
                pos++;
            }
        }

        if (pos === cycle_start) {
            continue;
        }

        while (item === arr[pos]) {
            pos++;
        }

        if (pos !== cycle_start) {
            [arr[pos], item] = [item, arr[pos]];
        }

        while (pos !== cycle_start) {
            pos = cycle_start;

            for (let i = cycle_start + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos++;
                    if (pos === cycle_start) {
                        break;
                    }
                }
            }

            if (pos === cycle_start) {
                break;
            }

            while (item === arr[pos]) {
                pos++;

                if (pos === cycle_start) {
                    break;
                }
            }
            if (item !== arr[pos]) {
                [arr[pos], item] = [item, arr[pos]];
            }
        }
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.javatpoint.com/cycle-sort">javatpoint</a>
			</p>
		</>
	);
}
