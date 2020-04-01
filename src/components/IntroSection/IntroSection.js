import React from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IntroSectionAuxDiv from './IntroSectionAuxDiv'
import IntroClickableState from './IntroClickableState'


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
        return (<Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <h1>Hello!</h1>
                <h2>My name is <IntroClickableState value='harmon' onClick={this.handleHighlight}>Harmon</IntroClickableState>.</h2>
                <p>I am a designer, coder, <IntroClickableState value='research' onClick={this.handleHighlight}>researcher</IntroClickableState> and entrpenuer based in Durango, CO.  I like to create new experiences in hopes of makeing a better tomorrow.</p>
                <small>(I also like to bike and hike with my pup)</small>
            </Grid>
            <Grid item xs={12} sm={6}>
                {/* <Paper className={classes.paper}> */}
                <Paper>
                    <IntroSectionAuxDiv currentHighlight = {this.state.highlight}/>
                </Paper>
            </Grid>
        </Grid>
        )
    }
}

export default IntroSection;