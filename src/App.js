import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {GlobalProvider} from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
        <GlobalProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/add" element={<AddUser/>}/>
                    <Route path="/edit/:id" element={<EditUser/>}/>
                </Routes>
            </Router>
        </GlobalProvider>

      
    </div>
  );
}

export default App;
