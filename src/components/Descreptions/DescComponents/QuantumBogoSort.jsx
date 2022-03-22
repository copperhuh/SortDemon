import React from "react";
import CodeComponent from "../CodeComponent";

export default function QuantumBogoSort() {
	return (
		<>
			<h2>Quantum Bogo Sort</h2>
			<p>
				<span className="bold">QuantumBogoSort</span> is a quantum
				sorting algorithm which can sort any list in O(1), using the
				&quot;many worlds&quot; interpretation of{" "}
				<span className="bold">quantum mechanics</span>.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<ol>
				<li>
					<p>
						Quantumly randomise the list, such that there is no way
						of knowing what order the list is in until it is
						observed. This will divide the universe into O(n!)
						universes; however, the division has no cost, as it
						happens constantly anyway.
					</p>
				</li>
				<li>
					<p>
						If the list is not sorted, destroy the universe. (This
						operation is left as an exercise to the reader.)
					</p>
				</li>
				<li>
					<p>
						All remaining universes contain lists which are sorted.
					</p>
				</li>
			</ol>
			<h3 id="stability">Stability</h3>
			<p>
				As described above, is not a StableSort. A stable version might
				be produced as follows:
			</p>
			<ol>
				<li>
					<p>
						Configure the quantum randomiser to produce random code,
						rather than shuffle lists. Instruct it to generate some
						code.
					</p>
				</li>
				<li>
					<p>
						If the resulting code is not a stable QuantumBogoSort,
						destroy the universe.
					</p>
				</li>
				<li>
					<p>
						All remaining universes now have a stable
						QuantumBogoSort algorithm.
					</p>
				</li>
			</ol>
			<p>
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Auxilary Space:</span> O(1)
				<br />
				<span className="bold">Stable:</span> No, but can be easily
				implemented
				<br />
				<span className="bold">In Place:</span> Somewhere
			</p>
			<h3>Implementation</h3>
			<CodeComponent
				code={`//
// Better left unknown...
//`}
			/>
			<p>
				Source: <a href="http://wiki.c2.com/?QuantumBogoSort">wik.c2</a>
			</p>
		</>
	);
}
