import React from 'react';
import "./Header.css"
import PetsIcon from '@material-ui/icons/Pets';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton"

const Header = () => {
    return (
    <div className="header">
        <IconButton>
        <PetsIcon className="header__icon" fontSize="large"/>
        </IconButton>
        <IconButton>
        <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Creative-Tail-Animal-dog.svg"
        alt="pawpal logo"></img>
        </IconButton>
        <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
        </IconButton>
    </div>
    );
}

export default Header;