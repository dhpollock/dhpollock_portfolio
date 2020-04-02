import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillChart from './SkillChart';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';

class AboutSection extends React.Component {

    render() {
        const data = [{ data: 0, value: 4, prettyPrint: "Design" }, { data: 1, value: 2, prettyPrint: "Research" }, { data: 2, value: 4, prettyPrint: "Development" }];
        return (
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
                            <Chip label="Javascript" />
                            <Chip label="Python" />
                            <Chip label="C#" />
                            <Chip label="Dart" />
                            <Chip label="CSS & SCSS" />
                            <Chip label="PHP" />
                            <Chip label="Processing" />
                        </Grid>
                        <Grid item xs={3}>
                            <p>Frameworks & Tools:</p>
                        </Grid>
                        <Grid item xs={9} >
                            <Chip label="Node.js" />
                            <Chip label="Meteor" />
                            <Chip label="D3.js" />
                            <Chip label="Blaze" />
                            <Chip label="React" />
                            <Chip label="Bootstrap" />
                            <Chip label="Material UI" />
                            <Chip label="AWS EC2 & S3" />
                            <Chip label="Unity 3D" />
                            <Chip label="MongoDB" />
                            <Chip label="BabylonJS & WebGL" />
                            <Chip label="Git/Github" />
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
                            <Chip label="Interaction Design" />
                            <Chip label="Data Visualization" />
                            <Chip label="Design for Education (K-Professionals)" />
                            <Chip label="Gameification" />
                        </Grid>
                        <Grid item xs={4} >
                        <p>Tools:</p>
                            <Chip label="Figma" />
                            <Chip label="Adobe Illustrator & XD" />
                            <Chip label="Solidworks" />
                            <Chip label="3D Studio Max" />
                            <Chip label="LaTeX" />

                        </Grid>
                        <Grid item xs={4}>
                            <p>Techniques & Processes:</p>
                            <Chip label="Personas" />
                            <Chip label="Storyboarding" />
                            <Chip label="Clickable Prototypes" />
                        </Grid>
                    </Grid>
                </Grid>
                <Hidden only={['xs', 'sm']}>
                    <Grid item sm={12} md={4} align='center'>
                        <h3>Research</h3>
                        <Divider variant="fullWidth"></Divider>
                        <Chip label="Survey Writing" />
                        <Chip label="Statistical Analysis" />
                        <Chip label="Clinical Interviews" />
                        <Chip label="In-situ observation" />
                        <Chip label="Usability & A/B Testing" />
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item sm={12} md={4} align='left'>
                        <h3>Research</h3>
                        <Divider variant="fullWidth"></Divider>
                        <Chip label="Survey Writing" />
                        <Chip label="Statistical Analysis" />
                        <Chip label="Clinical Interviews" />
                        <Chip label="In-situ observation" />
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
        )
    }
}

export default AboutSection;