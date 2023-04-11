// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import Vote from './components/Vote';
import Proposal from './components/Proposal';
import { useState } from 'react';
function App() {

  const [auth, setAuth] = useState(0)
  const [userAddress, setUserAddress] = useState("Connect")

  return (
    <div className="App">
      <Routes>
        <Route element={<Home auth={auth} setAuth={setAuth} userAddress={userAddress} setUserAddress={setUserAddress} />}  path="/" />
        <Route element={<Vote auth={auth} setAuth={setAuth} userAddress={userAddress} setUserAddress={setUserAddress} />} path='vote' />
        <Route element={<Proposal auth={auth} setAuth={setAuth} userAddress={userAddress} setUserAddress={setUserAddress} />} path='propose' />
      </Routes>
    </div>
  );
}

export default App;
