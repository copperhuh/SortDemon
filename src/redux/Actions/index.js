import { CHANGE_SIZE, CHANGE_SORT_TYPE, CHANGE_SPEED, SHUFFLE, CHANGE_SORTING_ONGOING } from "../action-types"

export const doShuffle = { type: SHUFFLE }

export const doChangeSortType = (sortType) => ({ 
    type: CHANGE_SORT_TYPE,
    payload: sortType 
})

export const doChangeSpeed = (speed) => ({ 
    type: CHANGE_SPEED,
    payload: speed 
})

export const doChangeSize = (size) => ({ 
    type: CHANGE_SIZE,
    payload: size 
})

export const doChangeSortingOngoing = (sortingOngoing) => ({ 
    type: CHANGE_SORTING_ONGOING,
    payload: sortingOngoing 
})