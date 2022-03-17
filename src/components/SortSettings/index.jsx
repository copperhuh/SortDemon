import React, { useState } from "react";
import { doShuffle } from "../../redux/Actions";
import { connect } from "react-redux";
import SettingsShown from './SettingsShown'
import SettingsHidden from './SettingsHidden'

const SortSettings = ({shuffle}) => {
    shuffle()
    const [show, setShow] = useState(true)
    const toggleShow = () => {
        setShow(prevShow => !prevShow)
    }

    return (
        <>
            {show ? 
            <SettingsShown toggleShow={toggleShow} shuffle={shuffle}/> : 
            <SettingsHidden toggleShow={toggleShow} shuffle={shuffle}/>}
        </>
    )
}

const actions = (dispatch) => ({
    shuffle: () => dispatch(doShuffle)
})

export default connect(null, actions)(SortSettings)

