import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_SORTING_ONGOING } from '../redux/action-types'
import bubbleSort from '../utils/bubbleSort'
import selectionSort from '../utils/selectionSort'
import insertionSort from '../utils/insertionSort'
import mergeSort from '../utils/mergeSort'
import mergeSortBottomUp from '../utils/mergeSortBottomUp'
import bubbleSortOptimized from '../utils/bubbleSortOtimized'
import cocktailShakerSort from '../utils/cocktailShakerSort'
import oddEvenSort from '../utils/oddEvenSort'
import gnomeSort from '../utils/gnomeSort'
import gnomeSortOptimized from '../utils/gnomeSortOptimized'
import combSort from '../utils/combSort'
import circleSort from '../utils/circleSort'
import quickSortRightPivot from '../utils/quickSortRightPivot'
import quickSortLeftPivot from '../utils/quickSortLeftPivot'
import quickSortMiddlePivot from '../utils/quickSortMiddlePivot'
import quickSortStable from '../utils/quickSortStable'
import doubleSelectionSort from '../utils/doubleSelectionSort'
import cycleSort from '../utils/cycleSort'
import heapSortMax from '../utils/hepSortMax'
import heapSortMin from '../utils/heapSortMin'
import insertionSortBinary from '../utils/insertionSortBinary'
import shellSort from '../utils/shellSort'
import countingSort from '../utils/countingSort'
import gravitySort from '../utils/gravitySort'
import bucketSort from '../utils/bucketSort'
import radixSortBase10 from '../utils/radixSortBase10'
import radixSortBase5 from '../utils/radixSortBase5'
import radixSortBase2 from '../utils/radixSortBase2'
import radixSortLSD from '../utils/radixSortLSD'
import flashSort from '../utils/flashSort'
import bitonicSort from '../utils/bitonicSort'
import oddEvenMergeSort from '../utils/oddEvenMergeSort'
import pairwiseSortingNetwork from '../utils/pairwiseSortingNetwork'
import timSort from '../utils/timSort'
import pancakeSort from '../utils/pancakeSort'
import bogoSort from '../utils/bogoSort'
import bubbleBogoSort from '../utils/bubbleBogoSort'
import bogoBogoSort from '../utils/bogoBogoSort'
import bozoSort from '../utils/bozoSort'

const useSortingAlgo = (items, arrMax, newNodesRef, speedRef, sortingMethod) => {
    let sort = getSortingMethod(sortingMethod)
    
    const [elements, setElements] = useState(null)
    
    async function getEls(){
        while(true){
            await sleep(speedRef.current)
            if(!pausedRef.current){
                break
            }
            const elsObj = elsGenerator.next()
            if(elsObj.done){
                break
            }
            await setElements(elsObj)
        }
    }
    
    const sortingOngoing = useSelector(state => state.sortingOngoing)
    
    useEffect(() => {
        dispatch({type: CHANGE_SORTING_ONGOING, payload: false})
        setElsGenerator(sort(items, arrMax))
    },[items])
    
    
    useEffect(() => {
        pausedRef.current = sortingOngoing
        if(sortingOngoing){
            newNodesRef.current = false
            getEls()
            
        }
        return () => {
            mountedRef.current = false
        }
    },[sortingOngoing])
    
    const [elsGenerator, setElsGenerator] = useState(sort(items, arrMax))
    
    const mountedRef = useRef(true)
    const pausedRef = useRef(sortingOngoing)
    
    const dispatch = useDispatch()
    return [elements]
}

export default useSortingAlgo

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getSortingMethod(sortingMethod){
    switch (sortingMethod){
        case 'BubbleSort':
            return bubbleSort    
        case 'SelectionSort':
            return selectionSort
        case 'InsertionSort':
            return insertionSort    
        case 'MergeSort':
            return mergeSort    
        case 'MergeSortBottomUp':
            return mergeSortBottomUp    
        case 'BubbleSortOptimized':
            return bubbleSortOptimized    
        case 'CocktailShakerSort':
            return cocktailShakerSort    
        case 'OddEvenSort':
            return oddEvenSort    
        case 'GnomeSort':
            return gnomeSort    
        case 'GnomeSortOptimized':
            return gnomeSortOptimized    
        case 'CombSort':
            return combSort    
        case 'CircleSort':
            return circleSort    
        case 'QuickSortRightPivot':
            return quickSortRightPivot    
        case 'QuickSortLeftPivot':
            return quickSortLeftPivot    
        case 'QuickSortMiddlePivot':
            return quickSortMiddlePivot
        case 'QuickSortStable':
            return quickSortStable    
        case 'DoubleSelectionSort':
            return doubleSelectionSort    
        case 'CycleSort':
            return cycleSort    
        case 'HeapSortMax':
            return heapSortMax    
        case 'HeapSortMin':
            return heapSortMin    
        case 'InsertionSortBinary':
            return insertionSortBinary    
        case 'ShellSort':
            return shellSort    
        case 'CountingSort':
            return countingSort    
        case 'GravitySort':
            return gravitySort    
        case 'BucketSort':
            return bucketSort    
        case 'RadixSortBase10':
            return radixSortBase10    
        case 'RadixSortBase5':
            return radixSortBase5    
        case 'RadixSortBase2':
            return radixSortBase2    
        case 'RadixSortLSD':
            return radixSortLSD    
        case 'FlashSort':
            return flashSort    
        case 'BitonicSort':
            return bitonicSort    
        case 'OddEvenMergeSort':
            return oddEvenMergeSort    
        case 'PairwiseSortingNetwork':
            return pairwiseSortingNetwork    
        case 'TimSort':
            return timSort    
        case 'PancakeSort':
            return pancakeSort    
        case 'BogoSort':
            return bogoSort    
        case 'BozoSort':
            return bozoSort    
        case 'BogoBogoSort':
            return bogoBogoSort    
        case 'BubbleBogoSort':
            return bubbleBogoSort    
        default:
            return bubbleSort
    }
}