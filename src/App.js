// App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Project from './components/list/Project';
import List from './components/list/List';
import Bootstrap from './components/bootstrap/Bootstrap';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import { AuthProvider } from './providers/AuthContext';
import Container from 'react-bootstrap/Container';
import Footer from './components/navigation/Footer';
import PageNotFound from './components/navigation/PageNotFound';
import Dashboard from './components/user/Dashboard';
import UpdateProfile from './components/user/UpdateProfile';
import UserPanel from './components/user/UserPanel';

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<List />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </AuthProvider>
  );
}

export default App;
