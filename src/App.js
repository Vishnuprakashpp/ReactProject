
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
 const [mode,setMode]= useState('light');
 //const[dtext,setdtext]=useState('darkMode');
 const[alert,setAlert]=useState(null)
 const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null)
   },2000)
 }
 const toggleMode=()=>{
   if(mode==="light"){
    setMode('dark')
    document.body.style.backgroundColor ='gray';
    showAlert('darkmode enabled','success')
   }
   else{
    setMode('light')
    document.body.style.backgroundColor='light';
    showAlert("light enabled","success")
  }
 }
  return (
  <>
  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div >
    <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/></div>
    {/* <div class="container">
      <About />
    </div> */}
    
  
  </>
  );
}

export default App;
