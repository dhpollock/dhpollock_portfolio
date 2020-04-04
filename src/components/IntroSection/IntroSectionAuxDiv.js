import React from "react"
import HarmonProfilePic from '../../images/harmon_pollock.jpg'
import { fade } from '@material-ui/core/styles/colorManipulator';
import withStyles from "@material-ui/core/styles/withStyles";
import grey from '@material-ui/core/colors/';

const useStyles = theme => ({
    profilePic:{
        display: 'block',
        width: '100%',
    },
    profilePicOverlay:{
        position: 'absolute',
        bottom: '0',
        background: '#000000',
        width: '100%',
        transition: '.5s ease',
        opacity:'.75',
        // fontSize: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
    },
    auxContainer:{
        position: 'relative',
        width:'100%',
        maxWidth:'400px',
        maxHeight:'400px',
        height:'100%'
    },
    mapStylesRouter:{
        position:'relative',
        textAlign:'right',
        width:'100%',
        maxWidth:'400px',
        maxHeight:'400px',
        height:'100%'
    },
    mapStyleCanvas:{
        overflow:'hidden',
        background:'none!important',
        width:'100%',
        maxWidth:'400px',
        maxHeight:'400px',
        height:'100%'
    },
});

function IntroSectionAuxDiv(props){
    const classes=props.classes;
    switch(props.currentHighlight){
        case 'research':
            return (
                <div className={classes.auxContainer}>
                <h1>i like research</h1>
                </div>
            )
        case 'design':
            return (
                <div className={classes.auxContainer}>
                <h2>i like design</h2>
                </div>
            )
        case 'pup':
            return (
                <div className={classes.auxContainer}>
                    <p>an image of cookies goes here</p>
                </div>
            )
        case 'durango':
            return (
                <div className={classes.auxContainer}>
                    <div class="mapouter" className={classes.mapStylesRouter}>
                        <div class="gmap_canvas" className={classes.mapStyleCanvas}>
                            <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Durango&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <a href="https://www.embedgooglemap.net"></a>
                        </div>
                        {/* <style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style> */}
                    </div>
                </div>
            )
        default:
            return (
                <div className={classes.auxContainer}>
                    <img src={HarmonProfilePic} className={classes.profilePic}/>
                    <div className={classes.profilePicOverlay}>My first name is 'Drew', but I go by 'Harmon'!</div>
                </div>
            )
    }
}

export default withStyles(useStyles)(IntroSectionAuxDiv);