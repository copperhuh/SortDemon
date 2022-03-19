import React from "react";
import CodeComponent from "./CodeComponent";

export default function CombSort() {
	return (
		<>
			<h2>Comb Sort</h2>
			<p>
				<span className="bold">Comb sort</span> is a relatively simple
				sorting algorithm originally designed by Włodzimierz Dobosiewicz
				and Artur Borowy in 1980. Comb sort improves on{" "}
				<span className="bold">bubble sort</span> in the same way that{" "}
				<span className="bold">shellsort</span> improves on{" "}
				<span className="bold">insertion sort</span>.
			</p>
			<p>
				The basic idea is to eliminate{" "}
				<span className="bold">
					<em>turtles</em>
				</span>
				, or small values near the end of the list, since in a bubble
				sort these slow the sorting down tremendously.{" "}
				<span className="bold">
					<em>Rabbits</em>
				</span>
				, large values around the beginning of the list, do not pose a
				problem in bubble sort.
			</p>
			<p>
				In <span className="bold">bubble sort</span>, when any two
				elements are compared, they always have a{" "}
				<span className="bold">
					<em>gap</em>
				</span>{" "}
				(distance from each other) of 1. The basic idea of{" "}
				<span className="bold">comb sort</span> is that the gap can be
				much more than 1. The inner loop of bubble sort, which does the
				actual <em>swap</em>, is modified such that the gap between
				swapped elements goes down (for each iteration of outer loop) in
				steps of a &quot;<span className="bold">shrink factor</span>
				&quot; <em>k</em>: [ <em>n</em>/<em>k</em>, <em>n</em>/_k_2,{" "}
				<em>n</em>/_k_3, ..., 1 ].
			</p>
			<p>
				The <span className="bold">gap</span> starts out as the length
				of the list <em>n</em> being sorted{" "}
				<span className="bold">
					divided by the shrink factor <em>k</em>
				</span>{" "}
				and one pass of the aforementioned modified bubble sort is
				applied with that gap. Then the gap is divided by the shrink
				factor again, the list is sorted with this new gap, and the
				process repeats until the gap is 1. At this point, comb sort
				continues using a gap of 1 until the list is fully sorted. The
				final stage of the sort is thus equivalent to a bubble sort, but
				by this time most turtles have been dealt with, so a bubble sort
				will be efficient.
			</p>
			<p>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/4/46/Comb_sort_demo.gif"
					alt="Comb Sort"
				/>
			</p>
			<p>
				The shrink factor has a great effect on the efficiency of comb
				sort.{" "}
				<span className="bold">
					<em>k</em> = 1.3
				</span>{" "}
				has been suggested as an ideal shrink factor by the authors of
				the original article after empirical testing on over 200,000
				random lists. A value too small slows the algorithm down by
				making unnecessarily many comparisons, whereas a value too large
				fails to effectively deal with turtles, making it require many
				passes with 1 gap size.
			</p>
			<p>
				The pattern of repeated sorting passes with decreasing gaps is{" "}
				<span className="bold">similar to Shellsort</span>, but in
				Shellsort the array is sorted completely each pass before going
				on to the next-smallest gap. Comb sort&#39;s passes do not
				completely sort the elements. This is the reason that Shellsort
				gap sequences have a larger optimal shrink factor of about 2.2.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(n*n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> Yes
			</p>
			<h3 id="implementation">Implementation:</h3>
			<CodeComponent
				code={`function combSort(arr) {
                    let n = arr.length;
                    let gap = n;
                    let swapped = true;
                    
                    while (gap !== 1 || swapped === true) {
                        swapped = false;
                        
                        gap = parseInt((gap * 10) / 13, 10);
                        if (gap < 1) gap = 1;
                        
                        for (let i = 0; i < n - gap; i++) {
                            if (arr[i] > arr[i + gap]) {
                                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                                
                                swapped = true;
                            }
                        }
                    }
                }`}
			/>
			<p>
				Source:{" "}
				<a href="https://en.wikipedia.org/wiki/Comb_sort">Wikipedia</a>
			</p>
		</>
	);
}
