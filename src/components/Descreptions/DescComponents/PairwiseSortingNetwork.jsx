import React from "react";
import CodeComponent from "../CodeComponent";

export default function PairwiseSortingNetwork() {
	return (
		<>
			<h2>Pairwise Sorting Network</h2>
			<p>
				The <span className="bold">pairwise sorting network</span> is a{" "}
				<span className="bold">sorting network</span> discovered and
				published by Ian Parberry in 1992 in Parallel Processing
				Letters. The pairwise sorting network has the same size (number
				of comparators) and depth as the odd-even mergesort network. The
				network was one of several known networks with a depth of O(2
				log n).
			</p>
			<p>
				The sorting procedure implemented by the network is as follows:
			</p>
			<ol>
				<li>
					Sort consecutive pairwise bits of the input (corresponds to
					the first layer of the diagram)
				</li>
				<li>
					Sort all pairs into lexicographic order by recursively
					sorting all odd bits and even bits separately (corresponds
					to the next 14 layers of the diagram)
				</li>
				<li>
					Sort the pairs in nondecreasing order using a specialized
					network (corresponds to the final layers of the diagram)
				</li>
			</ol>
			<p>
				The pairwise sorting network is very similar to the Batcher
				odd-even mergesort, but differs in the structure of operations.
				While Batcher repeatedly divides, sorts and merges increasingly
				longer subsequences, the pairwise method does all the
				subdivision first, then does all the merging at the end in the
				reverse sequence. In certain applications like encoding
				cardinality constraints, the pairwise sorting network is
				superior to the Batcher network.
			</p>
			<p>
				<span className="bold">Time Complexity:</span> O(2n log n log n)
				<br />
				<span className="bold">Auxilary Space:</span> O(2n log n log n)
				<br />
				<span className="bold">Stable:</span> No
				<br />
				<span className="bold">In Place:</span> No
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`function pairwiseSortingNetwork(arr) {
    let n = arr.length;
    let a = 1;
    while (a < n) {
        let b = a;
        let c = 0;
        while (b < n) {
            if (arr[b - a] > arr[b]) {
                [arr[b], arr[b - a]] = [arr[b - a], arr[b]];
            }

            b++;
            c++;
            if (c >= a) {
                c = 0;
                b += a;
            }
        }
        a *= 2;
    }

    a = Math.floor(a / 4); 
    let e = 1;
    while (a > 0) {
        let d = e;
        while (d > 0) {
            let b = (d + 1) * a;
            let c = 0;
            while (b < n) {
                if (arr[b - d * a] > arr[b]) {
                    [arr[b], arr[b - d * a]] = [
                        arr[b - d * a],
                        arr[b],
                    ];
                }

                c++;
                b++;
                if (c >= a) {
                    c = 0;
                    b += a;
                }
            }
            d = Math.floor(d / 2);
        }
        a = Math.floor(a / 2);
        e = 2 * e + 1;
    }
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://en.wikipedia.org/wiki/Pairwise_sorting_network">
					Wikipedia
				</a>
			</p>
		</>
	);
}
