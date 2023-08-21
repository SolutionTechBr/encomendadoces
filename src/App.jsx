import {  useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './utils/Layout';
import { HomePage, Produtos, About, Error } from './pages/index'
import ScrollToTop from './hooks/useScrollToTop';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/produtos" element={
          <Layout>
            <Produtos />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />      
        <Route path="*" element={
          <Layout>
            <Error />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App
