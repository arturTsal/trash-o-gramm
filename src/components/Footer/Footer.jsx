import React from 'react';
import Typography from '@material-ui/core/Typography';


function Footer() {
  return (
        <React.Fragment>
            <Typography variant="h6" align="center" gutterBottom>
              Trash-O-Gramm
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              The most luxury photo-blog!
            </Typography>
        </React.Fragment>
    );
}

export default Footer;
