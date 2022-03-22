import React from "react";

export default function IntelligentDesignSort() {
	return (
		<>
			<h2>Intelligent Design Sort</h2>
			<p>
				<span className="bold">Intelligent design</span> sort is a
				sorting algorithm based on the theory of{" "}
				<a href="http://en.wikipedia.org/wiki/Intelligent_design">
					intelligent design
				</a>
				.
			</p>
			<h3 id="algorithm">Algorithm</h3>
			<p>
				The probability of the original input list being in the exact
				order it&#39;s in is 1/(<em>n!</em>). There is such a small
				likelihood of this that it&#39;s clearly absurd to say that this
				happened by chance, so it must have been consciously put in that
				order by an intelligent Sorter. Therefore it&#39;s safe to
				assume that it&#39;s already optimally Sorted in some way that
				transcends our naïve mortal understanding of &quot;ascending
				order&quot;. Any attempt to change that order to conform to our
				own preconceptions would actually make it <em>less</em> sorted.
			</p>
			<h3 id="analysis">Analysis</h3>
			<p>
				This algorithm is constant in time, and sorts the list in-place,
				requiring <em>no</em> additional memory at all. In fact, it
				doesn&#39;t even require <em>any</em> of that suspicious
				technological computer stuff. Praise the Sorter!
			</p>
			<h3 id="community-feedback">Community Feedback</h3>
			<p>Gary Rogers writes:</p>
			<blockquote>
				<p>
					Making the sort constant in time denies the power of The
					Sorter. The Sorter exists outside of time, thus the sort is
					timeless. To require time to validate the sort dimishes the
					role of the Sorter. Thus... this particular sort is flawed,
					and can not be attributed to &#39;The Sorter&#39;.
				</p>
			</blockquote>
			<p>Heresy!</p>
			<p>In contrast, Krishna Kumar writes:</p>
			<blockquote>
				<p>
					A corollary: All elements are created equal under the
					Sorter.
				</p>
				<p>
					Proof: Take a random permutation of the input list; this
					second list is also Sorted by the same argument as above.
					This means that any two elements in the two lists with the
					same index are equal to each other. But the second list was
					a random permutation; which indicates that every element in
					the original list is equal to every other element. QED.
				</p>
			</blockquote>
			<p>So it seems the Sorter is benevolent in His munificence!</p>
			<p>
				<span className="bold">Auxilary Space:</span> SUPERB
				<br />
				<span className="bold">Auxilary Space:</span> AWE-INSPIRING
				<br />
				<span className="bold">Stable:</span> THOROUGHLY
				<br />
				<span className="bold">In Place:</span> CERTAINLY
			</p>
			<p>
				Source:{" "}
				<a href="https://www.dangermouse.net/esoteric/intelligentdesignsort.html">
					dangermouse
				</a>
			</p>
		</>
	);
}
