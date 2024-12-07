import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Entry from "./src/auth/entry"
import SignUp from "./src/auth/signup";
import SignIn from "./src/auth/signin";
import Home from "./src/pages/home";
import Tools from "./src/pages/tools";
import AddTool from "./src/pages/addTool";
import About from "./src/pages/aboutus";

const MainRouter = () =>{
    return (
        <Routes>
            <Route index element={<Entry />}/>
            <Route path="/entry" element={<Entry />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/tools" element={<Tools/>}/>
            <Route path="/tools/add" element={<AddTool/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>     
    );
};

export default MainRouter;