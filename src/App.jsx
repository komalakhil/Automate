import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import OTPVerification from './OTPVerification';
import Home from './Home';
import Newevent from './Newevent';
import Workshop from './Workshop';
import Hackathon from './Hackathon';
import Summary from './Summary';
import Contest from './Contest';
import Seminar from './Seminar';
import Webinar from './Webinar';
import Talk from './Talk';
import Others from './Others';
// import CheersAnimation from './components/CheersAnimation';
// import Newevent from './Newevent';

const App = () => (
    <div className="App">


       <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/otp/:name/:email" element={<OTPVerification/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Home"element={<Home/>} />
        <Route path="/newevent" element={<Newevent/>} />
        <Route path="/newevent/Workshop" element={<Workshop/>} />
        <Route path="/newevent/Hackathon" element={<Hackathon/>} />
        <Route path="/newevent/Coding Contest" element={<Contest/>} />
        <Route path="/newevent/Technical Seminar" element={<Seminar/>} />
        <Route path="/newevent/Technical Webinar" element={<Webinar/>} />
        <Route path="/newevent/Talk" element={<Talk/>} />
        <Route path="/newevent/Others" element={<Others/>} />
        <Route path="/Summary" element={<Summary/>}/>
        <Route path="/Home/Summary" element={<Summary/>}/>
       </Routes>
    </div>
  );

  

export default App;

