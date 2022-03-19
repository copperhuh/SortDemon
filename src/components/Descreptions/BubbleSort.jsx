import React from "react";
import CodeComponent from "./CodeComponent";

export default function BubbleSort() {
	return (
		<>
			<h2 id="bubble-sort">Bubble Sort</h2>
			<p>
				<span className="bold">Bubble sort</span> is a sorting algorithm
				that compares two adjacent elements and swaps them until they
				are not in the intended order.
			</p>
			<p>
				Just like the movement of air bubbles in the water that rise up
				to the surface, each element of the array move to the end in
				each iteration. Therefore, it is called a bubble sort.{" "}
			</p>
			<h4>Steps:</h4>
			<br />
			<p>
				<span className="bold">
					1. First Iteration (Compare and Swap)
				</span>
			</p>
			<ol>
				<li>
					Starting from the first index, compare the first and the
					second elements.
				</li>
				<li>
					If the first element is greater than the second element,
					they are swapped.
				</li>
				<li>
					Now, compare the second and the third elements. Swap them if
					they are not in order.
				</li>
				<li>The above process goes on until the last element.</li>
			</ol>
			<p>
				<span className="bold">2. Remaining Iteration</span>
			</p>
			<p>
				The same process goes on for the remaining iterations. After
				each iteration, the largest element among the unsorted elements
				is placed at the end. <br />
				In each iteration, the comparison takes place up to the last
				unsorted element. The array is sorted when all the unsorted
				elements are placed at their correct positions.
			</p>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif"
				alt="bubble sort"
			/>
			<h4>Example:</h4>
			<p>
				<br />
				<span className="bold">First Pass:</span>
				<br />( <span className="bold">5</span>{" "}
				<span className="bold">1</span> 4 2 8 ) –&gt; ({" "}
				<span className="bold">1</span> <span className="bold">5</span>{" "}
				4 2 8 ) <br />
				Here, algorithm compares the first two elements, and swaps since
				5 &gt; 1.
				<br />( 1 <span className="bold">5</span>{" "}
				<span className="bold">4</span> 2 8 ) –&gt; ( 1{" "}
				<span className="bold">4</span> <span className="bold">5</span>{" "}
				2 8 ) <br />
				Swap since 5 &gt; 4<br />( 1 4 <span className="bold">
					5
				</span>{" "}
				<span className="bold">2</span> 8 ) –&gt; ( 1 4{" "}
				<span className="bold">2</span> <span className="bold">5</span>{" "}
				8 ) <br />
				Swap since 5 &gt; 2<br />( 1 4 2 <span className="bold">
					5
				</span>{" "}
				<span className="bold">8</span> ) –&gt; ( 1 4 2{" "}
				<span className="bold">5</span> <span className="bold">8</span>{" "}
				) <br />
				Now, since these elements are already in order (8 &gt; 5),
				algorithm does not swap them.{" "}
			</p>
			<p>
				<span className="bold">Second Pass:</span>
				<br />( <span className="bold">1</span>{" "}
				<span className="bold">4</span> 2 5 8 ) –&gt; ({" "}
				<span className="bold">1</span> <span className="bold">4</span>{" "}
				2 5 8 )<br />( 1 <span className="bold">4</span>{" "}
				<span className="bold">2</span> 5 8 ) –&gt; ( 1{" "}
				<span className="bold">2</span> <span className="bold">4</span>{" "}
				5 8 ) <br />
				Swap since 4 &gt; 2<br />( 1 2 <span className="bold">
					4
				</span>{" "}
				<span className="bold">5</span> 8 ) –&gt; ( 1 2{" "}
				<span className="bold">4</span> <span className="bold">5</span>{" "}
				8 )<br />( 1 2 4 <span className="bold">5</span>{" "}
				<span className="bold">8</span> ) –&gt; ( 1 2 4{" "}
				<span className="bold">5</span> <span className="bold">8</span>{" "}
				){" "}
			</p>
			<p>
				Now, the array is <span className="bold">already sorted</span>,
				but our algorithm does not know if it is completed. The
				algorithm will do as many passes as there are elements -{" "}
				<span className="bold">at no point</span> does it check whether
				the elements are <span className="bold">already sorted</span>.{" "}
			</p>
			<p>
				<span className="bold">Third, Fourth and Fith Pass</span>
				<br />( <span className="bold">1</span>{" "}
				<span className="bold">2</span> 4 5 8 ) –&gt; ({" "}
				<span className="bold">1</span> <span className="bold">2</span>{" "}
				4 5 8 )<br />( 1 <span className="bold">2</span>{" "}
				<span className="bold">4</span> 5 8 ) –&gt; ( 1{" "}
				<span className="bold">2</span> <span className="bold">4</span>{" "}
				5 8 )<br />( 1 2 <span className="bold">4</span>{" "}
				<span className="bold">5</span> 8 ) –&gt; ( 1 2{" "}
				<span className="bold">4</span> <span className="bold">5</span>{" "}
				8 )<br />( 1 2 4 <span className="bold">5</span>{" "}
				<span className="bold">8</span> ) –&gt; ( 1 2 4{" "}
				<span className="bold">5</span> <span className="bold">8</span>{" "}
				)
			</p>
			<p>
				<span className="bold">Average Case Time Complexity:</span>{" "}
				O(n*n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(1)
				<br />
				<span className="bold">Sorting In Place:</span> Yes
				<br />
				<span className="bold">Stable:</span> Yes
				<br />
			</p>
			<h3>Implementation:</h3>
			<CodeComponent
				code={`function bubbleSort(arr){
    let i = 0;
    
    while (i < arr.length){
        let j = 0;
        while (j < arr.length - 1){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            j++;
        }
        i++;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.geeksforgeeks.org/bubble-sort/">
					GeeksforGeeks
				</a>
				,{" "}
				<a href="https://www.programiz.com/dsa/bubble-sort">
					Programiz
				</a>
			</p>
		</>
	);
}
