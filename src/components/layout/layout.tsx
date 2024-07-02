import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./layout.css";
import { Pidorasi } from "../pidorasi/pidorasi";
import { Home } from "../home/home";


export const Layout = () => {
  return (
    <BrowserRouter>
      <div className="navigation">
        <Link to="/pidorasi">Пидорасы</Link>
        <Link to="/home">Домой</Link>
      </div>
      <div className="page-container">
        <Routes>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/pidorasi" element={<Pidorasi></Pidorasi>}/>
          <Route path="*" element={<div className="error-page">
            <h1>404</h1>
            <p>Нет такой страницы</p>
          </div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
