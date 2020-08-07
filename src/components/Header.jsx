import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { StyledHeader } from '../styles/Header';
import Switch from './Switch';

function Header(props) {
    return (
        <StyledHeader>
            <h1>
                <CreateIcon className="logo"/>
                Rememberify
            </h1>
            <Switch {...props} />
        </StyledHeader>
    );
}

export default Header;
