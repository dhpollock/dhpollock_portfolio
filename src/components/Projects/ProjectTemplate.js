import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles";
import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
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
        paddingBottom:'25px',
        marginBottom:'75px'
    },
    titleOverlaySection:{
        backgroundColor:'#000000',
        opacity:'.75'
    },
    bodySection: {
        textAlign: 'left',
    },
});
const lightboxOptions={
    enablePanzoom:false,
    autoplaySpeed:0,
}
function ProjectTemplate(props) {
    const classes = props.classes
    return (
        <SimpleReactLightbox>    
            <Container>
                <Grid container className={classes.section}>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.titleSection} style={{backgroundImage:`url(${props.bannerImage})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                            <div className={classes.titleOverlaySection}>
                                <h1>{props.title}</h1>
                                <h3>By: {props.author}</h3>
                                <small>Posted: {props.date}</small>
                            </div>
                        </div>
                        <div className={classes.bodySection}>
                        <SRLWrapper options={lightboxOptions}>
                            {props.children}
                            </SRLWrapper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </SimpleReactLightbox>
    )
}

export default withStyles(useStyles)(ProjectTemplate);