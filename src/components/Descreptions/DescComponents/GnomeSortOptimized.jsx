import React from "react";
import CodeComponent from "../CodeComponent";

export default function GnomeSortOptimized() {
	return (
		<>
			<h2 id="gnome-sort-optimized">Gnome Sort Optimized</h2>
			<p>
				<span className="bold">Gnome sort</span> is a sorting algorithm
				which is similar to <span className="bold">insertion sort</span>
				, except that moving an element to its proper place is
				accomplished by a series of swaps, as in{" "}
				<span className="bold">bubble sort</span>.{" "}
			</p>
			<p>
				It is conceptually simple, requiring no nested loops. The
				running time is O(n*n), but in practice the algorithm can run as
				fast as <span className="bold">Insertion</span> sort.
			</p>
			<p>
				The algorithm always finds the first place where two adjacent
				elements are in the wrong order, and swaps them. It takes
				advantage of the fact that performing a swap can introduce a new
				out-of-order adjacent pair only right before or after the two
				swapped elements. It does not assume that elements forward of
				the current position are sorted, so it only needs to check the
				position directly before the swapped elements.
			</p>
			<p>
				An optimized version uses variable &quot;j&quot; to allow the
				gnome to skip back to where it left off after moving to the
				left, avoiding some iterations and comparisons.
			</p>
			<p>
				With this optimization, <span className="bold">gnome sort</span>{" "}
				becomes a variant of{" "}
				<span className="bold">insertion sort</span>.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n*n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(1)
				<br />
				<span className="bold">In Place:</span> Yes
				<br />
				<span className="bold">Stable:</span> Yes
			</p>
			<h3 id="implementation">Implementation</h3>
			<CodeComponent
				code={`function gnomeSortOptimized(arr) {
    let n = arr.length;
    let i = 1;
    let j = 0;

    while (i < n) {
        if (arr[i] >= arr[i - 1]) {
            if (j !== 0) {
                i = j;
                j = 0;
            }
            i++;
        } else {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            if (i > 1) {
                if (j === 0) {
                    j = i;
                }
                i--;
            } else {
                i++;
            }
        }
    }
}`}
			/>
			<p>
				Source: <a href="en-academic">en-academic</a>
			</p>
		</>
	);
}
