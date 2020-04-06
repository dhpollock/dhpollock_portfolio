import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import ImgMediaCard from './ImgMediaCard';
import withStyles from "@material-ui/core/styles/withStyles";
import HPEThumb from '../../images/hpe_demolvl05.png';
import EmberlastThumb from '../../images/emberlast_sticky.png'
const useStyles = theme => ({
    section:{
        display:"flex",
        justifyContent:"center",
        minHeight: '95vh',
        maxHeight: 'fit-content'
    }
});

class WorkSection extends React.Component {
    render() {
        const classes = this.props.classes
        return (
            <Grid container spacing={3} justify='center' className={classes.section} alignItems="center">
                <Grid item>
                    <Grid container>
                        <Grid item xs={12}>
                        <h1>Projects</h1>
                        </Grid>
                        <Grid item xs={12} sm={6} align='center'>
                            <ImgMediaCard
                            linkURL = "emberlast"
                            imageURL = {EmberlastThumb}
                            imageTitle = "Emberlast Sticky Notes"
                            imageAlt = "emberlast thumbnail"
                            titleText = "EmberLast Inc."
                            subText = "Designing around death, grief and celebration.  A case study following my founding of Emberlast Inc. and the lessons leared designing for the deathcare industry."
                            >
                            </ImgMediaCard>
                        </Grid>
                        <Grid item xs={12} sm={6} align="center">
                            <ImgMediaCard
                                linkURL = "hpe"
                                imageURL = {HPEThumb}
                                imageTitle = "HPE Demo Level 05"
                                imageAlt = "hpe thumbnail"
                                titleText = "HPE IoT Visualization"
                                subText = "A case study into research based design, and creating a novel data visualization and interaction model for managing complex Internet of Things (IoT) systems."
                            >
                            </ImgMediaCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default withStyles(useStyles)(WorkSection);