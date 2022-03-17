import { CHANGE_SORT_TYPE, CHANGE_SPEED, CHANGE_SIZE, SHUFFLE, CHANGE_SORTING_ONGOING } from "../action-types"
import { getShuffledArr } from "../../utils"

const initialState = {
    items: getShuffledArr(20), 
    size: 20,
    sortType: 'random', 
    speed: 50,
    sortingOngoing: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case SHUFFLE:
            return {...state, items: getShuffledArr(state.size, state.sortType)}
        case CHANGE_SIZE:
            return {...state, size: action.payload}
        case CHANGE_SORT_TYPE:
            return {...state, sortType: action.payload}
        case CHANGE_SPEED:
            return {...state, speed: action.payload}
        case CHANGE_SORTING_ONGOING:
            return {...state, sortingOngoing: action.payload}
        default:
            return state
    }
}