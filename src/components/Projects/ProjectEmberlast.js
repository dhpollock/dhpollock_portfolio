import React from 'react';
import ProjectTemplate from "./ProjectTemplate";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import EmberlastThumb from '../../images/emberlast_sticky.png'
import EmberlastPersona from '../../images/emberlast/persona.png'
import EmberlastUsers from '../../images/emberlast/users.jpg'
import EmberlastMobile01 from '../../images/emberlast/mobile01.png'
import EmberlastMobile02 from '../../images/emberlast/mobile02.png'
import EmberlastDesktop01 from '../../images/emberlast/desktop01.png'
import EmberlastDesktop02 from '../../images/emberlast/desktop02.png'
import EmberlastDesktop03 from '../../images/emberlast/desktop03.png'
import EmberlastFinal01 from '../../images/emberlast/final01.png'
import EmberlastFinal02 from '../../images/emberlast/final02.png'
import EmberlastFinal03 from '../../images/emberlast/final03.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ImageContainer from "../common/ImageContainer"

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

function ProjectEmberlast(props) {
    const classes = props.classes
    return (
        <ProjectTemplate
            title="Emberlast Inc."
            author="Harmon Pollock"
            date="March 2020"
            bannerImage={EmberlastThumb}
        >

            {/* <Grid container justify="left" alignItems="left" alignContent="left" className={classes.section}>
                <Grid item xs={12}> */}

            <h2>Introduction:</h2>

            <p>EmberLast was a company I co-founded with a mission to provide a modern (with respects to both technology and cultural) approach to death. Using online memorials as a platform for connecting communities and sharing meaningful content, EmberLast focused on delivering a user-first experience. The aim of this article is to review a bit of my design processes, what worked well and what lessons were learned.</p>


            <h2>Market Research (Identifying Key Customers):</h2>

            <p>One of the key tenants to establishing a new product it so identify the some key customer segments in most dire need of your product. While everyone at some point experiences a loss, I really wanted to know who was currently using online memorials and who might be more eager to be an early adopter. Thus began a three month market research campaign which included ~ 100 clinical interviews (typically an hour long phone call) and number of online surveys with ~1200 participants.</p>
            <br />

            <p>The three main campaign questions/learning goals:</p>
            <List>
                <ListItem button>
                    <ListItemText primary="A) How are people currently dealing with death, grief, and loss of loved ones?" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="B) Who is currently using online memorials?" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="C) What do they like and dislike about current online memorial products?" />
                </ListItem>
            </List>
            {/* <p>A) How are people currently dealing with death, grief, and loss of loved ones?</p>
            <p>B) Who is currently using online memorials?</p>
            <p>C) What do they like and dislike about current online memorial products?</p> */}

            {/* <visual note> */}
            <div className={classes.noteContainer}>
                <Card variant="outlined" className={classes.cardDark}>
                    <CardContent>
                        <Typography gutterBottom component='h3'>
                            A quick note on clinical interviewing about death and grief:
                    </Typography>
                        <Typography variant="body2" component="p">
                            This is a difficult topic for many people to talk about, and especially so with random strangers (myself) over the internet or phone. Obviously as the interview it was critical to bring hefty amount of <strong className={classes.emphasis}>RESPECT</strong> and <strong className={classes.emphasis}>OPEN MINDEDNESS</strong> to the table, and be prepared for tears, as it is the nature of the subject matter. On top of these key tenants, there were a few strategies that helped the process.
                        <br /><br />
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Icebreakers: Personal loss is a tough subject to ‘dive into’ and I found spending 5-10 minutes at the beginning of the interview talking about related subjects helped a lot. Starting with recent celebrity deaths was a great way to introduce the topic." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Don’t be afraid of silence: Some of the best insights came after allowing the interviewee some time and space to reflect. Although this comes at the cost of some uncomfortable silence it can be a valuable approach." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Keep talking after the interview is ‘over’: There were a few occasions when after the formal interview had concluded, and I was answering any of the interviewee’s curiosities that the conversation would re-ignite or interviewee would have more to say after given some additional context to the work. These valuable moments lead to a number of insightful nuggets." />
                            </ListItem>
                        </List>

                    </CardContent>
                </Card>
            </div>

            {/* <end visual note> */}

            <h3>Insights from Market Research:</h3>
                <ImageContainer
                    image={EmberlastThumb}
                    caption="Interview moments were decomposed onto virtial sticky notes in Miro, and then organized to reveal themes and insights"
                />
            <p><strong className={classes.emphasis}>#1)</strong> A cultural trend towards celebration: A large number of those we talked to said preferred to avoid “traditional” ceremonies around death (e.g. funeral homes burials, mourning services) in favor of celebrations of life ceremonies and activities.</p>

            <p><strong className={classes.emphasis}>#2)</strong> Traditional demographics provided no insight: There seemed to be no connection to online memorial usage and gender/age/religion/geographic location.</p>

            <p><strong className={classes.emphasis}>#3)</strong> Family size / community reach: Departed loved ones with large families and extended networks were much more likely to have an online memorial in their honor.</p>

            <ImageContainer
                image={EmberlastUsers}
                caption="A visual diagram of the variety potential users relationships and vectors to reach the family (EoL Influencers)"
            />

            <p><strong className={classes.emphasis}>#4)</strong> A cultural trend of distributed communities: Online memorial usage was more common with families that were geographically distributed, within the US and abroad.</p>

            <p><strong className={classes.emphasis}>#5)</strong> Positive feedback only: When asked about what users disliked about current memorial products, people were very hesitant to give negative feedback. We attributed this to the close association with their loved ones being represented by that product and speaking ill of the product would in turn feel like speaking ill of the departed.</p>

            <p><strong className={classes.emphasis}>#6)</strong> Websites are temporary</p>

            <h2>Product Research:</h2>

            <ImageContainer
                image={EmberlastPersona}
                caption="A persona card for one of our identified customer segments"
            />

            <h3>Defining the User Experience & Interactions:</h3>

            <p>With a clearer idea of the market, the key customers identified, and a sense of the current market offerings, the market research campaign came to an end and the user testing began.  This user testing campaign, similar to the market research work involved over 100 participants taking part of 30-60 min interviews and user test exercises.</p>

            <p>The three main campaign questions/learning goals:</p>
            <List>
                <ListItem button>
                    <ListItemText primary="A) What is the MVP feature set for an successful online memorial?" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="B) What are specific needs our the key customers?  (Access, control, communication, etc)" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="C) How can we differentiate EmberLast from the competition?" />
                </ListItem>
            </List>
            {/* <p>A) What is the MVP feature set for an successful online memorial?</p>
            <p>B) What are specific needs our the key customers?  (Access, control, communication, etc)</p>
            <p>C) How can we differentiate EmberLast from the competition?</p> */}
            <div className={classes.noteContainer}>
                <Card variant="outlined" className={classes.cardDark}>
                    <CardContent>
                        <Typography gutterBottom component='h3'>
                            A Tough Lesson in Prototyping Around Death:
                        </Typography>
                        <Typography variant="body2" component="p">
                            One of the first prototypes I built was focused on exploring interaction focused on celebrating a departed’s hobbies and passions.  As a typical design processes would advocate, prototype early and often to validate ideas.  Unfortunately this prototype was a complete flop.  Not a single users enjoyed the experience nor chose to engage with it beyond a cursory look over.  At first we were surprised but as the feedback rolled in it become clear that users were not interested in celebrating their loved ones with an unpolished experience.  Dealing with death and grief are difficult and users were not willing to engage with those emotions unless there was a clear distinct value and respect for their loved ones.  Although it was a disappointing failure, it certainly encouraged us to move forward with this lesson.
                        </Typography>
                    </CardContent>
                </Card>
            </div>



            <h3>Mockups & Storyboards:</h3>

            <p>Learning that building rough, interactive prototypes was off the table, I refocused our efforts to validating design ideas and features through more polished mockups and storyboards.  </p>
            <ImageContainer
                image={EmberlastMobile01}
                imagetwo={EmberlastMobile02}
                caption="Early mobile mockups, they were presented to users during interviews to gather initial product feedback"
            />
            <ImageContainer
                image={EmberlastDesktop01}
                imagetwo={EmberlastDesktop02}
                imagethree={EmberlastDesktop03}
                caption="Iterative mockups of desktop features"
            />
            {/* <IMAGES / EXAMPLES / PHOTOWALKTHROUGHT OF LESSONS> */}
            <h2>Results</h2>
            {/* < FINAL PRODUCT ish> */}

            <h3>MVP Features and Screen Mockups for Development</h3>
            <p>While user testing is never complete, we gathered enough information to set out MVP featurelist.  Using this list and our previous mockups we were able to work with a visual artist to generate final MVP screenshots to give as a reference for our development team.</p>

            <ImageContainer
                image={EmberlastFinal01}
                imagetwo={EmberlastFinal02}
                caption=""
            />
            <ImageContainer
                image={EmberlastFinal03}
                caption="Some of our final screenshots, produced by our contract artist"
            />
            <h3>A Book:</h3>
            <p>One of the biggest insights during this phase was how to differentiate ourselves form the competition.  During the market research campaign people had difficulty trusting that websites would be around for an extended period of time, and many people desired memorials to be something less temporal.  My proposed solution for this was to take our online memorial and repurpose the user-submitted content into a physically printed book that would to sold to users.  This idea was almost universally embraced
in our user testing sessions and become the primary differentiation for us and the competition.</p>


            {/* <hand off to development> */}
            {/* </Grid>
            </Grid> */}
        </ProjectTemplate>
    )
}

export default withStyles(useStyles)(ProjectEmberlast)