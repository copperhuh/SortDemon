import BubbleSort from "../components/Descreptions/DescComponents/BubbleSort";
import CocktailShakerSort from "../components/Descreptions/DescComponents/CocktailShakerSort";
import BubbleSortOptimized from "../components/Descreptions/DescComponents/BubbleSortOptimized";
import OddEvenSort from "../components/Descreptions/DescComponents/OddEvenSort";
import GnomeSort from "../components/Descreptions/DescComponents/GnomeSort";
import GnomeSortOptimized from "../components/Descreptions/DescComponents/GnomeSortOptimized";
import CombSort from "../components/Descreptions/DescComponents/CombSort";
import CircleSort from "../components/Descreptions/DescComponents/CircleSort";
import QuickSort from "../components/Descreptions/DescComponents/QuickSort";
import QuickSortStable from "../components/Descreptions/DescComponents/QuickSortStable";
import RadixSort from "../components/Descreptions/DescComponents/RadixSort";
import SelectionSort from "../components/Descreptions/DescComponents/SelectionSort";
import InsertionSort from "../components/Descreptions/DescComponents/InsertionSort";
import ShellSort from "../components/Descreptions/DescComponents/ShellSort";
import MergeSort from "../components/Descreptions/DescComponents/MergeSort";
import HeapSort from "../components/Descreptions/DescComponents/HeapSort";
import BucketSort from "../components/Descreptions/DescComponents/BucketSort";
import CountingSort from "../components/Descreptions/DescComponents/CountingSort";
import MergeSortBottomUp from "../components/Descreptions/DescComponents/MergeSortBottomUp";
import InsertionSortBinary from "../components/Descreptions/DescComponents/InsertionSortBinary";
import DoubleSelectionSort from "../components/Descreptions/DescComponents/DoubleSelectionSort";
import CycleSort from "../components/Descreptions/DescComponents/CycleSort";
import GravitySort from "../components/Descreptions/DescComponents/GravitySort";
import FlashSort from "../components/Descreptions/DescComponents/FlashSort";
import OddEvenMergeSort from "../components/Descreptions/DescComponents/OddEvenMergeSort";
import PairwiseSortingNetwork from "../components/Descreptions/DescComponents/PairwiseSortingNetwork";
import BitonicSort from "../components/Descreptions/DescComponents/BitonicSort";
import TimSort from "../components/Descreptions/DescComponents/TimSort";
import PancakeSort from "../components/Descreptions/DescComponents/PancakeSort";
import BogoSort from "../components/Descreptions/DescComponents/BogoSort";
import BubbleBogoSort from "../components/Descreptions/DescComponents/BubbleBogoSort";
import BozoSort from "../components/Descreptions/DescComponents/BozoSort";
import BogoBogoSort from "../components/Descreptions/DescComponents/BogoBogoSort";
import QuantumBogoSort from "../components/Descreptions/DescComponents/QuantumBogoSort";
import IntelligentDesignSort from "../components/Descreptions/DescComponents/IntelligentDesignSort";
import FaithSort from "../components/Descreptions/DescComponents/FaithSort";

export default function getDescription(name) {
	switch (name) {
		case "BubbleSort":
			return <BubbleSort />;
		case "CocktailShakerSort":
			return <CocktailShakerSort />;
		case "BubbleSortOptimized":
			return <BubbleSortOptimized />;
		case "OddEvenSort":
			return <OddEvenSort />;
		case "GnomeSort":
			return <GnomeSort />;
		case "GnomeSortOptimized":
			return <GnomeSortOptimized />;
		case "CombSort":
			return <CombSort />;
		case "CircleSort":
			return <CircleSort />;
		case "QuickSortMiddlePivot":
		case "QuickSortLeftPivot":
		case "QuickSortRightPivot":
			return <QuickSort />;
		case "QuickSortStable":
			return <QuickSortStable />;
		case "RadixSortBase2":
		case "RadixSortBase5":
		case "RadixSortBase10":
			return <RadixSort />;
		case "SelectionSort":
			return <SelectionSort />;
		case "DoubleSelectionSort":
			return <DoubleSelectionSort />;
		case "InsertionSort":
			return <InsertionSort />;
		case "InsertionSortBinary":
			return <InsertionSortBinary />;
		case "ShellSort":
			return <ShellSort />;
		case "MergeSort":
			return <MergeSort />;
		case "OddEvenMergeSort":
			return <OddEvenMergeSort />;
		case "PairwiseSortingNetwork":
			return <PairwiseSortingNetwork />;
		case "MergeSortBottomUp":
			return <MergeSortBottomUp />;
		case "CycleSort":
			return <CycleSort />;
		case "FlashSort":
			return <FlashSort />;
		case "HeapSortMin":
		case "HeapSortMax":
			return <HeapSort />;
		case "BucketSort":
			return <BucketSort />;
		case "GravitySort":
			return <GravitySort />;
		case "CountingSort":
			return <CountingSort />;
		case "BitonicSort":
			return <BitonicSort />;
		case "TimSort":
			return <TimSort />;
		case "PancakeSort":
			return <PancakeSort />;
		case "BogoSort":
			return <BogoSort />;
		case "BozoSort":
			return <BozoSort />;
		case "BubbleBogoSort":
			return <BubbleBogoSort />;
		case "BogoBogoSort":
			return <BogoBogoSort />;
		case "QuantumBogoSort":
			return <QuantumBogoSort />;
		case "IntelligentDesignSort":
			return <IntelligentDesignSort />;
		case "FaithSort":
			return <FaithSort />;
		default:
			return <BubbleSort />;
	}
}
