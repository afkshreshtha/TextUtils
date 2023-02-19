
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  let [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }



  let toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Enable Dark Mode", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Enable Light Mode", "success")

    }
  }

  return (
    <>
     
  
      <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
          <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyzie below" mode={mode} />} />
          <Route exact path='/about' element={<About mode={mode} />}></Route>
        </Routes> 
      </Router>
    </>
  );
}

export default App;
