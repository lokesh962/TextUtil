import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {

  const [ldmode, setmymode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };


  const mymode = () => {
    if (ldmode === 'dark') {
      setmymode('light')
      document.body.style.backgroundColor = '#8f77d1';
      showAlert("Light Mode Enable", "success")
    }
    else {
      setmymode('dark')
      document.body.style.backgroundColor = '#2c2828';
      showAlert("Dark Mode Enable", "success")
    }
  }
  return (
    <>
   <Router>
        <Navbar title="TextUtils" about="About Us" mode={ldmode} mymode={mymode} alert={showAlert} />
        <Alert alert={alert} />
        <div className="container my-3">   
        
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/TextUtils" element={<Textform heading="Enter The text to analyze" mode={ldmode} alert={showAlert} />}></Route>
        </Routes>
        </div>
        </Router>
    
    </>


    
  );
}

export default App;
