// Core Imports
import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './providers/AuthContext';

// Component Imports
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Footer from './components/navigation/Footer';
import Dashboard from './components/user/Dashboard';
import PageNotFound from './components/navigation/PageNotFound';
import Flag from './components/parts/Flag';

// Component Imports - Projects
import List from './components/list/List';
import Detail from './components/list/Detail';
import UpdateProject from './components/parts/UpdateProject';

// Component Imports - Users
import UpdateProfile from './components/user/UpdateProfile';
import Login from './components/user/Login';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';

function App() {

  return (

    <AuthProvider>
      <Navigation />
      <Container data-aos="fade-up">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<List />} />
          <Route path="/projects/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:eventKey" element={<Dashboard />} />
          <Route path="/update-project/:id" element={<UpdateProject />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </AuthProvider>
  );
}

export default App;
