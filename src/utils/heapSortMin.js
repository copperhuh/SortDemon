import newElements from "./newElements"

export default function* heapSortMin(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    

    let changes = []

    function sortH(arr)
    {
        let n = arr.length;
 
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
            heapify(arr, n, i);
            arr[i].active = true
            arr.reverse()
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr.reverse()
            arr[i].active = false
        }
        
        for (let i = n - 1; i >= 0; i--) {
            [arr[0].val, arr[i].val] = [arr[i].val, arr[0].val]
            
            arr[0].active = true
            arr[i].active = true
            arr.reverse()
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr.reverse()
            arr[0].active = false
            arr[i].active = false
            
            heapify(arr, i, 0);
            
            arr[0].active = true
            arr[i].active = true
            arr.reverse()
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr.reverse()
            arr[0].active = false
            arr[i].active = false
        }
    }
    
    function heapify(arr, n, i)
    {
        let smallest = i
        let l = 2 * i + 1
        let r = 2 * i + 2
        
        if (l < n && arr[l].val < arr[smallest].val){
            smallest = l;
        }
        
        if (r < n && arr[r].val < arr[smallest].val){
            smallest = r;
        }
        
        if (smallest !== i) {
            [arr[smallest].val, arr[i].val] = [arr[i].val, arr[smallest].val]
            
            heapify(arr, n, smallest);
            arr[smallest].active = true
            arr[i].active = true
            arr.reverse()
            changes.push(JSON.parse(JSON.stringify(arr)))
            arr.reverse()
            arr[0].active = false
            arr[smallest].active = false
        }
    }
    let w = JSON.parse(JSON.stringify(arr))
    sortH(w)
    w.reverse()
    
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