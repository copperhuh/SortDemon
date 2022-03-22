import React from "react";
import CodeComponent from "../CodeComponent";

export default function BozoSort() {
	return (
		<>
			<h2>Bozo Sort</h2>
			<p>
				<span className="bold">BozoSort</span> is a random sorting
				algorithms where the key idea is to swap{" "}
				<span className="bold">any two elements</span> of the list{" "}
				<span className="bold">randomly</span> and check if the list is
				sorted. It is similar to <span className="bold">BogoSort</span>{" "}
				with distinct differences.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				The key idea of Bozosort is the put more intelligence in the
				algorithm than BogoSort. For this, in Bozosort, we randomly swap
				two elements at a time and check if the list is sorted.
			</p>
			<p>
				If the correct sets of elements are swapped, the list is infact
				sorted. Following are the general steps:
			</p>
			<ul>
				<li>Step 1: Get the list</li>
				<li>
					Step 2: Check if the list is sort. If not, go to step 3 or
					else, go to step 5.
				</li>
				<li>Step 3: Select two random elements and swap them</li>
				<li>Step 4: Go to step 2</li>
				<li>Step 5: The list is sorted. Enjoy.</li>
			</ul>
			<h3 id="time-complexity">Time Complexity</h3>
			<ul>
				<li>
					Worst-case time complexity:{" "}
					<span className="bold">O(infinite)</span>
				</li>
			</ul>
			<p>
				It is not guaranteed that we get the sorted permutation at some
				point after switching the elements a certain number of times.
				Although its probability is infinitesimally low, there’s a
				chance that we do not get the sorted order even after gazillions
				of switches.{" "}
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
				code={`function bozoSort(arr) {
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
        let rand1 = Math.floor(Math.random() * n);
        let rand2 = Math.floor(Math.random() * n);

        let temp = arr[rand1];
        arr[rand1] = arr[rand2];
        arr[rand2] = temp;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://iq.opengenus.org/bozosort/">OpenGenus</a>
			</p>
		</>
	);
}
