import newElements from "./newElements"

export default function* oddEvenMergeSort(items, arrMax){
    let base = JSON.parse(JSON.stringify(items))
    let arr = JSON.parse(JSON.stringify(base))
    
    let goal = 1
    while (Math.pow(2,goal) < arr.length){
        goal++
    }
    
    let localMax = Math.pow(2,goal) 
    for (let i = 1; i <= localMax - 1; i++){
        if(arr.length <= i){
            arr.push({val: i, active: false})
        }
    }
    let n = localMax
    let changes = []

    function sortM(lo, n) {
        if (n > 1){
            let m = Math.floor(n / 2);
            sortM(lo, m);
            sortM(lo + m, m);
            oddEvenMerge(lo, n, 1);
        }
    }
    
    function oddEvenMerge(lo, n, r){
        let m = r * 2;
        if (m < n){
            oddEvenMerge(lo, n, m);     
            oddEvenMerge(lo + r, n, m);   
            for (let i = lo + r; i + r < lo + n; i += m){
                compare(i, i + r);
            }
        }
        else{
            compare(lo, lo + r);
        }
    }
    
    function compare(i, j){
        
        if(i >= 0 && j >= 0 && i < localMax && j < localMax){
            if (arr[i].val > arr[j].val){
                [arr[j].val, arr[i].val] = [arr[i].val, arr[j].val]
    
                arr[i].active = true
                arr[j].active = true
                changes.push(JSON.parse(JSON.stringify(arr)))
                arr[i].active = false
                arr[j].active = false
            }
        }
    }
    
    sortM(0, n)
    
    for (let el of changes){
        yield newElements(el.slice(0, base.length), arrMax) 
    }
    
    yield newElements(arr.map((el) => ({val: el.val, active: true})).slice(0, base.length), arrMax)
}