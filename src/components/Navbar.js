import React from 'react'
//props ko use krne ke liye PropTypes ko import krna padta hai
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg ${props.greenMode === 'green' ? 'bg-success' : `navbar-${props.mode} bg-${props.mode}`}`}>
    <div className="container-fluid">
    {/* change anchor tag(a) to Link and href ki jagah to likho react router k liye ab jab is title pr click krenge to ye hame us page pr leke jayga jo hamne iske liye set kra hoga app.js mein iske liye filhal hamne Textform ko set kra hai*/}
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
  
          <li className="nav-item">
          <Link to="/About" className="nav-link active">{props.abouttext}</Link>
          </li>
          
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

{/* to combine both switches i used checked = {props.mode === 'darkGreen'} ,,checked = {props.mode === 'dark'} so that when one is click to open another one is close automatically but its not all i also change onclick to onChange in both swithches bcz React recommends this for checkboxes/switches */}
        {/*here we take a switch from bootstrap for dark mode*/}
            <div className={`form-check form-switch ms-5 text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" checked = {props.mode === 'dark'}id="switchCheckDefault-1"/>
      <label className= "form-check-label" htmlFor="switchCheckDefault-1">{props.modeName}</label>
    </div>
            {/*here we take a switch from bootstrap for dark blue mode*/}
            <div className={`form-check form-switch ms-5 text-${props.greenMode==='light'?'green':'light'}`}>
      <input className="form-check-input" type="checkbox"
      checked = {props.greenMode === 'green'} onChange={props.darkGreen} role="switch" id="switchCheckDefault-2"/>
      <label className= "form-check-label" htmlFor="switchCheckDefault-2">{props.greenModeName}</label>
    </div>

      </div>
    </div>
  </nav>
  )
}

//yaha mene ye set kra hia ki jo bhi props mein bheju unka kya type hona chiye aesa na ho ke aap title mein number dedo aese cases se bachane k liye ya mein number rakhta to yaha check mein number laga deta ya array etc..
//we can also write defualt props in the case when we do not pass any prop
//title: PropTypes.string.isRequired  => agar hamne aes likha to prop ko value dena must ho jayga then it throw error ha agar default de rakha hai to vo pass ho jayga error bach khatam ho jayga isRequired hone pr bhi 
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string 
}

//default prop->ye kab kaam kregi jab hame kuchh pass na kra ho props ke liye lekin hamne pass kr rakha hai app.js mien ye default proprs send dene chiye galti se bachate hai,, title = "My-APP" abouttext = "About My App" to jo hame pass kr rakha hai vahi kaam krega default nhi
Navbar.defaultProps = {
  title: 'set title here',
  abouttext: 'About text here'
}

