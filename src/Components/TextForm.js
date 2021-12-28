import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("onClick method was called" + text);
        // setText("you have change the state of the box");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);

        setWordLength(newText);
        setLettersLength(newText);

        let newWord = "";
        setWord(newWord);

        let newReplaceWith = "";
        setReplaceWith(newReplaceWith);
    }
    const [Word, setWord] = useState('');
    const [ReplaceWith, setReplaceWith] = useState('');

    const handleOnChangeForWord = (event) => {
        setWord(event.target.value);
    }
    const handleOnChangeForReplaceWith = (event) => {
        setReplaceWith(event.target.value);
    }

    const handleReplaceClick = () => {
        // const Word;
        // const ReplaceWith;
        let newText = text.replaceAll(Word, ReplaceWith);
        setText(newText);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("onChange method was called");
        setText(event.target.value);
        setWordLength(text.split(/[ ]+/).length);
        let newText = text.split(/[ ]+/);
        setLettersLength(newText.join("").length);
    }
    const [wordLength, setWordLength] = useState(null)
    const [lettersLength, setLettersLength] = useState(null)

    const [text, setText] = useState('');
    
    return (
        <div>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode === 'light'? 'light': 'dark'} text-${props.mode === 'light'? 'dark': 'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className={`btn btn-${props.mode === 'light'? 'primary': 'warning'} my-2 mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode === 'light'? 'primary': 'warning'} my-2 `} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode === 'light'? 'primary': 'warning'} my-2 mx-2`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${props.mode === 'light'? 'primary': 'warning'} my-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.mode === 'light'? 'primary': 'warning'} my-2 mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="mb-3">
                <label htmlFor="word" className="form-label">Word</label>
                <input type="text" className={`form-control bg-${props.mode === 'light'? 'light': 'dark'} text-${props.mode === 'light'? 'dark': 'light'}`} value={Word} onChange={handleOnChangeForWord} id="word"/>
                <label htmlFor="replaceWith" className="form-label">Replace with</label>
                <input type="text" className={`form-control bg-${props.mode === 'light'? 'light': 'dark'} text-${props.mode === 'light'? 'dark': 'light'}`} value={ReplaceWith} onChange={handleOnChangeForReplaceWith} id="replaceWith"/>
                <button className={`btn btn-${props.mode === 'light'? 'primary': 'warning'} my-2`} onClick={handleReplaceClick}>Replace</button>
            </div>
            <div>
                <h2>Your Text Summary</h2>
                <p>{text.length>0? wordLength: '0'} Words and {text.length>0? lettersLength: '0'} Characters</p>
                <p>{text.length>0? 0.008 * wordLength: "0"} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text: "Enter some text in above text Box to preview it here"}</p>
            </div>
        </div>
    )
}
