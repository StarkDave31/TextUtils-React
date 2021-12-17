import React, { useState } from 'react'


export default function TextForm(props) {
    let buttonStyle = {

        color: '#fff',
        backgroundColor: '#4b5059',
        borderColor: '#0f0f0f'

    }

    const handleUpClick = () => {
        // Converting to UPPERCASE
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "info");

    }
    const handleLowClick = () => {
        // Converting to lowercase
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "info");

    }

    const handleClearText = () => {
        // Clear everything in textarea
        setText('');
        props.showAlert("Text Cleared", "info");

    }

    const handleOnChange = (event) => {
        // On Changing the Text event is changing the textarea value using setText
        setText(event.target.value);
    }

    // Copy Text to Clipboard
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "info");
    }

    // Handle Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "info");
    }

    let modeStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : '#a3a389',
        color: props.mode === 'light' ? 'black' : 'white'

    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={modeStyle}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleLowClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={buttonStyle} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Something in the Textbox above to preview here'}</p>
            </div>
        </>
    )
}
