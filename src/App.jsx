import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/login";
import SignOut from "./pages/Signup";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
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
    <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>


    

   </Routes>
   </BrowserRouter>
      
      
  
  )
}