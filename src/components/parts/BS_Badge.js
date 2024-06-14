// Core Imports

// Component Imports

// Bootstrap Imports
import Badge from 'react-bootstrap/Badge';

function BS_Badge(props) {
    
    // primary, secondary, success, danger, warning, info, light, dark
    
        return ( <Badge bg={props.badgeStyle}>{ props.text ? props.text : 'info' }</Badge> );
  }

export default BS_Badge;
