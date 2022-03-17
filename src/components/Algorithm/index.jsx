import { useEffect, useState, useRef } from 'react';
import AlgorithmStyled from './Algorithm.styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {connect} from 'react-redux'
import useSortingAlgo from '../../hooks/useSortingAlgo';

const Alogrithm = ({items, arrMax, speed, sortingMethod}) => {
    let [savedItems, setSavedItems] = useState(items)
    const newNodesRef = useRef(true)
    const speedRef = useRef(speed)

    useEffect(() => {
        speedRef.current = speed
    }, [speed])
    
    useEffect(() => {
        setSavedItems(items)
        newNodesRef.current = true
    }, [items])

    const [elements] = useSortingAlgo(savedItems, arrMax, newNodesRef, speedRef, sortingMethod)

    return ( 
        <AlgorithmStyled>
            <h1>{sortingMethod}</h1>
            {/* <div  ref={nodesRef} className='nodes'>{elements}</div> */}
            <div className='nodes'>
                {newNodesRef.current ? 
                
                items.map((el, inx) => {
                    return (
                        <div key={inx} className='node-container' style={{width: `calc(${(1/arrMax)*100}% - .7px)`}}>
                            <div className={`node-coloured`} style={{height: `${(el.val*100)/arrMax}%`}}></div>
                            {/* <div className='node-arrow' ><KeyboardArrowUpIcon sx={{ fontSize: 20 }}/></div> */}
                        </div>
                    )
                }) : 
                
                elements?.value}
            </div>
         
        </AlgorithmStyled>
     );

}

const select = (state) => ({
    items: state.items.items,
    arrMax: state.items.arrMax,
    size: state.size,
    speed: state.speed,
    sortingOngoing: state.sortingOngoing,
})

export default connect(select ,null)(Alogrithm);