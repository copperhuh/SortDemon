import { StyledSortSettingsHidden } from "./SortSettings.styles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import { connect } from "react-redux";
import { doChangeSortingOngoing } from "../../redux/Actions";

const SettingsHidden = ({toggleShow, shuffle, changeSortingOngoing}) => {
    
    const onStart = () => {
        changeSortingOngoing(true)
    }
    
    const onPause = () => {
        changeSortingOngoing(false)
    }

    const onReset = () => {
        changeSortingOngoing(false)
        shuffle()
    }

    return (
        <StyledSortSettingsHidden>
            <div className="container">

                <button className="hide" onClick={toggleShow}>
                    <KeyboardArrowDownIcon sx={{ fontSize: 60 }}/>
                </button>
                <div className="shuffle cntrl-btn">
                    <button onClick={shuffle}>
                        <ShuffleIcon sx={{ fontSize: 30 }}/>
                        SHUFFLE
                    </button>
                </div>
                <div className="restart cntrl-btn">
                    <button onClick={onReset}>
                        <RestartAltIcon sx={{ fontSize: 30 }}/>
                        RESET
                    </button>
                </div>
                <div className="pause cntrl-btn"> 
                    <button onClick={onPause}>
                        <PauseIcon sx={{ fontSize: 30 }}/>
                        PAUSE
                    </button>
                </div>
                <div className="start cntrl-btn"> 
                    <button onClick={onStart}>
                        <PlayArrowIcon sx={{ fontSize: 30 }}/>
                        START
                    </button>
                </div>
            </div>
        </StyledSortSettingsHidden>
    )
}

const settingsActions = (dispatch) => ({
    changeSortingOngoing: (sortingOngoing) => dispatch(doChangeSortingOngoing(sortingOngoing)),
})

export default connect(null, settingsActions)(SettingsHidden)