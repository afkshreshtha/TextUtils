import React, { useState } from 'react'

const TextForm = (props) => {
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Text is UpperCase Now ", "success")
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Text is LowerCase Now ", "success")
    }
    const handleClearClick = () => {
        setText("")
        props.showAlert("Text is Cleared Now ", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const handleCopyText = () => {
        let copyText = document.getElementById("myBox")
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied : ' + copyText.value, "success")
    }





    const [text, setText] = useState('Enter Text here')
    return (
        <div className="container" style={{ color: (props.mode === 'light' ? 'black' : 'white') }} >
            <div className="mb-3 container my-5" >
                <h1 className='py-3'>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: (props.mode === 'light' ? 'white' : '#13466e'), color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1 mx-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1 mx-2" onClick={handleCopyText}>Copy Text</button>
            </div>
            <div className="mb-3 container my-5">
                <h1 className='py-3'>Your text summary</h1>
                <p>{text.split(" ").filter((elm)=>{return elm.length!==0}).length} Words {text.length} Chracter</p>
                <p>{0.008 * text.split(" ").filter((elm)=>{return elm.length!==0}).length} Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Your Text To Preview'}</p>
            </div>
        </div>
    )
}

export default TextForm
