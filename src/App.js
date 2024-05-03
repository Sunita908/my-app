import './App.css';
import Navbar from './componets/Navbar';
import NewAbout from './componets/NewAbout';
import TextForm from './componets/TextForm';
import React, {useState} from 'react'
import Alert from './componets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type)=>{
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode("dark");
      console.log("clicked");
      document.body.style.backgroundColor ='#03293f';
      showAlert("Dark Mode has bee Enabled", "success");
      document.title = "TextUtilize - Dark Mode";
      // setInterval(()=>{
      //   document.title ="Text Utilities is awesome"
      // },2000)
    }
    else{
      setmode("light");
      console.log("Not clicked");
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode has bee Enabled", "success");
      document.title = "TextUtilize - Light Mode";
    }
  }
  const greenMode = ()=>{
    setmode("success");
    document.body.style.backgroundColor ="#083f08";
  }
  const redMode = ()=>{
    setmode("danger");
    document.body.style.backgroundColor ="#830000";
  }
  return (
<>
<Router>
    <Navbar title='Dezy Astro' mode ={mode} toggleMode = {toggleMode} greenMode={greenMode} redMode={redMode}/>
    <Alert alertTitle = {alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/about" element={ <NewAbout/>}>
          </Route>
          
          
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading='Enter your Message' mode ={mode}/>}>
          {/*  */}
          </Route>
    </Routes>
    
    {/* <NewAbout/> */}
   </div>
  </Router> 
</>
  );
}

export default App;
