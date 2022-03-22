import React from "react";
import CodeComponent from "../CodeComponent";

export default function GravitySort() {
	return (
		<>
			<h2>Gravity Sort</h2>
			<p>
				<span className="bold">Gravity sort</span> (also called{" "}
				<span className="bold">bead sort</span>) is a natural sorting
				algorithm. Both digital and analog hardware implementations of
				bead sort can achieve a sorting time of O(n); however, the
				implementation of this algorithm tends to be significantly
				slower in software and can{" "}
				<span className="bold">
					only be used to sort lists of positive integers
				</span>
				.
			</p>
			<p>
				This is a perfect example of an algorithm where{" "}
				<span className="bold">
					the hardware implementation is significantly faster than the
					software implementation
				</span>{" "}
				is to contrary to the common belief that software has to be
				faster than corresponding hardware (think of{" "}
				<span className="bold">mechanical calculators</span>)
			</p>
			<p>
				This is because sorting step is done by Gravity (a natural
				physical force) and this step takes place in parrallel in one
				step. In software, this step takes a minimum of m clock cycles.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				The bead sort operation can be compared to the manner in which
				beads slide on parallel poles, such as on an{" "}
				<span className="bold">abacus</span>. However, each pole may
				have a distinct number of beads. Initially, it may be helpful to
				imagine the beads suspended on vertical poles.
			</p>
			<p>
				<img
					src="https://media.geeksforgeeks.org/wp-content/uploads/Bead_sort_1.jpg"
					alt="BSV"
				/>
			</p>
			<p>
				Sorting of {(7, 2, 1, 4, 2)} using Gravity Sort. Beads fall down
				one by one if there is space below.
			</p>
			<ol>
				<li>
					Like in the image above the beads represent the following
					numbers from top to bottom : 7, 2, 1, 4, 2. Now, imagine
					that this is the position of the beads at time{" "}
					<span className="bold">t = 0</span> and with every passing
					second the beads will fall down by one level provided there
					is no bead already present below them. In such a case, they
					just rest upon the bead below them.(Rods are numbered from
					left to right and levels are numbered from the bottom as 1,
					2, ………. n.)
				</li>
				<li>
					Now, at time <span className="bold">t = 1</span> the bottom
					2 beads in the first two rods from the left stay at their
					positions while the second bead from the top from the second
					rod comes down by one level to rest upon the bead below it.
					The beads in the 3rd and 4th rod at level 2 come down to
					level 1. Simultaneously, the beads in the rods 3 to 7 come
					down by one level. Now, the numbers from top to bottom
					become: 2, 6, 2, 2, 4.
				</li>
				<li>
					This goes on till time <span className="bold">t = 4</span>{" "}
					where we get the sorted sequence of numbers from top to
					bottom which is: 1, 2, 2, 4, 7.
				</li>
			</ol>
			<p>
				<span className="bold">Time Complexity:</span> O(n)
				<br />
				<span className="bold">Auxilary Space:</span> O(n*n)
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function gravitySort(arr, max) {
    let n = arr.length;
    let beads = [];

    for (let i = 0; i < max * n; i++) {
        beads.push(0);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr[i]; j++) {
            beads[i * max + j] = 1;
        }
    }

    for (let j = 0; j < max; j++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += beads[i * max + j];
            beads[i * max + j] = 0;
        }

        for (let i = n - sum; i < n; i++) {
            beads[i * max + j] = 1;
        }
    }

    for (let i = 0; i < n; i++) {
        let j = 0;
        while (j < max && beads[i * max + j] === 1) {
            j++;
        }
        arr[i] = j;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://iq.opengenus.org/bead-sort/">OpenGenus</a>,{" "}
				<a href="https://www.geeksforgeeks.org/bead-sort-natural-sorting-algorithm/">
					GeeksforGeeks
				</a>
			</p>
		</>
	);
}
