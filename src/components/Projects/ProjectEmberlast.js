import React from 'react';
import ProjectTemplate from "./ProjectTemplate";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import EmberlastThumb from '../../images/emberlast/sticky.png'
import EmberlastPersona from '../../images/emberlast/persona.png'
import EmberlastUsers from '../../images/emberlast/users.png'
import EmberlastMobile01 from '../../images/emberlast/mobile01.jpg'
import EmberlastMobile02 from '../../images/emberlast/mobile02.jpg'
import EmberlastDesktop01 from '../../images/emberlast/desktop01.jpg'
import EmberlastDesktop02 from '../../images/emberlast/desktop02.jpg'
import EmberlastDesktop03 from '../../images/emberlast/desktop03.jpg'
import EmberlastFinal01 from '../../images/emberlast/final01.jpg'
import EmberlastFinal02 from '../../images/emberlast/final02.jpg'
import EmberlastFinal03 from '../../images/emberlast/final03.jpg'
import EmberlastBanner from '../../images/emberlast/banner.jpg'
import EmberlastBanner2 from '../../images/emberlast/banner2.jpg'
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
            title="EmberLast Inc."
            author="Harmon Pollock"
            date="March 2020"
            bannerImage={EmberlastBanner2}
        >

            {/* <Grid container justify="left" alignItems="left" alignContent="left" className={classes.section}>
                <Grid item xs={12}> */}

            <h2>Introduction:</h2>

            <p>EmberLast was a company I co-founded with a mission to provide online memorials as a platform for connecting communities and sharing meaningful memories.  EmberLast focused on delivering a user-first experience. This review of the design processes highlights what worked well and what lessons were learned.</p>


            <h2>Market Research (Identifying Key Customers):</h2>

            <p>One of the key tenets to establishing a new product is to identify the key customer segments for your product. Everyone experiences the loss of a loved one.  Research was needed to identify those utilizing online memorials and might be willing to be early adopters of a new platform.  Thus began a three-month market research campaign.  It included ~ 100 clinical interviews (typically an hour long phone discussion) and in-depth online surveys with ~1200 participants.</p>
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
                            This is a difficult topic for many people to talk about, and especially with random strangers (myself) over the internet or phone.  As the interviewer, it was critical to bring <strong className={classes.emphasis}>RESPECT</strong> and <strong className={classes.emphasis}>OPEN MINDEDNESS</strong> to the table, and to be prepared for tears and heavy emotions because of the subject matter. There were a few strategies that helped the process. 
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
                                <ListItemText primary="Don’t be afraid of silence: Some of the best insights came after allowing the interviewee some time and space to reflect." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Keep talking after the interview is ‘over’: There were a few occasions when after the formal interview had concluded, and I was answering some of the interviewee’s questions the conversation would re-ignite or the interviewee would have more to say.  These valuable moments led to a deeper understanding of the grieving process." />
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
            <p><strong className={classes.emphasis}>#1)</strong> Keep talking after the interview is ‘over’: There were a few occasions when after the formal interview had concluded, and I was answering some of the interviewee’s questions the conversation would re-ignite or the interviewee would have more to say.  These valuable moments led to a deeper understanding of the grieving process.</p>

            <p><strong className={classes.emphasis}>#2)</strong> Traditional demographics provided no insight: There seemed to be no connection to online memorial usage and gender/age/religion/geographic location.</p>

            <p><strong className={classes.emphasis}>#3)</strong> Family size / community reach: Departed loved ones with large families and extended networks were much more likely to have an online memorial in their honor.</p>

            <ImageContainer
                image={EmberlastUsers}
                caption="A visual diagram of the variety potential users relationships and vectors to reach the family (EoL Influencers)"
            />

            <p><strong className={classes.emphasis}>#4)</strong> A cultural trend of distributed communities: Online memorial usage was more common with families that were widely distributed geographically, within the US and abroad.</p>

            <p><strong className={classes.emphasis}>#5)</strong> Positive feedback only: When asked about what users disliked about current memorial products, people were very hesitant to give negative feedback. We attributed this to the close association with their loved ones being represented by that product, and speaking ill of the product would in turn feel like speaking ill of the departed.</p>

            <p><strong className={classes.emphasis}>#6)</strong> Websites are temporary</p>

            <h2>Product Research:</h2>

            <ImageContainer
                image={EmberlastPersona}
                caption="A persona card for one of our identified customer segments"
            />

            <h3>Defining the User Experience & Interactions:</h3>

            <p>User testing began with a clear idea of the market, the key customers identified and a sense of the current market offerings.  This involved more than 100 participants taking part in 30-60 minute interviews and online user test exercises.</p>

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
                            One of the first prototypes I built was focused on celebrating a loved one’s hobbies and passions.  As a typical design process would advocate, prototype early and often to validate ideas.  Unfortunately, this prototype was a complete flop.  It became clear that users were not interested in an unpolished experience.  Dealing with death and grief are difficult, and users were not willing to engage with those emotions unless there was a clear distinct value and respect for their loved ones.  Although it was a disappointing failure, it encouraged us to move forward with this lesson.
                        </Typography>
                    </CardContent>
                </Card>
            </div>



            <h3>Mockups & Storyboards:</h3>

            <p>Learning that building rough, interactive prototypes was off the table, I refocused efforts toward validating design ideas and features through more polished mockups and storyboards.</p>
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
            <p>During the market research campaign people had difficulty trusting that websites would be around for an extended period of time.  Many participants desired memorials to be something less temporal.  My proposed solution was to take our online memorial and redesign the content into a physically printed book.  This idea was almost universally embraced and became one of the primary original, differentiating features for our product.</p>

        </ProjectTemplate>
    )
}

export default withStyles(useStyles)(ProjectEmberlast)