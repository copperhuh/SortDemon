import newElements from "./newElements"

export default function* bogoBogoSort(items, arrMax){
    let i = 0
    let j = 0
    let arr = JSON.parse(JSON.stringify(items))
    
    while (i < arr.length){
        j = 0
        
        arr[i].active = true
        arr[j].active = true
        
        while (j < arr.length - 1){
            if(arr[j].val > arr[j + 1].val){
                [arr[j].val, arr[j + 1].val] = [arr[j + 1].val, arr[j].val]
            }
            
            if(j !== i) arr[j].active = false
            j++
            arr[j].active = true
            if(j + 1 !== arr.length) arr[j + 1].active = true 
            
            yield newElements(arr, arrMax)
        }
        
        
        arr[j].active = false
        arr[i].active = false
        
        i++
        
        if(i !== arr.length) arr[i].active = true
        
        yield newElements(arr, arrMax)
    }
    
    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
    
}