import React from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function Toast() {
    const basicToast=()=>{
        toast('basic toast notification')
    }
    const topLeft=()=>{
        toast.success('top left success',{position: toast.POSITION.TOP_LEFT, autoClose:10000})
    }
    const topCenter=()=>{
        toast.info('top Center info',{position: toast.POSITION.TOP_CENTER, autoClose:false})
    }
    const topRight=()=>{
        toast.warning('top Right warning',{position: toast.POSITION.TOP_RIGHT})
    }
    const bottomLeft=()=>{
        toast.error('bottom left error',{position: toast.POSITION.BOTTOM_LEFT})
    }
    const bottomCenter=()=>{
        toast('bottom Center',{position: toast.POSITION.BOTTOM_CENTER})
    }
    const bottomRight=()=>{
        toast(<CustomToast/>,{position: toast.POSITION.BOTTOM_RIGHT})
    }
    const CustomToast=({closeToast})=>{
        return(
            <p>
                 Custom bottomRight notification
                 <button onClick={closeToast}>Close</button>
            </p>
        )
    }
    return (
        <div>
            <button onClick={basicToast}>Basic Toast</button>
            <button onClick={topLeft}>topLeft success close autoClose10secs</button>
            <button onClick={topCenter}>topCenter info autoCloseOffToast</button>
            <button onClick={topRight}>topRight warning Toast</button>
            <button onClick={bottomLeft}>bottomLeftt error Toast</button>
            <button onClick={bottomCenter}>bottomCenter Toast</button>
            <button onClick={bottomRight}>bottomRight Toast</button>

        </div>
    )
}

export default Toast
