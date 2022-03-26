import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SORTING_ONGOING } from "../redux/action-types";
import getSortingMethod from "../utils/getSortingMethod";

const useSortingAlgo = (
	items,
	arrMax,
	newNodesRef,
	speedRef,
	sortingMethod
) => {
	let sort = getSortingMethod(sortingMethod);

	const [elements, setElements] = useState(null);

	async function getEls() {
		while (true) {
			await sleep(speedRef.current);
			if (!pausedRef.current) {
				break;
			}
			const elsObj = elsGenerator.next();
			if (elsObj.done) {
				break;
			}
			setElements(elsObj);
		}
	}

	const sortingOngoing = useSelector((state) => state.sortingOngoing);

	useEffect(() => {
		dispatch({ type: CHANGE_SORTING_ONGOING, payload: false });
		setElsGenerator(sort(items, arrMax));
	}, [items]);

	useEffect(() => {
		pausedRef.current = sortingOngoing;
		if (sortingOngoing) {
			newNodesRef.current = false;
			getEls();
		}
		return () => {
			mountedRef.current = false;
		};
	}, [sortingOngoing]);

	const [elsGenerator, setElsGenerator] = useState(sort(items, arrMax));

	const mountedRef = useRef(true);
	const pausedRef = useRef(sortingOngoing);

	const dispatch = useDispatch();
	return [elements];
};

export default useSortingAlgo;

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
