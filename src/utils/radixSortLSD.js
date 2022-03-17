import newElements from "./newElements"

export default function* radixSortLSD(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    let radix = 10

    let minValue = arr[0].val;
    let maxValue = arr[0].val;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].val < minValue) {
            minValue = arr[i].val;
        } else if (arr[i].val > maxValue) {
            maxValue = arr[i].val;
        }
        arr[i].active = true
        yield newElements(arr, arrMax)
        arr[i].active = false
    }
    
    let exponent = 1;
    while ((maxValue - minValue) / exponent >= 1) {
        var i;
        var bucketIndex;
        var buckets = new Array(radix);
        var output = new Array(arr.length);
        
        for (i = 0; i < radix; i++) {
            buckets[i] = 0;
        }
        
        for (i = 0; i < arr.length; i++) {
            bucketIndex = Math.floor(((arr[i].val - minValue) / exponent) % radix);
            buckets[bucketIndex]++;
        }
        
        for (i = 1; i < radix; i++) {
            buckets[i] += buckets[i - 1];
        }
        for (i = arr.length - 1; i >= 0; i--) {
            bucketIndex = Math.floor(((arr[i].val - minValue) / exponent) % radix);
            output[--buckets[bucketIndex]] = arr[i].val;
            yield newElements(JSON.parse(JSON.stringify(getOutput(output,arr))).flat(), arrMax)
            console.log(output)
        }
        
        for (i = 0; i < arr.length; i++) {
            arr[i].val = output[i];
            
            // arr[i].active = true
            // yield newElements(arr, arrMax)
            // arr[i].active = false
        }
        
        yield newElements(arr, arrMax)
        exponent *= radix;
    }
    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
    
}

function getOutput(output, arr){
    let res = [] 
    for(let i = 0; i < arr.length; i++){
        if(output[i]){
            res.push({val: output[i], active: false})
        } else{
            res.push(JSON.parse(JSON.stringify(arr[i])))
        }
    }
    return res
}