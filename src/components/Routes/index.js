import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import React from 'react';
import Login from '../../pages/Login';
import Home from '../../pages/Home';



const index = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" exact element={<Home/>}/> 
            <Route path="/login" exact element={<Login/>}/>
            <Route path="*" element={<Navigate to ="/" />}/>
            </Routes> 
        </Router>

        
    );
};

export default index;
