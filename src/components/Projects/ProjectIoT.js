import React from 'react';
import ProjectTemplate from "./ProjectTemplate";
import ImageContainer from "../common/ImageContainer"
import HPEThumb from '../../images/hpe_demolvl05.png';
import ResearchImage from '../../images/iot/research.png'
import Screenshot01 from '../../images/iot/hpe_demolvl01.png'
import Screenshot02 from '../../images/iot/hpe_demolvl02.png'
import Screenshot03 from '../../images/iot/hpe_demolvl03.png'
import Screenshot04 from '../../images/iot/hpe_demolvl04.png'
import Screenshot05 from '../../images/iot/hpe_demolvl05.png'
import Screenshot06 from '../../images/iot/hpe_demolvl06.png'
import DeadspaceUI from '../../images/iot/deadspaceUI.png'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import withStyles from "@material-ui/core/styles/withStyles";
import PatentPDF from "../../media/US10140749.pdf"

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
    patentLink:{
        color:theme.palette.secondary.main
    }
});

function ProjectIoT(props) {
    const classes = props.classes
    return (
        <ProjectTemplate
            title="IoT Visualization"
            author="Harmon Pollock"
            date="March 2020"
            bannerImage={HPEThumb}
        >

            <h2>Introduction:</h2>
            <p>I was part of the Mechanisms and Design Lab team at Hewlett Packard that was charged with developing novel IP to be integrated into or to improve HP’s offerings. My research directive was to explore potential data visualization for complex systems, such as large wireless networks and IoT systems.</p>

            <h2>Research Based Design:</h2>
            <p>A flow chart breaking down some of the research addressed in the initial phase of the project.  </p>
            <ImageContainer
                image={ResearchImage}
                caption="A breakdown of exisiting research and relevancy to the project"
            />

            <p>While the specifics of this work would be too tedious to review here, there were several key takeaways:</p>
            <div className={classes.noteContainer}>
                <Card variant="outlined" className={classes.cardDark}>
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="SBF framework is adequate for supporting in-depth learning of a complex system. First, it is able to model the structure of the system, which is often the primary method of understanding for a novice, but it also supports a deeper, interconnected model of the functions and behavior of a system that experts prefer to use for their internal representation  [1,2]." />
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

            <h2>Other UI Inspirations:</h2>

            <h3>Powers of Ten</h3>
            <p>One of the driving inspirations for this project was the education classic video “Powers of Ten”. </p>

            <p>The 1968 short film “Powers of Ten” by Charles Eames demonstrated the physical scale of objects, starting with humans in a park and zooming-out to the size of the known universe, and zooming-in to the scale of a proton, while visiting incremental steps along the way.  Eames’ film proved to be an effective tool for students to gain understanding and intuition concerning scale and relative sizes [5]. </p>

            <div className={classes.noteContainer}>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0fKBhvDjuy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Powers of Ten"></iframe>
            </div>

            <p>My aim was to apply the same method to visualizing complex networking and IoT systems, allowing users to gain an intuition for a system that might typically be considered more abstract.</p>

            <h3>Contextual UIs (Video Games)</h3>

            <p>Diegetic UI, where the UI is embedded within the digital scene as opposed to an overlay, has been part of game design for many years (and has become mainstream with the prominence of AR & VR).  With complex systems such as IoT networks there is an abundance of data, so much so that the number of graphs and traditional visualizations can be overwhelming.  The novel approach here is to use the same fundamentals of diegetic UI and apply those techniques to diegetic data visualization. </p>

            <ImageContainer
                image={DeadspaceUI}
                caption="An example of diegetic UI in Deadspace video game.  Notice the map is part of the environment and the health status is represented as light bars on the character model"
            />

            <h2>Prototyping Process</h2>

            <p>There were numerous challenges implementing this application due to its complexity and scope.  Initial prototypes were made in Unity3D because of its gaming orientation, leveraging 3D support and operations were already built into the software.  This prototype was incredibly successful at demonstrating the idea and soliciting initial feedback.</p>
            <ImageContainer
                image={Screenshot01}
                imagetwo={Screenshot02}
                caption="Campus and building system levels"
            />
            <p>The next iteration of the concept involved validating technical challenges in creating a more robust platform.  This technical validation was two-fold, with A) transitioning the 3D aspects of the program from Unity3D to WebGL, and B) demonstrating what a “full stack” IoT solution would look like.</p>
            <p>From an interface and visual perspective, many of the same designs from the initial Unity3D project were carried over.  Still, this was a long process, even with the use of the BabylonJS framework.</p>
            <ImageContainer
                image={Screenshot03}
                imagetwo={Screenshot04}
                caption="Building floor and HVAC zone sub-system levels"
            />
            <p>In order to complete the ‘full stack’ requirement, the web app also needed to be accompanied with a backend server that was responsible for communicating with an IoT network.  This backend application was responsible for maintaining the system state (parsing data from sensors and enforcing states of actuators).  The backend service went through a number of iterations, resulting in a robust communication pipeline (between the frontend application, backend server, and device sensors/actuators) based on a combination of Socket.io and ZeroMQ  protocols.</p>
            <ImageContainer
                image={Screenshot05}
                imagetwo={Screenshot06}
                caption="Air handling unit component and coolant valve sub-component levels"
            />
            <h2>Results:</h2>
            <p>The goal of this project was to generate new IP for HPE future projects.  Once the full stack concept was proven with the second iteration of a clickable prototype, the project documentation was finalized and set up for a patent application.</p>

            <p>The patent application was approved and I was awarded authorship of patent <a className={classes.patentLink} href={PatentPDF} target="_blank" rel="noopener noreferrer">#10140749</a></p>

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

export default withStyles(useStyles)(ProjectIoT)