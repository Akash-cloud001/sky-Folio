import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setLoader(true);
    setTimeout(()=>{setLoader(false)},1750);
  },[])
  return (
    <>
      {loader? <Loader /> : <Home />}
     {/* <Home /> */}
    </>
  )
}

export default App
