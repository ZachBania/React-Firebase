// Core Imports
import React, { useEffect, useState } from "react";

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

const exData = [
    {
        id: 1,
        name: "Merlot Muse",
        description: "Merlot Muse was a new business venture initiated by Emily Slawski, a wine consultation company offering professional recommendations to many different types of businesses. The new initiative warranted a need for a digital presence to attract attention and generate new leads for consultation. ",
        meta: "Project Meta"
    },{
        id: 2,
        name: "Centergy",
        description: "Centergy is an organization that serves to provide regional growth and employment opportunities for the center of Wisconsin. The primary objective of launching their new digital presence was to attract and cultivate a strong community in the core counties of Wisconsin.",
        meta: "Project Meta"
    },{
        id: 3,
        name: "Sentinel Product Finder",
        description: "Kent Nutrition Group launched an initiative to help streamline consumers search for their Sentinel horse products. The scope of the project was to develop an online quiz, that assisted users in finding the products that were most relevant to their horse(s) and nutritional requirements.",
        meta: "Project Meta"
    },{
        id: 4,
        name: "Kent Nutrtion Group",
        description: "While working at Nelson Schmidt, Kent Nutrition Group became one of the agency’s largest returning clients maintaining their flagship brands KentsFeeds and BlueSeal. Initially refactoring Kent’s multi-site from 36.2GB down to 15GB lead to higher performance, and de-creased environment deployment times.",
        meta: "Project Meta"
    },{
        id: 5,
        name: "Nectar Confections",
        description: "Owners of Melt Chocolates, Ltd in Milwaukee Wisconsin, Bjorn and his father decided to launch a new business initiative during the pandemic introducing a variety of Delta-8 products. Nectar Confections was created, and required a digital platform to quickly get the awareness and their product available to the public.",
        meta: "Project Meta"
    },{
        id: 6,
        name: "600 East Wisconsin",
        description: "600 East Wisconsin is the historic cafe that lives in the heart of downtown Milwaukee underneath Nelson Schmidt Inc. In the summer of 2023, Nelson Schmidt took on re-establishing the cafe’s digital and local presence. I was responsible for developing a modern website that targeted the cafe and their business center. ",
        meta: "Project Meta"
    },{
        id: 7,
        name: "Live at the Lakefront",
        description: "Live at the Lakefront is an initiative hosted by Discovery World in the downtown harbor of Milwaukee. Serving as one of the most influential leaders in attraction management, the organization is focused on providing education and experiences to the local community.",
        meta: "Project Meta"
    },{
        id: 8,
        name: "Wisconsin Commercial Ports Association",
        description: "Wisconsin Commercial Ports Association is an organization that was created by the municipal commercial ports of Wisconsin, it serves to support the maritime economy and provide port-related service providers to the state. In effort to re-establish there digital presence, and provide a more effective platform to access maritime information. ",
        meta: "Project Meta"
    },{
        id: 9,
        name: "Voximetry",
        description: "Voximetry is an an organization that provides Dosimetry-Guided Radiopharmaceutical Therapy in Madison, Wisconsin. Our teams objective was to better represent their online presence and educate the public on the treatment options they provide to the community. ",
        meta: "Project Meta"
    },{
        id: 10,
        name: "Wisconsin Economic Development Corporation",
        description: "The Wisconsin Economic Development Corporation is an organization committed to supporting Wisconsin’s local communities, business development, and talented workforce, in effort to create a strong foundation for Wisconsin’s economy. In the summer of 2020, Governor Tony Evers and WEDC announced a new initiative providing federal grants for local small business, aimed at helping small businesses respond from the effects of the COVID-19 health emergency.",
        meta: "Project Meta"
    },

]

function List() {

  const [projects, setProjects] = useState(exData);

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
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <StaticHeader headerText="Projects"/>
            </Col>
        </Row>    
        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
            
                <div className={'projects-container'}>
                    
                    {projects.map((x) => 
                        <ListRow key={x.id} project={x} /> 
                    )}

                    <button className="btn btn-primary" onClick={addProject}>
                        Add Project
                    </button>

                    
                </div>

            </Col>
        </Row>
    </>
  );
}

export default List;
