// Core Imports
import React, { useContext } from "react";

// Component Imports
import { navigationContext } from "../../App";
import navValues from "../navigation/react-routing";

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const ListRow = ({project})=> {
  const { navigate } = useContext(navigationContext);
  return (

        <div className="project-container" onClick={() => navigate(navValues.project, project)}>
          <div className="project--inner-container">
            {/* <p className="project-id">{project.id}</p> */}
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            {/* <p className="project-meta">{project.meta}</p> */}
          </div>
        </div>
  );
}

const ListRowMemo = React.memo(ListRow);
export default ListRow;
export { ListRowMemo }