import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Blog from "./components/pages/blog/Blog";
import Profileinfo from "./components/pages/profileinfo/Profileinfo";
import Createshop from "./components/pages/createshop/Createshop";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Single from "./components/pages/single/Single";
import Menus from "./components/pages/menus/Menus";
import MenusByCat from "./components/pages/menusbycat/MenusByCat";
import Menutemplate from "./components/pages/menutemplate/Menutemplate";
import About from "./components/pages/about/About";
import Addproduct from "./components/pages/addproduct/Addproduct";
import SingleMenu from "./components/singlemenu/SingleMenu"
import Qr from "./components/pages/qr/Qr";
import Singlecat from "./components/pages/singlecat/Singlecat";
import Events from "./components/pages/events/Events";



function App() {
  const {user} = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
        <Route path="/menus" element={<Menus />}></Route>
        <Route path="/menus/:cat" element={<MenusByCat />}></Route>
        <Route path="/category/:postId" element={<Singlecat />}></Route>
        <Route path="/register" element={user ? <Home/> :<Register />}></Route>
        <Route path="/login" element={user ? <Home/> :<Login />}></Route>
        <Route path="/MenuTemplate" element={<Menutemplate/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/shop/:postId" element={<SingleMenu/>}></Route>
        <Route path="/blog" element={user ? <Blog /> :<Register/>}></Route>
        <Route path="/qr" element={user ? <Qr /> :<Register/>}></Route>
        <Route path="/Addproduct" element={user ? <Addproduct/> :<Register/>}></Route>
        <Route path="/profileinfo" element={user ? <Profileinfo /> :<Register/>}></Route>
        <Route path="/createshop" element={user ? <Createshop /> :<Register/>}></Route>
        <Route path="/Events" element={<Events />}></Route>
      </Routes>
    </Router>
  );
}

export default App;