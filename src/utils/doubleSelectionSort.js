import newElements from "./newElements"

export default function* doubleSelectionSort(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    let n = arr.length
    let smallIndex
    let largeIndex
    let leftPass = 0
    let rightPass = n - 1
    while (leftPass <= rightPass){
        smallIndex = leftPass
        
        for (let i = leftPass + 1; i <= rightPass; i++){
            if (arr[i].val < arr[smallIndex].val){
                smallIndex = i
            }
            if(smallIndex <= n) arr[smallIndex].active = true
            if(i <= n) arr[i].active = true
            yield newElements(arr, arrMax)
            if(smallIndex <= n) arr[smallIndex].active = false
            if(i <= n) arr[i].active = false
        }
        if (smallIndex !== leftPass){
            [arr[leftPass].val, arr[smallIndex].val] = [arr[smallIndex].val, arr[leftPass].val]
        }
        
        leftPass++
        largeIndex = rightPass
        
        for (let j = rightPass - 1; j >= leftPass; j--){
            if(arr[j].val > arr[largeIndex].val){
                largeIndex = j
            }
            if(largeIndex <= n) arr[largeIndex].active = true
            if(j <= n) arr[j].active = true
            yield newElements(arr, arrMax)
            if(largeIndex <= n) arr[largeIndex].active = false
            if(j <= n) arr[j].active = false
        }
        if(largeIndex !== rightPass){
            [arr[largeIndex].val, arr[rightPass].val] = [arr[rightPass].val, arr[largeIndex].val]
        }


        rightPass--
    }

    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
}