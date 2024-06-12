// Core Imports
import React, { useEffect, useState } from "react";
import exData from "../../assets/api/exData";
import { UserProvider } from "../../providers/AuthContext";
//Component Import
import Navigation from "../navigation/Navigation";
import Flag from "../parts/Flag";
import ListRow from './ListRow';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import StaticHeader from "../parts/StaticHeader";

import Pagination from 'react-bootstrap/Pagination';


function List() {

  const [projects, setProjects] = useState(exData);
  const [category, setCategory] = useState('');
  const filteredProjects = category ? projects.filter((p) => p.category_owner === category) : projects;

  const addProject = () => {
    setProjects([
        ...projects, {
            id: 11,
            name: "Project Name",
            description: "Project Description",
            meta: "Project Meta"
        }
    ]);
  };

  return (
    <>
        <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                <StaticHeader headerText="Projects"/>
            </Col>
        </Row>    
        <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
            
                {/* <select value={category} onChange={ (e) => setCategory(e.target.value)} >
                    <option value="">Select</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Agency">Agency</option>
                </select> */}

                <div className={'projects-container'}>
                    
                    {projects.map((x) => 
                        <ListRow key={x.id} project={x} /> 
                    )}


                    {/* <button className="btn btn-primary" onClick={addProject}>
                        Add Project
                    </button> */}
                </div>
            </Col>
        </Row>
    </>
  );
}

export default List;
