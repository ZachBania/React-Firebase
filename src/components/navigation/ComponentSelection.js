
// Components Import
import navValues from "./react-routing";
import App from "../../App";
import Home from "../home/Home";
import List from "../list/List";
import Project from "../list/Project";
import Flag from "../parts/Flag";


const ComponentSelection = ({ currentNavLocation }) => {
    switch(currentNavLocation) {
        case navValues.home:
            return <Home />;
        case navValues.projects:
            return <List />;   
        case navValues.project:
            return <Project />; 
        default:
            return (<h1>No routing found</h1>);
    }
}

export default ComponentSelection;