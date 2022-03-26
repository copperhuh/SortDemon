# SORT DEMON - Visualization of Sorting Algorithms

A website that is a visualizer of over 30 unique sorting algorithms, allowing for custom delay time and input array size. Its purpose is to be a handy tool for learning the concept of sorting algorithms, as well as to highlight the fact that, in computer science, such rudimentary task as sorting an array can be performed in so many different ways. This is a personal project of mine with which I wanted to test my React, Redux, and Styled Components skills.

## Demo

[Github Pages](https://github.com/copperhuh/SortDemon)

## Table of Contents

[Technologies](#Technologies)  
[Run Locally](#Run-Locally)  
[How It Works](#How-It-Works)  
[Inspiration](#Inspiration)  
[Appendix](#Appendix)  
[Author](#Author)  
[Feedback](#Feedback)

## Technologies

#### Main

-   **React**
-   **Redux** (with react-redux)
-   **Styled Components**

#### Other

-   **Material UI** (icons and slider component)
-   **Framer Motion** (animating responsive sidebars and modals)
-   **react-animate-height** (animating collapsable list elements)
-   **react-code-blocks** (code snippet component in descriptions)
-   **Create React App** (initial project template)
-   **Github Pages** (hosting demo)

## Run Locally

Clone the project

```bash
  git clone https://github.com/copperhuh/SortDemon
```

Go to the project directory

```bash
  cd SortDemon
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## How It Works

Since I am quite proud of how the visualization feature was implemented, I will explain how it works the best that I can.

To put it plainly, all logic takes place in a custom **hook**, that calls an **async function** that yields from a **generator function** specific to the chosen sorting algorithm.

### The Generator

Each sorting algorithm has its **own generator** function. I will explain how they work on **bubble sort**.

All generators take in the `items` array and `arrMax` which is a number that represents the maximum value in the array (it is needed to determine the height of the bars). `items` is an array of objects from which we get the starting unsorted array. Each element is an object in the form of `{ val: <number>, active: <boolean> }`. `val` is just a natural number, which we refer to when sorting. `active` represents whether or not the bar should be green (implying focus).

```javascript
export default function* bubbleSort(items, arrMax) {
	let i = 0;
	let j = 0;
	let arr = JSON.parse(JSON.stringify(items));

	while (i < arr.length) {
		j = 0;

		arr[i].active = true;
		arr[j].active = true;

		while (j < arr.length - 1) {
			if (arr[j].val > arr[j + 1].val) {
				[arr[j].val, arr[j + 1].val] = [arr[j + 1].val, arr[j].val];
			}

			if (j !== i) arr[j].active = false;

			j++;

			arr[j].active = true;
			if (j + 1 !== arr.length) arr[j + 1].active = true;

			yield newElements(arr, arrMax);
		}

		arr[j].active = false;
		arr[i].active = false;

		i++;

		if (i !== arr.length) arr[i].active = true;

		yield newElements(arr, arrMax);
	}
}
```

Immediately at the beginning, we do a hard copy of `items` array, because the variable is shared by all visualizations, and so we can’t modify it.

We then start the sorting process and, whenever we deem appropriate, we yield how the copied array currently looks. We yield the value returned by the `newElements` function because it returns **jsx** elements based on the array that should be put on screen.

```javascript
export default function newElements(items, max) {
	return (
		<>
			{items.map((el, inx) => {
				return (
					<div
						key={inx}
						className="node-container"
						style={{ width: `calc(${(1 / max) * 100}% )` }}
					>
						<div
							className={`node-coloured ${
								el.active ? "active" : null
							}`}
							style={{ height: `${(el.val * 100) / max}%` }}
						></div>
					</div>
				);
			})}
		</>
	);
}
```

With bubble sort, we want to show a new array whenever `i` or `j` variable is changed. We want to change the corresponding to them element’s `active` value to true, to show that the algorithm “looks” at them. We also change `j + 1` element’s `active` value to true because, in bubble sort, we compare element `j` with element `j + 1`.

### The Async Function

The async function is just a loop that calls a `sleep` function for the amount of time set by the user, **sets the state** value to what the generator yields and **breaks** the loop when the generator is done. The state that the function sets is the value **returned by the hook** and which is subsequently shown directly on the screen.

```javascript
async function getEls() {
	while (true) {
		await sleep(speedRef.current);

		const elsObj = elsGenerator.next();

		if (elsObj.done) {
			break;
		}

		setElements(elsObj);
	}
}
```

## Inspiration

-   [Pushing Sorts to their Limits](https://www.youtube.com/watch?v=8MsTNqK3o_w&t=1271s)

This video was a major inspiration for how to visualize the algorithms and was also the place from which I picked the algorithms that I want to implement. I wanted to include the algorithms that were visually interesting and since the video shows what my end visualization will look like, the choosing process was considerably easier.

## Appendix

SORT DEMON is a visualizer of sorting algorithms. It is meant to be used as a tool for learning **how the algorithms act and how they contrast from one another**. I did **not** design it to accurately show the relative speed of the algorithms, since I deemed it would make the faster algorithms less “readable”. Please keep that in mind while using the site.

### About Algorithms

There can be up to 9 algorithms running at the same time. If after adding a new algorithm, only its name appears, just click the **reset** or **shuffle** button to show it entirely. Also, note that **removing an algorithm in the middle of the runtime** can lead to some strange behavior that is also easily fixed with a **reset** or **shuffle**. Another thing - the more structurally complex algorithms (like the ones using recursion) have to **run in their entirety** before recreating their steps on the screen. I say that because that initial run in the background can lead to a **slight lag** when starting the visualization with a **large array size** and **multiple of these complex algorithms**.

### About Descriptions

**I do not take credit for any of the descriptions’ contents** - proper sources are linked at the bottom of each description. This is a **personal project** - the description functionality is just a feature that I thought would be nice to implement and thought that authentic articles would look better than some Lorem Ipsum boilerplate text. I strongly recommend everyone to visit the websites from which I go the articles - all of them are great resources for learning computer science-related topics.

## Author

-   [Jakub Koper](https://github.com/copperhuh)

## Feedback

If you have any feedback, please reach out to me jakub.koper@wpc-huh.com
