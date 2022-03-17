import newElements from "./newElements"

export default function* heapSortMax(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    

    let changes = []

    function sortH(arr)
    {
        let n = arr.length;
 
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
            heapify(arr, n, i);
            arr[i].active = true
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr[i].active = false
        }
        
        for (let i = n - 1; i > 0; i--) {
            [arr[0].val, arr[i].val] = [arr[i].val, arr[0].val]

            arr[0].active = true
            arr[i].active = true
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr[0].active = false
            arr[i].active = false

            heapify(arr, i, 0);

            arr[0].active = true
            arr[i].active = true
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr[0].active = false
            arr[i].active = false
        }
    }
    
    function heapify(arr, n, i)
    {
        let largest = i
        let l = 2 * i + 1
        let r = 2 * i + 2
        
        if (l < n && arr[l].val > arr[largest].val){
            largest = l;
        }
        
        if (r < n && arr[r].val > arr[largest].val){
            largest = r;
        }
        
        if (largest !== i) {
            [arr[largest].val, arr[i].val] = [arr[i].val, arr[largest].val]
            
            heapify(arr, n, largest);
            arr[largest].active = true
            arr[i].active = true
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr[0].active = false
            arr[largest].active = false
        }
    }
    let w = JSON.parse(JSON.stringify(arr))
    sortH(w)

    for(let change of changes){
        yield newElements(change, arrMax)
    }
    
    for(let i of w){
        i.active = true
        yield newElements(w, arrMax)
        i.active = false

    }

    yield newElements(w.map((el) => ({val: el.val, active: true})), arrMax)
    
    
}