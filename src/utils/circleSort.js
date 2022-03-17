import newElements from "./newElements"

export default function* circleSort(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    

    let changes = []
    function circleSortRec(arr, low, high)
    {
        let swapped = false
    
        if (low === high){
            return false
        }
    
        let lo = low
        let hi = high
    
        while (lo < hi){
            if (arr[lo].val > arr[hi].val){
                [arr[lo].val, arr[hi].val] = [arr[hi].val, arr[lo].val]
                swapped = true
            }
            lo++
            hi--

            if(lo < arr.length) arr[lo].active = true
            if(hi < arr.length) arr[hi].active = true
            changes.push(JSON.parse(JSON.stringify(arr)))
            if(lo < arr.length) arr[lo].active = false
            if(hi < arr.length) arr[hi].active = false
        }
        
    
        if (lo === hi){
            if (arr[lo].val > arr[hi + 1].val)
            {
                [arr[lo].val, arr[hi + 1].val] = [arr[hi + 1].val, arr[lo].val]
                swapped = true
            }

            if(lo < arr.length) arr[lo].active = true
            if(hi < arr.length) arr[hi].active = true
            changes.push(JSON.parse(JSON.stringify(arr)))
            if(lo < arr.length) arr[lo].active = false
            if(hi < arr.length) arr[hi].active = false
        }
        
        let mid = Math.floor((high - low) / 2)
        let firstHalf = circleSortRec(arr, low, low+mid)
        let secondHalf = circleSortRec(arr, low+mid+1, high)
        
        return swapped || firstHalf || secondHalf
    }
    
    function sortC(arr, n){
        while (circleSortRec(arr, 0, n-1))
        {
            ;
        }
    }

    sortC(arr, arr.length)

    for(let each of changes){
        yield newElements(each, arrMax)
    }

    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
   
}