import newElements from "./newElements"

export default function* combSort(items, arrMax){
    let arr = JSON.parse(JSON.stringify(items))
    let n = arr.length
    let gap = n;
    let swapped = true;

    while (gap !== 1 || swapped === true)
    {
        gap = parseInt((gap*10)/13, 10);
        if (gap < 1) gap = 1

        swapped = false;

        for (let i=0; i<n-gap; i++)
        {
            if (arr[i].val > arr[i+gap].val)
            {
                [arr[i].val, arr[i + gap].val] = [arr[i + gap].val, arr[i].val]

                swapped = true;
            }
            
            if(i !== n) arr[i].active = true
            if(i + gap <= arr.length) arr[i + gap].active = true
            yield newElements(arr, arrMax)
            if(i !== n) arr[i].active = false
            if(i + gap <= arr.length) arr[i + gap].active = false
        }
    }
    yield newElements(arr.map((el) => ({val: el.val, active: true})), arrMax)
}