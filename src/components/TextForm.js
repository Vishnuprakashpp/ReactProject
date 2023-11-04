import React, { useState } from 'react';

export default function TextForm(props) {
  // Define the state for the text and a function to update it
  const [text, setText] = useState("");

  // Handler to convert the text to uppercase
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to upper case','success')
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lower case','success')
  }

const handleToClear = () => {
  let newText = ("");
  setText(newText);
  props.showAlert('text cleard','success')
}

  // Handler to update the text when the user types in the textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
 const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    // text.setText(0,99999);
    navigator.clipboard.writeText(text.value)
    props.showAlert('text copied','danger')
 }
 const handleExtraSpace=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('extra space removed','success')
 }
  return (
    <>
    <div className='container mx-4'style={{color:props.mode === 'dark'? 'white':'black'}}>
    <div className="mb-3 mx-5 my-4">
      <h1>{props.heading}</h1>
      <div className='container'>
        {/* Use value and onChange to bind the textarea to the state */}
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'gray':'white',
    color:props.mode === 'dark'? 'white':'black'}} id='mybox' rows='8'></textarea>
      </div>
      <button className='btn btn-primary mx-2 my-3' onClick={handleOnClick}>Convert to uppercase</button>
      <button className='btn btn-primary mx-2 my-3' onClick={handleLoClick}>Convert to lowerCase</button>
      <button className='btn btn-primary mx-2 my-3' onClick={handleToClear}>Clear text</button>
      <button className='btn btn-primary mx-2 my-3' onClick={handleCopy}>Copy text</button>
       <button className='btn btn-primary mx-2 my-3' onClick={handleCopy}>Copy text</button>
       <button className='btn btn-primary mx-2 my-3' onClick={handleExtraSpace}>remove extra space</button>
     </div>
     <div class="container mx-4 my-2">
        <p className='ms-3'>noOfWords{text.split(" ").length},noOfCharater{text.length}</p>
        <h3 className='my-2'>preview</h3>
          <p>{text}</p>
     </div>
     
     
    </div>
    </>
  );
}

