// Core Imports
import './App.css';
import React, { useCallback } from 'react';
import { useState } from 'react';

// Component Imports
import Navigation from './components/navigation/Navigation';
import navValues from './components/navigation/react-routing';
import ComponentSelection from "./components/navigation/ComponentSelection";
import Flag from './components/parts/Flag';
import List from './components/list/List';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Footer from './components/navigation/Footer';

const REACT_VERSION = React.version;
const navigationContext = React.createContext(navValues.home);

function App() {

  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );
  const [nav, setNav] = useState({current: navValues.home, navigate });
  
  return (
    <navigationContext.Provider value={ nav }>
      <div className="App">
        <Navigation navigate={navigate} />

        <Container>
          <ComponentSelection currentNavLocation={nav.current}/>
          <Footer />
        </Container>
      </div>

    </navigationContext.Provider>
  );
}

export { navigationContext }
export default App;
