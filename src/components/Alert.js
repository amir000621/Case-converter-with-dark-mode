import React from 'react'
import './Alert.css'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return ( 
    // ye jo mera alertt tha ye aese ho raha tha ke screen ko hilata tha apni space banane k liye to ye achha ni lag raha tha isilye hamne iski ek height fix kri and uske andar ki js ko curly braces mein dala take vo js sahi se chale kyuki use mene kisi tag ke andar nhi dala(height dene ke baad ab achha lag raha hai kyuki ab alert ki space hamne bana di hai) 
    <div style={{height:'50px'}}>
    {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
           <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div> }
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
