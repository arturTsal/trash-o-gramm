import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import CameraIcon from '@material-ui/icons/PhotoCamera';




function Header () {
    return (
        <React.Fragment>
          <AppBar position="static" className="app-bar">
            <Toolbar>
              <CameraIcon className="icon" />
              <Typography variant="h5" color="inherit" noWrap>
                Trash-O-Gramm
              </Typography>
            </Toolbar>
          </AppBar>
        </React.Fragment>
    );
}

export default Header;
