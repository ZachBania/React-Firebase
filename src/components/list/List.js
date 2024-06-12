// Core Imports
import React, { useEffect, useState } from "react";
import exData from "../../api/exData";

//Component Import
import ListRow from './ListRow';
import StaticHeader from "../parts/StaticHeader";

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
