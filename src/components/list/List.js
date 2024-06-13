// Core Imports
import React, { useEffect, useState } from "react";
// import exData from "../../api/exData";
import {useAuth} from '../../providers/AuthContext';

//Component Import
import ListRow from './ListRow';
import StaticHeader from "../parts/StaticHeader";

// Bootstrap Imports 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function List() {
    const { projects, setProjects, getProjects } = useAuth();  

    useEffect(() => {
        getProjects();  
    }, []);

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText="Projects" />
                </Col>
            </Row>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <div className={'projects-container'}>

                        {projects.map((x) =>
                            <ListRow key={x.id} project={x} />
                        )}
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default List;
