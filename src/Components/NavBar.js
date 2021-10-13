import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import ReorderIcon from '@material-ui/icons/Reorder'

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a><Link to="">Home</Link></a>
                    <a><Link to="about">About</Link></a>
                    <a><Link to="projects">Projects</Link></a>
                    <a><Link to="contact">Contact</Link></a>
                </div>
                <button on onClick={() => setShowLinks(!showLinks)}> <ReorderIcon/> </button>
                <div className="rightSide"></div>
            </div>
        </div>
    );
}

export default Navbar;
