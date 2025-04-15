import React from 'react'
import './Alert.css'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return ( props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
           <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>  
  )
}

////initial mien alert null hai to react ne kuchh ni dikhaya lekin jab dark mode enable kra ya kuchh or enable kara to showAlert trigger hua ab vo falsy nhi raha ab usne div ko render kr diya
    /*Agar condition truthy hai (jaise true, object, non-empty string, number ≠ 0):
Toh && ka right side <div>Hello</div> evaluate hota hai
➤ Render hota hai
Agar condition falsy hai (jaise false, null, undefined, 0, ''):
Toh && expression short-circuit ho jata hai
➤ Kuch bhi render nahi hota */
    // ✅Initially: alert = null → props.alert && <div>...</div> returns null → Nothing renders.
//✅ After showAlert(): alert becomes an object → condition passes → div is rendered.
