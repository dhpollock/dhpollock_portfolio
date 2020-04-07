import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from "../common/Footer/Footer"
import Container from '@material-ui/core/Container';
import Navbar from "../common/Navbar/Navbar"
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    section: {
        display: "flex",
        justifyContent: "center",
        maxHeight: 'fit-content',
        paddingTop: '50px',
    },
    titleSection: {
        textAlign: 'center',
        paddingTop:'25px',
        paddingBottom:'25px'
    },
    titleOverlaySection:{
        backgroundColor:'#000000',
        opacity:'.75'
    },
    bodySection: {
        textAlign: 'left',
    },
});

function ProjectTemplate(props) {
    const classes = props.classes
    return (
        <Container>
            <Grid container className={classes.section}>
                <Grid item xs={12} sm={8}>
                    <div className={classes.titleSection} style={{backgroundImage:`url(${props.bannerImage})`}}>
                        <div className={classes.titleOverlaySection}>
                            <h1>{props.title}</h1>
                            <h3>By: {props.author}</h3>
                            <small>Posted: {props.date}</small>
                        </div>
                    </div>
                    <div className={classes.bodySection}>
                        {props.children}
                    </div>
                </Grid>
            </Grid>
        </Container>

    )
}

export default withStyles(useStyles)(ProjectTemplate);