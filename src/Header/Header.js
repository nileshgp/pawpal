import React from 'react';
import "./Header.css"
import PetsIcon from '@material-ui/icons/Pets';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";



const Header = ({ backButton }) => {
    const history = useHistory();
    return (
    <div className="header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon" />
            </IconButton>
        ) : (
            <IconButton>
        <PetsIcon className="header__icon" fontSize="large"/>
        </IconButton>
        )}

        <Link to="/">
        <IconButton>
        <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Creative-Tail-Animal-dog.svg"
        alt="pawpal logo"></img>
        </IconButton>
        </Link>
        <Link to="/chat">
        <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
        </IconButton>
        </Link>
    </div>
    );
}

export default Header;