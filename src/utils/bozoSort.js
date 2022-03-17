import newElements from "./newElements"

export default function* bozoSort(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    let n = arr.length

    function isSorted(){
        for(let i = 0; i < n - 1; i++){
            if(arr[i].val > arr[i + 1].val){
                return false
            }
        }    
        return true
    }

    while (!isSorted()){
        let rand1 = Math.floor(Math.random() * n)
        let rand2 = Math.floor(Math.random() * n)
        let temp = arr[rand1].val
        arr[rand1].val = arr[rand2].val
        arr[rand2].val = temp

        yield newElements(arr, arrMax)
    }
    
    
    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
    
}