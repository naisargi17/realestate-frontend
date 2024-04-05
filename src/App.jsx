import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/login";
import SignOut from "./pages/Signup";
import Header from "./components/Header";

export default function App(){
  return(
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path ="/" element={<Home/>}/>    
    <Route path ="/about" element={<About/>}/>    
    <Route path ="/profile" element={<Profile/>}/>    
    <Route path ="/login" element={<Login/>}/> 
    <Route path ="/signup" element={<SignOut/>}/> 


    

   </Routes>
   </BrowserRouter>
      
      
  
  )
}