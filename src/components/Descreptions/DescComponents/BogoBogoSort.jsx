import React from "react";

export default function BogoBogoSort() {
	return (
		<>
			<h2>Bogo Bogo Sort</h2>
			<p>
				<span className="bold">Bogobogosort</span> is a sorting
				algorithm based on the popular{" "}
				<span className="bold">bogosort</span>.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				To understand bogobogosort, it is necessary to first have an
				understanding of the finer points of bogosort.
			</p>
			<p>
				<em>Bogosort</em> can be described as follows:
			</p>
			<ol>
				<li>
					Check if your list of number is sorted. If so, stop. If not,
					go to step 2.
				</li>
				<li>Rearrange the list of numbers randomly.</li>
				<li>Go to step 1.</li>
			</ol>
			<p>
				Bogosort is normally characterised as O(<em>n</em> × <em>n!</em>
				). Step 1, the checking if the list is sorted, is assumed to be
				done with some sort of efficient one-pass comparison check,
				which takes <em>n</em>-1 operations. The loop will repeat on
				average <em>n!</em> times, since this is the number of
				permutations of <em>n</em> objects. The product (<em>n</em>-1)
				<em>n!</em> is O(<em>n</em> × <em>n!</em>).
			</p>
			<p>This is far too efficient.</p>
			<p>
				Bogobogosort specifies <em>how</em> one should check if the list
				of numbers is sorted. It does it recursively, because as anyone
				who knows anything at all about computer science knows,
				recursion is always good and cool. To check if the list is
				sorted, use the following procedure:
			</p>
			<ol>
				<li>Make a copy of the list of numbers.</li>
				<li>
					Sort the first <em>n</em>-1 elements of the copy using
					bogobogosort.
				</li>
				<li>
					Check to see if the _n_th element of the sorted copy is
					greater than the highest element of the first <em>n</em>-1
					elements. If so, the copy is now sorted, else randomise the
					order of the elements of the copy and go to step 2.
				</li>
				<li>
					Check to see if the copy is in the same order as the
					original list.
				</li>
			</ol>
			<h3 id="time-complexity-quite-divisive">
				Time Complexity (quite divisive)
			</h3>
			<p>Mike Rosulek writes:</p>
			<blockquote>
				<p>
					I believe bogobogosort is O(<em>n</em> * (<em>n</em>!)
					<em>n</em>).
				</p>
				<p>
					Let BBS(<em>n</em>) be the expected time of bogobogosort on
					input size <em>n</em>, and SC(<em>n</em>) the expected time
					of the sort checking algorithm on input size <em>n</em>.
					Then
				</p>
				<blockquote>
					<p>
						BBS(<em>n</em>) = SC(<em>n</em>) + (1 - 1/<em>n</em>!)
						BBS(<em>n</em>)<br />
						// with probability 1/<em>n</em>!, we finish, otherwise
						repeat BBS(<em>n</em>){" "}
					</p>
					<p>
						SC(<em>n</em>) = O(<em>n</em>) + BBS(<em>n</em>-1) +
						(1-1/<em>n</em>)( BBS(<em>n</em>-1) + O(<em>n</em>) )
						<br />
						// with probability 1/<em>n</em>, the <em>n</em>-th guy
						is the largest, otherwise must shuffle and re-sort the
						first <em>n</em>-1 guys
					</p>
				</blockquote>
				<p>
					Then substituting in for SC (skipping some simplifications -
					the (1-1/<em>n</em>)*O(<em>n</em>) factor gets swallowed by
					the first O(<em>n</em>)):
				</p>
				<blockquote>
					<p>
						BBS(<em>n</em>) = O(<em>n</em>) + BBS(<em>n</em>-1) +
						(1-1/<em>n</em>) BBS(<em>n</em>-1) + (1-1/<em>n</em>!)
						BBS(<em>n</em>)<br />
						// multiply by <em>n</em>!<br />
						<em>n</em>! * BBS(<em>n</em>) = O(<em>n</em>
						<em>
							<em>n</em>!) + <em>n</em>! ( BBS(<em>n</em>) + 2
							BBS(<em>n</em>-1) ) - BBS(<em>n</em>) - (<em>n</em>
							-1)!
							<em>
								BBS(<em>n</em>-1)
								<br />
								// rearrange
								<br />
								BBS(<em>n</em>) = O(<em>n</em>
							</em>
							<em>n</em>!) + (2_n_! - (<em>n</em>-1)!)BBS(
							<em>n</em>-1)
							<br />= O(<em>n</em>
						</em>
						<em>n</em>!) + O(<em>n</em>!) * BBS(<em>n</em>-1)
						<br />= O(<em>n</em>
						<em>
							<em>n</em>!) + O(<em>n</em>
						</em>
						(<em>n</em>!)2) + ... + O(<em>n</em>
						<em>
							(<em>n</em>!)<em>n</em>)<br />= O(<em>n</em>
						</em>
						(<em>n</em>!)<em>n</em>)
					</p>
				</blockquote>
			</blockquote>
			<p>Nathan Collins, on the other hand, writes:</p>
			<blockquote>
				<p>
					Let B(<em>n</em>) be the time complexity of bogobogosort on
					an input of size <em>n</em>. From the original analysis of
					bogosort we expect to try <em>n</em>! times before the
					random shuffle sorts the list. So,
				</p>
				<blockquote>
					<p>
						B(<em>n</em>) ≤ <em>n</em>!*(Copy(<em>n</em>) + Check(
						<em>n</em>) + Randomize(<em>n</em>))
					</p>
				</blockquote>
				<p>
					Making a copy of the list is O(<em>n</em>) (assuming the
					size of the numbers is bounded). To randomize, you can drop
					all the numbers on the floor. Dropping them is O(1), and it
					takes O(<em>n</em>) to pick them up and put them back in the
					computer (assuming you only have O(1) many hands).
				</p>
				<p>
					To check if the original list is sorted we need to
					bogobogosort the first <em>n</em>-1 elements of the copy,
					and then see if the last element of the copy is at least as
					large as the <em>n</em>-1st. If the _n_th element of the
					copy isn&#39;t maximal we need to randomize the copy again.
					And, finally, when we have managed to sort the copy, we need
					to compare it to the original list. So, since the chance
					that the last element is maximal is at least 1/<em>n</em>,
					we have:
				</p>
				<blockquote>
					<p>
						Check(<em>n</em>) ≤ <em>n</em>*(B(<em>n</em>-1) + Max(2)
						+ Randomize(<em>n</em>)) + Compare(<em>n</em>)
					</p>
				</blockquote>
				<p>giving</p>
				<blockquote>
					<p>
						B(<em>n</em>) ≤ <em>n</em>!
						<em>
							(Copy(<em>n</em>) + (<em>n</em>
						</em>
						(B(<em>n</em>-1) + Max(2) + Randomize(<em>n</em>)) +
						Compare(<em>n</em>)) + Randomize(<em>n</em>))
					</p>
				</blockquote>
				<p>
					Comparing the two <em>n</em>-element lists is O(<em>n</em>),
					so we have
				</p>
				<blockquote>
					<p>
						B(<em>n</em>) ≤ <em>n</em>!
						<em>
							(O(<em>n</em>) + (<em>n</em>
						</em>
						(B(<em>n</em>-1) + O(1) + O(<em>n</em>)) + O(<em>n</em>
						)) + O(<em>n</em>))
						<br />= <em>n</em>!
						<em>
							(O(<em>n</em>) + <em>n</em>
						</em>
						(B(<em>n</em>-1) + O(<em>n</em>)))
						<br />= <em>n</em>!
						<em>
							(<em>n</em>
						</em>
						(B(<em>n</em>-1) + O(1) + O(<em>n</em>))
						<br />= <em>n</em>!
						<em>
							(<em>n</em>
						</em>
						(B(<em>n</em>-1) + <em>n</em>*O(1)))
					</p>
				</blockquote>
				<p>
					using O(<em>n</em>) = <em>n</em>*O(1) and O(1) + O(
					<em>n</em>) = O(<em>n</em>). Expanding B(<em>n</em>-1)
					recursively we get
				</p>
				<blockquote>
					<p>
						B(<em>n</em>) = <em>n</em>!<em>_n_2</em>O(1) +{" "}
						<em>n</em>!<em>_n_2</em>(<em>n</em>-1)!
						<em>
							(<em>n</em>-1)2
						</em>
						O(1){" "}
					</p>
					<ul>
						<li>
							<em>n</em>!<em>_n_2</em>(<em>n</em>-1)!
							<em>
								(<em>n</em>-1)2
							</em>
							(<em>n</em>-2)!
							<em>
								(<em>n</em>-2)2
							</em>
							O(1) + ...{" "}
						</li>
						<li>
							<em>n</em>!<em>_n_2</em>(<em>n</em>-1)!
							<em>
								(<em>n</em>-1)2
							</em>
							(<em>n</em>-2)!
							<em>
								(<em>n</em>-2)2
							</em>
							...<em>2!22</em>1!<em>12</em>O(1)
						</li>
					</ul>
				</blockquote>
				<p>
					Now, the constant O(1) is the same for all terms above, and
					the _n_th term bounds the first <em>n</em>-1 terms. So,
					replacing with the last term throughout, we get
				</p>
				<blockquote>
					<p>
						B(<em>n</em>) ≤ <em>n</em>
						<em>
							<em>n</em>!
						</em>
						_n_2*(<em>n</em>-1)!
						<em>
							(<em>n</em>-1)2
						</em>
						(n-2)!
						<em>
							(<em>n</em>-2)2
						</em>
						...<em>2!22</em>1!<em>12</em>O(1)
						<br />= <em>n</em>!
						<em>
							<em>n</em>!
						</em>
						<em>n</em>!
						<em>
							<em>n</em>!
						</em>
						(n-2)!<em>(n-3)!</em>...*4!*3!*O(1)
					</p>
				</blockquote>
				<p>
					by folding the square terms and the leading n into the
					smaller factorials, and absorbing a 2 into the constant. So
				</p>
				<blockquote>
					<p>
						B(<em>n</em>) = O(<em>n</em>!
						<em>
							<em>n</em>!
						</em>
						<em>n</em>!
						<em>
							<em>n</em>!
						</em>
						(<em>n</em>-2)!
						<em>
							(<em>n</em>-3)!
						</em>
						...*(<em>k</em>+1)!)
					</p>
				</blockquote>
				<p>
					where <em>k</em> is any fixed number and we have absorbed
					factorials less than (<em>k</em>+1)! into the constant.
					Noting that we could bound each (<em>n</em>-<em>j</em>)! by{" "}
					<em>n</em>! we can simplify the bound to B(<em>n</em>) = O(
					<em>n</em>!<em>n</em>-<em>k</em>), for any fixed <em>k</em>.
				</p>
				<p>
					Now O(<em>n</em>!<em>n-k</em>) is much better than your
					guess of O(<em>n</em>!<em>n</em>!), making bogobogosort even
					more attractive.
				</p>
			</blockquote>
			<p>
				<span className="bold">Time complexity:</span> O(?)
			</p>
			<p>
				Source:{" "}
				<a href="https://www.dangermouse.net/esoteric/bogobogosort.html">
					dangermouse
				</a>
			</p>
		</>
	);
}
