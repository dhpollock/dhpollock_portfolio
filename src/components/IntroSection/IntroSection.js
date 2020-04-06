import React from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IntroSectionAuxDiv from './IntroSectionAuxDiv'
import IntroClickableState from './IntroClickableState'
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    section:{
        display:"flex",
        justifyContent:"center",
        minHeight: '95vh',
        maxHeight: 'fit-content'
    }
});

class IntroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: 'harmon'
        };
        this.handleHighlight = this.handleHighlight.bind(this);
    };

    handleHighlight(newHighlight) {
        this.setState({
            highlight: newHighlight
        })
    };
    render() {
        const classes = this.props.classes
        return (
            <Grid container spacing={3} justify='center' className={classes.section} alignItems="center">
                <Grid item xs={12} sm={5} align={'left'}>
                    <h1>Hello, my name is <IntroClickableState currentSelect={this.state.highlight} value='harmon' onClick={this.handleHighlight}>Harmon</IntroClickableState>.</h1>
                    <h3>I am a <IntroClickableState currentSelect={this.state.highlight} value='ux' onClick={this.handleHighlight}><strong>UX & Product Generalist</strong></IntroClickableState> and entrepreneur based in <IntroClickableState currentSelect={this.state.highlight} value='durango' onClick={this.handleHighlight}>Durango, CO</IntroClickableState>.  I like to create new experiences in hopes of making a better tomorrow.</h3>
                    <p>(I also like to <IntroClickableState currentSelect={this.state.highlight} value='bike' onClick={this.handleHighlight}>bike</IntroClickableState> and hike with my <IntroClickableState currentSelect={this.state.highlight} value='pup' onClick={this.handleHighlight}>pup</IntroClickableState>)</p>
                </Grid>
                <Grid item xs={12} sm={5}>
                    {/* <Paper className={classes.paper}> */}
                    {/* <Paper> */}
                        <IntroSectionAuxDiv currentHighlight={this.state.highlight} />
                    {/* </Paper> */}
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(IntroSection);