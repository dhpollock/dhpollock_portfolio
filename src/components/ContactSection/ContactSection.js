import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = theme => ({
    section: {
        display: "flex",
        justifyContent: "center",
        minHeight: '95vh',
        maxHeight: 'fit-content'
    },
    noLinkDecor:{
         color: 'inherit',
         textDecoration: 'inherit',
         display:'flex'
    }
});


class ContactSection extends React.Component {
    render() {
        const classes = this.props.classes
        return (
            <Grid container spacing={3} justify='center' className={classes.section} alignItems="center" id="contact">
                <Grid item>

                    <Grid item xs={12} sm={12}>
                        <h1>Connect</h1>

                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <a href="mailto:harmon@dhpollock.com" className={classes.noLinkDecor}>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="harmon@dhpollock.com" />
                                    </a>
                            </ListItem>
                            <ListItem button>
                                <a href="https://github.com/dhpollock" className={classes.noLinkDecor}>
                                    <ListItemIcon>
                                        <GitHubIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="github.com/dhpollock" />
                                </a>
                            </ListItem>
                            <ListItem button >
                                <a href="https://linkedin.com/in/dhpollock" className={classes.noLinkDecor}>
                                    <ListItemIcon>
                                        <LinkedInIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="linkedin.com/in/dhpollock" />
                                </a>
                            </ListItem>
                        </List>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(ContactSection);