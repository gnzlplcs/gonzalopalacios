import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { NotFound } from './routes/NotFound';
import { AboutPage } from './routes/AboutPage';
import { ContactPage } from './routes/ContactPage';
import { NavBar } from './components/NavBar';

export const App = () => {
  return (
    <Router>
      <Header title="Gonzalo Palacios" />
      <NavBar />
      <Outlet />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="about" element={<AboutPage />}/>
        <Route exact path="contact" element={<ContactPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
   );
}
