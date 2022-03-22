import bubbleSort from "./SortGenerators/bubbleSort";
import selectionSort from "./SortGenerators/selectionSort";
import insertionSort from "./SortGenerators/insertionSort";
import mergeSort from "./SortGenerators/mergeSort";
import mergeSortBottomUp from "./SortGenerators/mergeSortBottomUp";
import bubbleSortOptimized from "./SortGenerators/bubbleSortOtimized";
import cocktailShakerSort from "./SortGenerators/cocktailShakerSort";
import oddEvenSort from "./SortGenerators/oddEvenSort";
import gnomeSort from "./SortGenerators/gnomeSort";
import gnomeSortOptimized from "./SortGenerators/gnomeSortOptimized";
import combSort from "./SortGenerators/combSort";
import circleSort from "./SortGenerators/circleSort";
import quickSortRightPivot from "./SortGenerators/quickSortRightPivot";
import quickSortLeftPivot from "./SortGenerators/quickSortLeftPivot";
import quickSortMiddlePivot from "./SortGenerators/quickSortMiddlePivot";
import quickSortStable from "./SortGenerators/quickSortStable";
import doubleSelectionSort from "./SortGenerators/doubleSelectionSort";
import cycleSort from "./SortGenerators/cycleSort";
import heapSortMax from "./SortGenerators/hepSortMax";
import heapSortMin from "./SortGenerators/heapSortMin";
import insertionSortBinary from "./SortGenerators/insertionSortBinary";
import shellSort from "./SortGenerators/shellSort";
import countingSort from "./SortGenerators/countingSort";
import gravitySort from "./SortGenerators/gravitySort";
import bucketSort from "./SortGenerators/bucketSort";
import radixSortBase10 from "./SortGenerators/radixSortBase10";
import radixSortBase5 from "./SortGenerators/radixSortBase5";
import radixSortBase2 from "./SortGenerators/radixSortBase2";
import flashSort from "./SortGenerators/flashSort";
import bitonicSort from "./SortGenerators/bitonicSort";
import oddEvenMergeSort from "./SortGenerators/oddEvenMergeSort";
import pairwiseSortingNetwork from "./SortGenerators/pairwiseSortingNetwork";
import timSort from "./SortGenerators/timSort";
import pancakeSort from "./SortGenerators/pancakeSort";
import bogoSort from "./SortGenerators/bogoSort";
import bubbleBogoSort from "./SortGenerators/bubbleBogoSort";
import bozoSort from "./SortGenerators/bozoSort";

export default function getSortingMethod(sortingMethod) {
	switch (sortingMethod) {
		case "BubbleSort":
			return bubbleSort;
		case "SelectionSort":
			return selectionSort;
		case "InsertionSort":
			return insertionSort;
		case "MergeSort":
			return mergeSort;
		case "MergeSortBottomUp":
			return mergeSortBottomUp;
		case "BubbleSortOptimized":
			return bubbleSortOptimized;
		case "CocktailShakerSort":
			return cocktailShakerSort;
		case "OddEvenSort":
			return oddEvenSort;
		case "GnomeSort":
			return gnomeSort;
		case "GnomeSortOptimized":
			return gnomeSortOptimized;
		case "CombSort":
			return combSort;
		case "CircleSort":
			return circleSort;
		case "QuickSortRightPivot":
			return quickSortRightPivot;
		case "QuickSortLeftPivot":
			return quickSortLeftPivot;
		case "QuickSortMiddlePivot":
			return quickSortMiddlePivot;
		case "QuickSortStable":
			return quickSortStable;
		case "DoubleSelectionSort":
			return doubleSelectionSort;
		case "CycleSort":
			return cycleSort;
		case "HeapSortMax":
			return heapSortMax;
		case "HeapSortMin":
			return heapSortMin;
		case "InsertionSortBinary":
			return insertionSortBinary;
		case "ShellSort":
			return shellSort;
		case "CountingSort":
			return countingSort;
		case "GravitySort":
			return gravitySort;
		case "BucketSort":
			return bucketSort;
		case "RadixSortBase10":
			return radixSortBase10;
		case "RadixSortBase5":
			return radixSortBase5;
		case "RadixSortBase2":
			return radixSortBase2;
		case "FlashSort":
			return flashSort;
		case "BitonicSort":
			return bitonicSort;
		case "OddEvenMergeSort":
			return oddEvenMergeSort;
		case "PairwiseSortingNetwork":
			return pairwiseSortingNetwork;
		case "TimSort":
			return timSort;
		case "PancakeSort":
			return pancakeSort;
		case "BogoSort":
			return bogoSort;
		case "BozoSort":
			return bozoSort;
		case "BubbleBogoSort":
			return bubbleBogoSort;
		default:
			return bubbleSort;
	}
}
