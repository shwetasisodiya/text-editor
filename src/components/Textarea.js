import React from 'react'
import { useState } from 'react'

export default function Textarea(props){
    const handleOnUp=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleOnLow=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleOnClear=()=>{
        let newtext=("")
        setText(newtext)
    }
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }
    const handleCopy=()=>{
      console.log("Copy Text was Cliked");
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }
    const handleExtra=()=>{
      console.log("Remove Extra Space was Clicked")
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const [text, setText] = useState("Enter Text Here");
  return (
    <div className={`text-${props.mode==='light' ? 'dark': 'light'}`}>
<div className="mb-3">
  <h3>Text Area</h3>
  <textarea className="form-control" value={text} onChange={handleOnchange}  id="mybox" rows="3"></textarea>
</div>
<button onClick={handleOnUp}  type="button" className="btn btn-primary m-2">Uppercase</button>
<button onClick={handleOnLow}  type="button" className="btn btn-primary m-2">Lowercase</button>
<button onClick={handleCopy}  type="button" className="btn btn-primary m-2">Copy Text</button>
<button onClick={handleExtra}  type="button" className="btn btn-primary m-2">Remove Extra Spaces</button>
<button onClick={handleOnClear}  type="button" className="btn btn-primary m-2">Clear Text</button>
<h2>Text Summary</h2>
<p>{text.length} Characters and {text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
    </div>
  )
}
