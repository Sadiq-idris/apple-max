import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component imports
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import About from "./components/About";
import {AuthProvider} from "./components/context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile"
import PasswordReset from "./components/PasswordReset";
import UpdateProfile from "./components/UpdateProfile"
import Todos from "./components/Todos"
import Zagram from "./components/Zagram";
import Footer from "./components/Footer";

const App = () => {
   
    return ( 
        <Router>
            <AuthProvider>
                <Header/>
                <main>
                    <div >
                        
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/signup" element={<SignUp/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/profile" element={<PrivateRoute Component={Profile} />}/>
                            <Route path="/reset-password" element={<PasswordReset/>}/>
                            <Route path="/update-profile" element={<UpdateProfile/>}/>
                            <Route path="/todos" element={<PrivateRoute Component={Todos}/>}/>
                            <Route path="/zagram" element={<PrivateRoute Component={Zagram}/>}/>
                        </Routes>
                    
                    </div>
                </main> 
                <Footer/>
            </AuthProvider>
        </Router>
     );
}
 
export default App;