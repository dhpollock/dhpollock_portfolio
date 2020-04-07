import React from 'react';
import ProjectTemplate from "./ProjectTemplate";
import ImageContainer from "../common/ImageContainer"
import HPEThumb from '../../images/hpe_demolvl05.png';
import ResearchImage from '../../images/hpe/research.png'
import Screenshot01 from '../../images/hpe/hpe_demolvl01.png'
import Screenshot02 from '../../images/hpe/hpe_demolvl02.png'
import Screenshot03 from '../../images/hpe/hpe_demolvl03.png'
import Screenshot04 from '../../images/hpe/hpe_demolvl04.png'
import Screenshot05 from '../../images/hpe/hpe_demolvl05.png'
import Screenshot06 from '../../images/hpe/hpe_demolvl06.png'
import DeadspaceUI from '../../images/hpe/deadspaceUI.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    section: {
        textAlign: "left",
    },
    cardDark: {
        backgroundColor: '#222222',
        width: '75%',
    },
    emphasis: {
        color: theme.palette.secondary.main
    },
    noteContainer: {
        justifyContent: 'center',
        display: 'flex',
    },
});

function ProjectHPE(props) {
    const classes = props.classes
    return (
        <ProjectTemplate
            title="HPE IoT Visualization"
            author="Harmon Pollock"
            date="March 2020"
            bannerImage={HPEThumb}
        >

            <h2>Introduction:</h2>
            <p>At Hewlett Packard I was part of the Mechanisms and Design Lab which was charged with developing novel IP that could be integrated or improve HP’s offerings. My research directive was to explore potential data visualization for complex systems, such as large wireless networks and IoT systems.</p>

            <h2>Research Based Design:</h2>
            <p>Talk about certain research that has been done in the area:  Here is a flow chart breaking down some of the research that was addressed in the initial phase of the project.</p>
            <ImageContainer
                image={ResearchImage}
                caption="A breakdown of exisiting research and relevancy to the project"
            />

            <p>While all the details are these prior work would be exhaustive to review here, there were a number of key takeaways:</p>

            <p>  Gero and Kannengiesser define SBF as follows:</p>
            <div className={classes.noteContainer}>
                <Card variant="outlined" className={classes.cardDark}>
                    <CardContent>
                        {/* <Typography gutterBottom component='h3'>
                            A quick note on clinical interviewing about death and grief:
                    </Typography>
                        <Typography variant="body2" component="p">
                            This is a difficult topic for many people to talk about, and especially so with random strangers (myself) over the internet or phone. Obviously as the interview it was critical to bring hefty amount of <strong className={classes.emphasis}>RESPECT</strong> and <strong className={classes.emphasis}>OPEN MINDEDNESS</strong> to the table, and be prepared for tears, as it is the nature of the subject matter. On top of these key tenants, there were a few strategies that helped the process.
                        <br /><br />
                        </Typography> */}

                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="The structure, behavior, function (SBF) ontology is way of organizing complexity. SBF framework is adequate for supporting in-depth learning of a complex system. First, it is able to model the structure of the system, which is often the primary method of understanding for a novice, but it also supports a deeper, interconnected model of the functions and behavior of a system that experts prefer to use for their internal representation [1,2]." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Developing a hypermedia/multimedia experience focused on the functional aspects of a complex system (versus structure based) provided learners with a stronger understanding of the system.  Learners came away with a better knowledge of the systems purpose.  A functional approach exposed and encouraged users to explore various levels of the system to complete their mental model of the system.  The structure based experience resulted in limited knowledge and did not result in a more holistic understanding of the system [3]." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Hegarty, along with Keehner et. al. also explore the value in visual manipulation interactives for completing task specific goals [4].  They found that interactive elements do not add additional value in spatial reasoning tasks when a non-interactive representation provides the task specific data.  Although they point out that a spatial interactive could be used to solve more than one task, they highlight that the interactive could have an impact on the cognitive load of the user and these complicated interactive external visualizations may come at a cost.  For the scope of this project, these findings are extremely relevant.  Any spatial interactivity should most likely be avoided unless there is a strong reasoning to do so.  More detailed implications mean that if there is a 3D environment, most of the camera/navigation work should be automated and non-interactive." />
                            </ListItem>
                        </List>

                    </CardContent>
                </Card>
            </div>
{/* “•Function (F) variables: describe the teleology of the object, i.e. what it is for.
•Behaviour (B) variables: describe the attributes that are derived or expected to be derived from the structure (S) variables of the object, i.e. what it does.
•Structure (S) variables: describe the components of the object and their relationships,“ [25] */}
{/* •	
•	
•	
• */}

            <h2>Other UI Inspirations:</h2>

            <h3>Powers of Ten</h3>
            <p>One of the driving inspirations for this project was the education classic video “Powers of Ten”.  </p>

            <p>The 1968 short film “Powers of Ten” by Charles Eames demonstrated the physical scale of objects, starting with humans in a park and zooming-out to the size of the known universe, and zooming-in to the scale of a proton, and visiting incremental steps along the way.  Eames’ film was proven to be an effective tool for students to gain understanding and intuition around scale and relative sizes [5]. </p>

            <div className={classes.noteContainer}>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0fKBhvDjuy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <p>My aim was to apply the same method to visualizing complex networking and IoT systems, allowing users to gain an intuition for a system that might typically be considered more abstract.</p>
            {/* <EMBED POWERS OF TEN VIDEO https://www.youtube.com/watch?v=0fKBhvDjuy0 >  */}


            <h3>Contextual UIs (Video Games)</h3>

            <p>Diegetic UI, where the UI is embedded within the digital scene as opposed to an overlay, has been part of game design for many years (and has become mainstream with the prominence of AR & VR).  With complex systems such as IoT networks there is an abundance of data, so much so that the number of graphs and traditional visualizations can be overwhelming.  The novel approach here is to use the same fundamentals of diegetic UI and apply those techniques to diegetic data visualization.  </p>

            <ImageContainer
                image={DeadspaceUI}
                caption="An example of diegetic UI in Deadspace video game.  Notice the map is part of the environment and the health status is represented as light bars on the character model"
            />
            {/* <example of deadspace diegetic UI> */}

            {/* < example of my diegetic data visuals> */}

            <h2>Prototyping Process</h2>

            {/* <paper prototypes / sketches> */}

            <p>There were a number of challenges with implementing this application due to its complexity and scope.  Initial prototypes were made in Unity3D, due to its gaming orientation, many of the 3D support and operations was already built in.  This prototype was incredibly successful at demonstrating the idea and getting initial feedback.</p>
            <ImageContainer
                image={Screenshot01}
                imagetwo={Screenshot02}
                caption="Campus and building system levels"
            />
            <p>The next iteration of the concept was around validating technical challenges in creating a more robust platform.  This technical validation was two fold, with A) transitioning the 3D aspects of the program from Unity3D to WebGL, and B) demonstrating what a “full stack” IoT solution would look like.</p>
            <p>From an interface and visual perspective, many of the same designs from the initial Unity3D project were carried over.  Still, this was a long process, even with the use of the BabylonJS framework.</p>
            <ImageContainer
                image={Screenshot03}
                imagetwo={Screenshot04}
                caption="Building floor and HVAC zone sub-system levels"
            />
            <p>Beyond the visual framework, creating a “full stack” IoT demonstration was a key requirement of the second clickable prototype.  This involved connecting the web app frontend to a backend server that not only served data to the front end but interfaced also was responsible for maintaining the system state (logging data from sensors and calculating states of programmed actuators) and connecting and communicating with networked hardware.  This was prototype backend service went through a number of iterations, particularly determining the most robust communication pipeline (between the frontend application, backend server, and device sensors/actuators) before settling a successful combination of Socket.io and ZeroMQ solution.</p>
            <ImageContainer
                image={Screenshot05}
                imagetwo={Screenshot06}
                caption="Air handling unit component and coolant valve sub-component levels"
            />
            <h2>Results:</h2>
            <p>The goal of this project was to generate new IP for HPE future projects.  Once the full stack concept was proven with the second iteration of a clickable prototype, the project documentation was finalized and set up for a patent application.  </p>

            <p>The patent application was approved and I was awarded authorship of patent #abc</p>
            {/* Link to Patent #abc PDF: */}

            <h2>Resources:</h2>
            <p>
                1) Hmelo-Silver, C.E., Marathe, S., and Liu, L. Fish Swim, Rocks Sit, and Lungs Breathe: Expert-Novice Understanding of Complex Systems. Journal of the Learning Sciences 16, 3 (2007), 307–331.
            </p>
            <p>
            2) Hmelo-Silver, C.E. and Pfeffer, M.G. Comparing expert and novice understanding of a complex system from the perspective of structures, behaviors, and functions. Cognitive Science 28, 1 (2004), 127–138
            </p>
            <p>
                3) Liu, L. and Hmelo-silver, C.E. Promoting Complex Systems Learning through the Use of Conceptual Representations in Hypermedia. 46, 9 (2009), 1023–1040.
            </p>
            <p>
                4) Keehner, M., Hegarty, M., Cohen, C., Khooshabeh, P., and Montello, D.R. Spatial Reasoning With External Visualizations: What Matters Is What You See, Not Whether You Interact. Cognitive Science 32, (2008), 1099–1132.
            </p>
            <p>
                5) Jones, M.G., Taylor, A., Minogue, J., Broadwell, B., Wiebe, E., and Carter, G. Understanding scale: Powers of ten. Journal of Science Education and Technology 16, 2 (2007), 191–202.
            </p>


        </ProjectTemplate>
    )
}

export default withStyles(useStyles)(ProjectHPE)