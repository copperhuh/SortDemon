import newElements from "./newElements"

export default function* insertionSortBinary(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    
    for (let i = 1; i < arr.length; i++){
        let x = arr[i];
        let j = binarySearch(arr, x, 0, i - 1)
        
        if(j > 0) arr[j].active = true
        if(i > 0) arr[i].active = true
        yield newElements(JSON.parse(JSON.stringify(arr)), arrMax)
        if(j > 0) arr[j].active = false
        if(i > 0) arr[i].active = false

        arr = [...arr.slice(0,j), x, ...arr.slice(j,i), ...arr.slice(i + 1)]
        
        if(j > 0) arr[j].active = true
        if(i > 0) arr[i].active = true
        yield newElements(JSON.parse(JSON.stringify(arr)), arrMax)
        if(j > 0) arr[j].active = false
        if(i > 0) arr[i].active = false
    }
    
    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
    
}

function binarySearch(arr, item, low, high){

    if (high <= low){
        return (item.val > arr[low].val) ? (low + 1) : low;
    }

    let mid = Math.floor((low + high) / 2);

    if(item.val === arr[mid].val){
        return mid + 1;
    }

    if(item.val > arr[mid].val){
        return binarySearch(arr, item, mid + 1, high);
    }
        
    return binarySearch(arr, item, low, mid - 1);
}