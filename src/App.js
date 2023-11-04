
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';

function App() {
  return (
  <>
  <Navbar title="Textutils"/>
  <div >
    <TextForm heading="Enter the text to analyze"/></div>
    {/* <div class="container">
      <About />
    </div> */}
    
  
  </>
  );
}

export default App;
