import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
  
          <li className="nav-item">
          <a href="/" className="nav-link active">{props.abouttext}</a>
          </li>
          
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
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

