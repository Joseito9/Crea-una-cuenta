import { useState } from 'react';
import './App.css'
import Registro from './components/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [error, setError] = useState({
    error:"", msg:"", color: ""
  });
  return (
    <> 
    <Registro />
    </>
  )
}

export default App
