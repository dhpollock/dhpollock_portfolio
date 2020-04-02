import React from 'react';
import Grid from '@material-ui/core/Grid';


class ContactSection extends React.Component{
    render(){
        return(

            <Grid item xs={12} sm={12}>
                <h1>Connect</h1>
                <p>Email: harmon@dhpollock.com</p>
                <p>Github: github.com/dhpollock</p>
                <p>LinkedIn: linkedin.com/in/dhpollock</p>
            </Grid>

        )
    }
}

export default ContactSection;