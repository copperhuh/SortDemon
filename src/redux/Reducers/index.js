import {
	CHANGE_SORT_TYPE,
	CHANGE_SPEED,
	CHANGE_SIZE,
	SHUFFLE,
	CHANGE_SORTING_ONGOING,
	ADD_ALGORITHM,
	REMOVE_ALGORITHM,
	CHANGE_DESCRIPTION,
	SET_DESC_REF,
} from "../action-types";
import { getShuffledArr } from "../../utils";

const initialState = {
	items: getShuffledArr(20),
	size: 20,
	sortType: "random",
	speed: 50,
	sortingOngoing: false,
	algorithms: localStorage.getItem("algorithms")
		? JSON.parse(localStorage.getItem("algorithms"))
		: ["BubbleSort"],
	description: localStorage.getItem("description")
		? localStorage.getItem("description")
		: "BubbleSort",
	descRef: null,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SHUFFLE:
			return {
				...state,
				items: getShuffledArr(state.size, state.sortType),
			};
		case CHANGE_SIZE:
			return { ...state, size: action.payload };
		case CHANGE_SORT_TYPE:
			return { ...state, sortType: action.payload };
		case CHANGE_SPEED:
			return { ...state, speed: action.payload };
		case CHANGE_SORTING_ONGOING:
			return { ...state, sortingOngoing: action.payload };
		case ADD_ALGORITHM:
			if (state.algorithms.length < 9) {
				localStorage.setItem(
					"algorithms",
					JSON.stringify([...state.algorithms, action.payload])
				);
				return {
					...state,
					algorithms: [...state.algorithms, action.payload],
				};
			}
			return state;
		case REMOVE_ALGORITHM:
			return {
				...state,
				algorithms: [
					...state.algorithms.slice(0, action.payload),
					...state.algorithms.slice(action.payload + 1),
				],
			};
		case CHANGE_DESCRIPTION:
			localStorage.setItem("description", action.payload);
			return { ...state, description: action.payload };
		case SET_DESC_REF:
			return { ...state, descRef: action.payload };
		default:
			return state;
	}
};
