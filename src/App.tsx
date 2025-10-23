import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostDetail from "./components/PostDetail"
import TaoBaiViet from "./pages/TaoBaiViet"
import ChiTietBai from "./pages/PostDetail"
// ...




export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/bai/:id" element={<ChiTietBai />} />
        <Route path="/create" element={<TaoBaiViet />} />
        <Route path="/" element={<PostList />} />
        <Route path="/viet-bai" element={<PostForm />} />
        <Route path="/bai/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  )
}



