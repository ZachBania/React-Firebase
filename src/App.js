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
// Component Imports - Auth
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
// Component Imports - Additional
import PageNotFound from './components/navigation/PageNotFound';

// Bootstrap Imports
import Bootstrap from './components/bootstrap/Bootstrap';

function App() {

  return (
    <AuthProvider>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<List />} />
          <Route path="/projects/:id" element={<Detail />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </AuthProvider>
  );
}

export default App;
