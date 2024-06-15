// Core Imports
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './providers/AuthContext';

// Component Imports
import Container from 'react-bootstrap/Container';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Footer from './components/navigation/Footer';
// Component Imports - Projects
import List from './components/list/List';
import Detail from './components/list/Detail';
import UpdateProject from './components/parts/UpdateProject';
// Component Imports - Auth
import Dashboard from './components/user/Dashboard';
import UpdateProfile from './components/user/UpdateProfile';
import Login from './components/user/Login';
// Component Imports - Additional
import PageNotFound from './components/navigation/PageNotFound';

// Bootstrap Imports


function App() {

  return (
    <AuthProvider>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<List />} />
          <Route path="/projects/:id" element={<Detail />} />
          <Route path="/update-project/:id" element={<UpdateProject />} />
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
