import React from "react";
import CodeComponent from "../CodeComponent";

export default function FaithSort() {
	return (
		<>
			<h2>Faith Sort</h2>
			<h3>Implementation</h3>
			<CodeComponent
				code={`/*
* Input: unsorted array arr of length len
* Output: sorted(?) array
* Runtime: O(?)
*/
function faithSort(arr, n)
{
    /* Dear Lord,
    *
    * Thank you for this array that you have given us, blessed be
    * thy name.
    *
    * In all your might, sort this array, such that each element is
    * equal or greater than the previous one so we may continue to
    * compute on this data.
    *
    * In your everlasting glory,
    * Amen.
    */ 
    return arr;
}`}
			/>
			<p>
				Source:{" "}
				<a href="https://www.reddit.com/r/programming/comments/1txefj/bogobogosort/cecjjal/">
					reddit
				</a>
			</p>
		</>
	);
}
