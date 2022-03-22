import React from "react";
import CodeComponent from "../CodeComponent";

export default function CocktailShakerSort() {
	return (
		<>
			<h2 id="cocktail-sort">Cocktail Shaker Sort</h2>
			<p>
				Cocktail Shaker Sort is a variation of{" "}
				<span className="bold">BubbleSort</span>. The Bubble sort
				algorithm always traverses elements from left and moves the
				largest element to its correct position in first iteration and
				second largest in second iteration and so on. Cocktail Shaker
				Sort traverses through a given array in both directions
				alternatively.{" "}
			</p>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif"
				alt="cocktail shaker sort"
			/>
			<h4>Algorithm:</h4>
			<p>
				<br />
				Each iteration of the algorithm is broken up into 2 stages:
			</p>
			<ol>
				<li>
					The first stage loops through the array from left to right,
					just like the Bubble Sort. During the loop, adjacent items
					are compared and if value on the left is greater than the
					value on the right, then values are swapped. At the end of
					first iteration, largest number will reside at the end of
					the array.
				</li>
				<li>
					The second stage loops through the array in opposite
					direction - starting from the item just before the most
					recently sorted item, and moving back to the start of the
					array. Here also, adjacent items are compared and are
					swapped if required.
				</li>
			</ol>
			<h4>Example:</h4>
			<br />
			<p>Let us consider an example array (5 1 4 2 8 0 2)</p>
			<p>
				<span className="bold">First Forward Pass:</span>
				<br />(<span className="bold">5 1</span> 4 2 8 0 2) –&gt; (
				<span className="bold">1 5</span> 4 2 8 0 2) Swap since 5 &gt; 1
				<br />
				(1 <span className="bold">5 4</span> 2 8 0 2) –&gt; (1{" "}
				<span className="bold">4 5</span> 2 8 0 2) Swap since 5 &gt; 4
				<br />
				(1 4 <span className="bold">5 2</span> 8 0 2) –&gt; (1 4{" "}
				<span className="bold">2 5</span> 8 0 2) Swap since 5 &gt; 2
				<br />
				(1 4 2 <span className="bold">5 8</span> 0 2) –&gt; (1 4 2{" "}
				<span className="bold">5 8</span> 0 2)
				<br />
				(1 4 2 5 <span className="bold">8 0</span> 2) –&gt; (1 4 2 5{" "}
				<span className="bold">0 8</span> 2) Swap since 8 &gt; 0<br />
				(1 4 2 5 0 <span className="bold">8 2</span>) –&gt; (1 4 2 5 0{" "}
				<span className="bold">2 8</span>) Swap since 8 &gt; 2{" "}
			</p>
			<p>
				After first forward pass, greatest element of the array will be
				present at the last index of array.{" "}
			</p>
			<p>
				<span className="bold">First Backward Pass:</span>
				<br />
				(1 4 2 5 <span className="bold">0 2</span> 8) –&gt; (1 4 2 5{" "}
				<span className="bold">0 2</span> 8)
				<br />
				(1 4 2 <span className="bold">5 0</span> 2 8) –&gt; (1 4 2{" "}
				<span className="bold">0 5</span> 2 8) Swap since 5 &gt; 0<br />
				(1 4 <span className="bold">2 0</span> 5 2 8) –&gt; (1 4{" "}
				<span className="bold">0 2</span> 5 2 8) Swap since 2 &gt; 0
				<br />
				(1 <span className="bold">4 0</span> 2 5 2 8) –&gt; (1{" "}
				<span className="bold">0 4</span> 2 5 2 8) Swap since 4 &gt; 0
				<br />(<span className="bold">1 0</span> 4 2 5 2 8) –&gt; (
				<span className="bold">0 1</span> 4 2 5 2 8) Swap since 1 &gt; 0{" "}
			</p>
			<p>
				After first backward pass, smallest element of the array will be
				present at the first index of the array.{" "}
			</p>
			<p>
				<span className="bold">Second Forward Pass:</span>
				<br />
				(0 <span className="bold">1 4</span> 2 5 2 8) –&gt; (0{" "}
				<span className="bold">1 4</span> 2 5 2 8)
				<br />
				(0 1 <span className="bold">4 2</span> 5 2 8) –&gt; (0 1{" "}
				<span className="bold">2 4</span> 5 2 8) Swap since 4 &gt; 2
				<br />
				(0 1 2 <span className="bold">4 5</span> 2 8) –&gt; (0 1 2{" "}
				<span className="bold">4 5</span> 2 8)
				<br />
				(0 1 2 4 <span className="bold">5 2</span> 8) –&gt; (0 1 2 4{" "}
				<span className="bold">2 5</span> 8) Swap since 5 &gt; 2{" "}
			</p>
			<p>
				<span className="bold">Second Backward Pass:</span>
				<br />
				(0 1 2 <span className="bold">4 2</span> 5 8) -&gt; (0 1 2{" "}
				<span className="bold">2 4</span> 5 8) Swap since 4 &gt; 2<br />
				Now, the array is already sorted, but our algorithm doesn’t know
				if it is completed. The algorithm needs to complete this whole
				pass without any <span className="bold">swaps</span> to know it
				is sorted.
				<br />
				(0 1 <span className="bold">2 2</span> 4 5 8) -&gt; (0 1{" "}
				<span className="bold">2 2</span> 4 5 8)
				<br />
				(0 <span className="bold">1 2</span> 2 4 5 8) -&gt; (0{" "}
				<span className="bold">1 2</span> 2 4 5 8)
			</p>

			<p>
				<span className="bold">Time Complexity:</span> O(n*n)
				<br />
				<span className="bold">Auxiliary Space:</span> O(1)
				<br />
				<span className="bold">Sorting In Place:</span> Yes
				<br />
				<span className="bold">Stable:</span> Yes
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function cocktailShakerSort(arr){
    let swapped = true;
    let start = 0;
    let end = arr.length;

    while (swapped === true) {
        
        swapped = false;
        
        for (let i = start; i < end - 1; ++i) {
            if (arr[i] > arr[i + 1]) {
                
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                
                swapped = true;
            }
        }
        if (swapped === false) break;
        
        swapped = false;
        end = end - 1;

        for (let i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) {
                
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

                swapped = true;
            }
        }
        start = start + 1;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.geeksforgeeks.org/cocktail-sort/">
					GeeksforGeeks
				</a>
			</p>
		</>
	);
}
