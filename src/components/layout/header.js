import React, { Component } from 'react';
import {AppBar , Toolbar} from '@material-ui/core';
export class Header extends Component {
    render() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <p>Header</p>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;

