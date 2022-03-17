import newElements from "./newElements"

export default function* quickSortRightPivot(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    

    let changes = []
    function partition(arr, low, high) {
 
        let pivot = arr[high];
     
        let i = (low - 1);
     
        for (let j = low; j <= high - 1; j++) {
            if (arr[j].val < pivot.val) {
     
                i++;
                [arr[i].val, arr[j].val] = [arr[j].val, arr[i].val]

            }
            if (i < arr.length && i >= 0) arr[i].active = true
            arr[j].active = true
            changes.push(JSON.parse(JSON.stringify(arr)))
            if (i < arr.length && i >= 0) arr[i].active = false
            arr[j].active = false
        }
        [arr[i + 1].val, arr[high].val] = [arr[high].val, arr[i + 1].val]

        arr[i + 1].active = true
        arr[high].active = true
        changes.push(JSON.parse(JSON.stringify(arr)))
        arr[i + 1].active = false
        arr[high].active = false

        return (i + 1);
    }
     
    function sortQ(arr, low, high) {
        if (low < high) {
     
            let pi = partition(arr, low, high);
     
            sortQ(arr, low, pi - 1);
            sortQ(arr, pi + 1, high);
        }
    }

    sortQ(arr, 0, arr.length - 1)
    console.log(changes.length, 'right')
    for(let each of changes){
        yield newElements(each, arrMax)
    }

    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
   
}