import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    section: {
        height: "80vh",
        display: "flex",
        justifyContent: "center",
    }
});


class ContactSection extends React.Component {
    render() {
        const classes = this.props.classes
        return (
            <Grid container spacing={3} justify='center' className={classes.section} alignItems="center">
                <Grid item>

                    <Grid item xs={12} sm={12}>
                        <h1>Connect</h1>
                        <p>Email: harmon@dhpollock.com</p>
                        <p>Github: github.com/dhpollock</p>
                        <p>LinkedIn: linkedin.com/in/dhpollock</p>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(ContactSection);