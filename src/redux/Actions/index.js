import {
	CHANGE_SIZE,
	CHANGE_SORT_TYPE,
	CHANGE_SPEED,
	SHUFFLE,
	CHANGE_SORTING_ONGOING,
	ADD_ALGORITHM,
	REMOVE_ALGORITHM,
	CHANGE_DESCRIPTION,
	SET_DESC_REF,
} from "../action-types";

export const doShuffle = { type: SHUFFLE };

export const doChangeSortType = (sortType) => ({
	type: CHANGE_SORT_TYPE,
	payload: sortType,
});

export const doChangeSpeed = (speed) => ({
	type: CHANGE_SPEED,
	payload: speed,
});

export const doChangeSize = (size) => ({
	type: CHANGE_SIZE,
	payload: size,
});

export const doChangeSortingOngoing = (sortingOngoing) => ({
	type: CHANGE_SORTING_ONGOING,
	payload: sortingOngoing,
});

export const doAddAlgorithm = (algorithm) => ({
	type: ADD_ALGORITHM,
	payload: algorithm,
});

export const doRemoveAlgorithm = (idx) => ({
	type: REMOVE_ALGORITHM,
	payload: idx,
});

export const doChangeDescription = (name) => ({
	type: CHANGE_DESCRIPTION,
	payload: name,
});

export const doSetDescRef = (ref) => ({
	type: SET_DESC_REF,
	payload: ref,
});
