import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  
  const handelUpClick = () =>{
    console.log("uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "Success");
  }
  const handelLowClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "Success");

  }
  const handelCleared = ()=>{
    setText('')
    props.showAlert("Your Text should be cleared", "Success");
  }
  const handelCopy = ()=>{
    var text = document.getElementById("summery");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard", "Success");
  }
  const handelOnchange = (event) =>{
    setText(event.target.value);
  }
  return (
    <div style={{color: props.mode === 'dark' || 'green' ? 'white' : 'black'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control mb-4" id="summery" value={text} onChange={handelOnchange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
            <button className='btn btn-primary mx-3' onClick={handelUpClick}>Change to UpperCase </button>
            <button className='btn btn-primary mx-3' onClick={handelLowClick}>Change to LowerCase</button>
            <button className='btn btn-primary mx-3' onClick={handelCopy}>Copy Text</button>
            <button className='btn btn-danger mx-3' onClick={handelCleared}>Clear</button>
        </div>

        <div className="container">
          <h1>Enter Your Summery Here</h1>
          <p>{text.split(' ').length} word {text.length} character</p>
          <p>{text}</p>
        </div>
    </div>
  )
}
