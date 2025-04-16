import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter,Route,  Routes } from 'react-router-dom';

//jo bhi kuchh ham is file mein likehnge vahi sab kuchh hame UI pr show hoga and is file ko ham index.js se connect krte hai
/*{/* anything that we have return in curly braces are treat as js 
let name = "Amir"
<h1>Hello {name} </h1> */
//props mean properties hamne ek component banaya ham us mein kuchh chje pass krna chahte hai mean kuchh vaiables hai jo ki mein bataunga ki kya honge wahi props hai
function App() {
  
  //ham dark mode ki jyada se jyada control yaha app.js mein rakhenge taki sare state control kr sake 
  const [mode, setMode] = useState('light');//whether dark mode is enable or not(initially i set darkmode as false mean dark mode is off when user click on button we set dark mode as true mean dark mode is enabled)
  //*** i made the state name mode then i pass this state as a prop to the other component like below <TextForm heading = "Enter the text to analyze" mode = {mode} toggleMode = {toggleMode} /> so that i can also acces it in the components or their file this is called This is called prop drilling (passing data from parent to child)


//darkGreen mode
  const [greenMode,setGreenMode] = useState('light');

  const darkGreen = () =>{
    if(greenMode === 'light'){
      setGreenMode('green')
      setMode('light')//turn off dark mode if it was open when we enable green
      document.body.style.backgroundColor = '#abebc6 '
      document.title = 'Text Editor- green mode'

    }
    else{
      setGreenMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Editor- light mode'
    }
  }

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      setGreenMode('light')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled","success")
      document.title = 'Text Editor- dark mode'
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      document.title = 'Text Editor- light mode'

    }

  }
  return (
   <>
   {/* yaha mene ek navbar componennt ko import kara and use is tarh kra ke jaha chaho use kro with different title mean ek hi nav ko kahi bhi usekro yaha mene tiitle ko aese rakha hai ke use change kr sake use krte waqt about ko bhi aese hi rakha hai */}

   {/*  mode = {mode} ye dono component ko props ke tarah pass kre kyuki dono jagha use hai and toggleMode = {toggleMode} ye sirf Navbar ko diya kyuki swith sirf wahi mojud hai kahi or nhi */}
   {/* i add-> basename="/my-react-app" bcz react dom need this to getting live*/}
   <BrowserRouter basename="/Case-converter-with-dark-mode">
<Navbar title = "My-APP" abouttext = "About" mode = {mode} toggleMode = {toggleMode} darkGreen= {darkGreen} modeName = {mode==='light'? 'enable dark mode': 'disable dark mode'}
greenModeName = {greenMode ==='light'? 'enable dark Green mode': 'disable dark Green mode'}
greenMode = {greenMode}
/>

<Alert alert = {alert}/>
{/* bootstrap ki class hoti hai container jise dene se ye textArea jara badhiya sa ho jayga apne aap */}
<div className="container">
{/* <About mode = {mode} /> => ye about.js ko mene remove kr diya kyuki UI pr achha nhi lag raha tha */}
<Routes>
{/* hamne npm i se react router dom ko install kara uske baad ->import { BrowserRouter,Route,  Routes } from 'react-router-dom' 
fr niche path set kara element ke andar component ko diya and that's it done 
 */}
  <Route exact path='/about' element = {<About mode = {mode}/>}></Route>
  <Route exact path='/' element = {<TextForm heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert} greenMode = {greenMode} />}></Route>
</Routes>
</div>
</BrowserRouter>
   </>
  );
}


export default App;
