import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillChart from './SkillChart';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    section:{
        height:"95vh",
        display:"flex",
        justifyContent:"center",
    }
});

class AboutSection extends React.Component {

    render() {
        const data = [{ data: 0, value: 4, prettyPrint: "Design" }, { data: 1, value: 2, prettyPrint: "Research" }, { data: 2, value: 4, prettyPrint: "Development" }];
        const classes = this.props.classes
        return (
            <Grid container spacing={3} justify='center' className={classes.section} alignItems="center">
                <Grid item>
                    <Grid container spacing={3} justify='center'>
                        <Grid item xs={12}>
                            <h1>About Me</h1>
                        </Grid>
                        <Grid item sm={12} md={4} align='left'>
                            <h3>Development</h3>
                            <Divider variant="fullWidth"></Divider>
                            <Grid container>
                                <Grid item xs={3}>
                                    <p>Languages:</p>
                                </Grid>
                                <Grid item xs={9} >
                                    <Chip label="Javascript" size="small" />
                                    <Chip label="Python" size="small" />
                                    <Chip label="C#" size="small" />
                                    <Chip label="Dart" size="small" />
                                    <Chip label="CSS & SCSS" size="small" />
                                    <Chip label="PHP" size="small" />
                                    <Chip label="Processing" size="small" />
                                </Grid>
                                <Grid item xs={3}>
                                    <p>Frameworks & Tools:</p>
                                </Grid>
                                <Grid item xs={9} >
                                    <Chip label="Node.js" size="small" />
                                    <Chip label="Meteor" size="small" />
                                    <Chip label="D3.js" size="small" />
                                    <Chip label="Blaze" size="small" />
                                    <Chip label="React" size="small" />
                                    <Chip label="Bootstrap" size="small" />
                                    <Chip label="Material UI" size="small" />
                                    <Chip label="AWS EC2 & S3" size="small" />
                                    <Chip label="Unity 3D" size="small" />
                                    <Chip label="MongoDB" size="small" />
                                    <Chip label="BabylonJS & WebGL" size="small" />
                                    <Chip label="Git/Github" size="small" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Hidden only={['xs', 'sm']}>
                            <Grid item sm={12} md={4} align="center">
                                <SkillChart
                                    data={data}
                                    width={200}
                                    height={200}
                                    innerRadius={60}
                                    outerRadius={100}
                                />
                            </Grid>
                        </Hidden>
                        <Grid item sm={12} md={4} align='left'>
                            <h3>Design</h3>
                            <Divider variant="fullWidth"></Divider>
                            <Grid container>
                                <Grid item xs={4}>
                                    <p>Specializations:</p>
                                    <Chip label="Interaction Design" size="small" />
                                    <Chip label="Data Visualization" size="small" />
                                    <Chip label="Design for Education (K-Professionals)" size="small" />
                                    <Chip label="Gameification" size="small" />
                                </Grid>
                                <Grid item xs={4} >
                                    <p>Tools:</p>
                                    <Chip label="Figma" size="small" />
                                    <Chip label="Adobe Illustrator & XD" size="small" />
                                    <Chip label="Solidworks" size="small" />
                                    <Chip label="3D Studio Max" size="small" />
                                    <Chip label="LaTeX" size="small" />

                                </Grid>
                                <Grid item xs={4}>
                                    <p>Techniques & Processes:</p>
                                    <Chip label="Personas" size="small" />
                                    <Chip label="Storyboarding" size="small" />
                                    <Chip label="Clickable Prototypes" size="small" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Hidden only={['xs', 'sm']}>
                            <Grid item sm={12} md={4} align='center'>
                                <h3>Research</h3>
                                <Divider variant="fullWidth"></Divider>
                                <Chip label="Survey Writing" size="small" />
                                <Chip label="Statistical Analysis" size="small" />
                                <Chip label="Clinical Interviews" size="small" />
                                <Chip label="In-situ observation" size="small" />
                                <Chip label="Usability & A/B Testing" size="small" />
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid item sm={12} md={4} align='left'>
                                <h3>Research</h3>
                                <Divider variant="fullWidth"></Divider>
                                <Chip label="Survey Writing" />
                                <Chip label="Statistical Analysis" size="small" />
                                <Chip label="Clinical Interviews" size="small" />
                                <Chip label="In-situ observation" size="small" />
                                <Chip label="Usability & A/B Testing" />
                            </Grid>
                        </Hidden>


                        <Grid item xs={12}>
                            <h3>Resume</h3>
                            <p>Looking for more information, check out my <a href="#">resume</a></p>
                        </Grid>

                        <Grid item xs={12}>
                            <h3>Availabilty</h3>
                            <p>I am available for real time collaboration with timezones UTC-11 through UTC+1, and asynchronously any where in the world. </p>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(AboutSection);