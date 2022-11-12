import React, { useState } from 'react'



export default function TextForm(props) {

  const handleupclick = () => {
    // console.log('uppercase was clicked'+text);
    let upcase = text.toUpperCase();
    setText(upcase);
    props.alert("Converted Into UpperCase","success")
  }

  const handlelowclick = () => {
    // console.log('lowercase was clicked'+text);
    let upcase = text.toLowerCase();
    setText(upcase)
    props.alert("Converted Into LowerCase","success")

  }
  const handleclearclick = () => {
    let upcase = "";
    setText(upcase)
    localStorage.setItem('note', "");
    props.alert("Cleared","success")

  }

  const handlespeakclick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.alert("Speaking.....","success")

  }

  const handlefrclick = () => {
    let find = prompt('find');
    let replace = prompt('replace');
    setText(text.replace(find, replace));
    props.alert("Replaced","success")

  }

  const handleloadclick = () => {
    setText(localStorage.getItem('note', text))
    props.alert("Draft Loaded","success")

  }


  let successCode="primary";
  const handleCopy = () => {
    let text = document.getElementById('box');
    text.select();
    navigator.clipboard.writeText(text.value)
    setTxtcopy('Copied')
    
    setTimeout(() => {
      setTxtcopy('Copy Text')
      let successCode="success"
    console.log(successCode);
    
    }, 500);

    props.alert("Copied","success")


  }


  const handleOnChange = (e) => {
    // console.log('onchanged');
    setText(e.target.value)
    localStorage.setItem('note', e.target.value);
  }

  const [text, setText] = useState("");
  const [txtcopy, setTxtcopy] = useState("Copy Text");
  // text="hello" wrong way
  // setText("newtext") right way

  return (
    <>
      <div>

        <div className="container">
          <h3 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h3>
          <textarea className="form-control" id="box" rows="4" value={text} onChange={handleOnChange} placeholder="Write Here" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>

        <div>
          <button className="btn btn-primary my-3" onClick={handleupclick}>Convert to upperCase</button>
          <button className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1 " onClick={handleclearclick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handlespeakclick}>Click To Listen</button>
          <button className="btn btn-primary mx-1 my-2" onClick={handlefrclick}>Find And Replace</button>
          <button className="btn btn-primary mx-1 my-2" onClick={handleloadclick}>Load Draft</button>
          <button className={`btn btn-${successCode} mx-1 my-2`} onClick={handleCopy}>{txtcopy}</button>
        </div>


        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").length} words , {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes to Read</p>
          <h3>Preview Text</h3>
          <p>{text.length>0?text:"Write Something To Preview"}</p>
        </div>

        
      </div>
    </>
  )
};
