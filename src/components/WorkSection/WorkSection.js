import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import ImgMediaCard from './ImgMediaCard';


class WorkSection extends React.Component {
    render() {
        return (
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12}>
                <h1>Design Process Examples</h1>
                </Grid>
                <Grid item xs={12} sm={6} align='center'>
                    <ImgMediaCard
                    linkURL = "emberlast"
                    imageURL = ""
                    titleText = "EmberLast Inc."
                    />
                </Grid>
                <Grid item xs={12} sm={6} align="center">
                    <ImgMediaCard
                        linkURL = "hpe"
                        imageURL = ""
                        titleText = "HPE IoT Visualization"
                    />
                </Grid>

            </Grid>

        )
    }
}

export default WorkSection;