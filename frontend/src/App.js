import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

const App = () => {
    return ( 
        <Router>
            <div className='container'>
                <Header /> 
                <Routes>
                    <Route path='/' element={<Dashboard />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;