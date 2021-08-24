import React from 'react'
import './components-styles/ReadStoryModal.css'
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux'

function ReadStoryModal({dispatch, story, title}) {
    return (
        <div className="read__modal">
            <div className="read__modal__container py-8 px-8 text-left rounded-2xl">
            <CloseIcon onClick={()=>{dispatch({
                type: "READ_STORY",
                title: "",
                story: "",
                show: false
            })}} />
                <h1 className="text-center font-bold text-xl mb-4 mt-8">{title}</h1>
                <p>{story}
                </p>
            </div>
        </div>
    )
}

export default connect(state => ({...state}))(ReadStoryModal)
