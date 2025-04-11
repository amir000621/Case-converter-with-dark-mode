//to get react function based component we just write rfc it is key by extension
/*use state is a hook
Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.

State Hooks 
State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.
*/
import React,{useState} from 'react'

//start wala text hoga and update wala setText(aese hi mein [count,setCount],[index,setIndex] apne hisaab se rakh sakte hai)

export default function TextForm(props) {
  //text = "new text" ->wrong way to change the state 
  //setText("new text") ->correct way to change state
  //useState() – Memory jaisa hota hai 🧠 Agar aapko component ke andar data store karna ho (jo change bhi ho sakta hai), to useState use karte hain.
  const handleUpClick = () =>{
    //console.log("UpperCase was Clicked:" + text)
    let newText = text.toUpperCase();
    setText(newText)
  };

  const handledownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  };

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  };

  //slice(1) is a JavaScript string method that returns a portion of the string starting from index 1 to the end.
  const handleCapitalizeCase = () =>{
    let newText = text.split(" ").map(word =>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ") 
    setText(newText)
  };

    const handleCopyText = ()=>{
      navigator.clipboard.writeText(text)
    .then(()=>{
        alert ("copy to clipboard")
      })

    .catch(error =>{
          console.log("failed to copy",error)
        })
    };

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);// this is called regex to remove extra spaces
      setText(newText.join(" "))
    }

  const handleChange = (event) =>{
   // console.log("On Change")
    setText(event.target.value)//user jo bhi value de vo add ho jaye already written value mein mean ab input de sakte h new value text setText mein update hoti ja rahi hai
  };

  const [text, setText] = useState('');//is line ko function component ke andar rakhna hota hai

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    {/* ye heading mein app.js mein dunga jo chahe vo according to our topic.*/}
    <h1>{props.heading}</h1>
    {/* this className mb-3 is bootstrap class mean margin bottom 3 */}
      <div className="mb-3">
        <label htmlFor="myBox" className='form-label'>Give your textarea</label>
        <textarea className='form-control' id='myBox' rows={5} value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handledownClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear the text</button>
      <button className="btn btn-primary mx-3" onClick={handleCapitalizeCase}>Capitalize case </button>
      <button className="btn btn-primary mx-3" onClick={handleCopyText}>Copy the text </button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove extra spaces </button>
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      {/* split() splits a string into an array of substrings, and returns the array: How,are,you,doing,today? */}
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p> {0.25*text.split(" ").length} seconds to read</p> 
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
    </>
  )
}
