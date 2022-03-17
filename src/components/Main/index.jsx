import * as React from 'react';
import Alogrithm from '../Algorithm';
import Container from './Main.styles';

const Main = () => {
    return (
    <Container>
        {/* <Alogrithm sortingMethod='InsertionSort'/> */}
        {/* <Alogrithm sortingMethod='QuickSortLeftPivot'/>
        <Alogrithm sortingMethod='QuickSortMiddlePivot'/> */}
        {/* <Alogrithm sortingMethod='MergeSort'/> */}
        {/* <Alogrithm sortingMethod='BucketSort'/> */}
        {/* <Alogrithm sortingMethod='RadixSortBase10'/> */}
        {/* <Alogrithm sortingMethod='RadixSortBase5'/> */}
        <Alogrithm sortingMethod='BozoSort'/>
        <Alogrithm sortingMethod='BogoSort'/>
        {/* <Alogrithm sortingMethod='CountingSort'/> */}
        {/* <Alogrithm sortingMethod='SelectionSort'/> */}
        {/* <Alogrithm sortingMethod='CircleSort'/> */}
    </Container>
    )
}

export default Main;