import React from "react";
import CodeComponent from "../CodeComponent";

export default function BogoSort() {
	return (
		<>
			<h2>Bogo Sort</h2>
			<p>
				<span className="bold">Bogo sort</span> is an algorithm used to
				sort the elements of an array by randomly generating different
				permutations of an array and then checking whether it is sorted
				or not. It’s based on the generate-and-test paradigm. Other
				names for bogo sort include permutation sort, stupid sort, slow
				sort, shotgun sort, or monkey sort.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				<span className="bold">Step 1:</span> Check if the array is
				already sorted or not. If yes, then print the array, else
				<br />
				<span className="bold">Step 2:</span> Generate a random
				permutation (not necessarily different from previously
				generated) and go to <span className="bold">Step 1.</span>
			</p>
			<h3 id="time-complexity">Time Complexity</h3>
			<ul>
				<li>
					Worst-case time complexity:{" "}
					<span className="bold">O(infinite)</span>
				</li>
			</ul>
			<p>
				It is not guaranteed that we get the sorted permutation at some
				point after shuffling the array a certain number of times.
				Although its probability is infinitesimally low, there’s a
				chance that we do not get the sorted order even after gazillions
				of shuffling.{" "}
			</p>
			<ul>
				<li>
					Average-case time complexity:{" "}
					<span className="bold">O(n! * n)</span>
				</li>
			</ul>
			<p>
				There are n! permutations, only one of which is sorted. So, we
				would expect to get the correct answer after about O(n!)
				iterations. And each shuffle/check operation is itself O(n).{" "}
			</p>
			<ul>
				<li>
					Best-case time complexity:{" "}
					<span className="bold">O(n)</span>
				</li>
			</ul>
			<p>
				When the given array is already sorted, the program terminates
				just after checking if the array is sorted once, which takes
				O(n) time to execute.
			</p>
			<p>
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function bogoSort(arr) {
    let n = arr.length;

    function isSorted() {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    while (!isSorted()) {
        let random;
        for (let i = 0; i < n; i++) {
            random = Math.floor(Math.random() * n);
            
            let temp = arr[random];
            arr[random] = arr[i];
            arr[i] = temp;
        }
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.interviewkickstart.com/learn/bogo-sort-algorithm">
					interviewkickstart
				</a>
			</p>
		</>
	);
}
