import React from "react"
import HarmonProfilePic from '../../images/harmon_pollock.jpg'
import CookieProfilePic from '../../images/cookie.jpg'
import BikeProfilePic from '../../images/dhpollock_bike.png'
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ToysIcon from '@material-ui/icons/Toys';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import TonalityIcon from '@material-ui/icons/Tonality';
import StoreIcon from '@material-ui/icons/Store';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PropTypes from 'prop-types';

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

const useTreeItemStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.text.secondary,
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent',
      },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {
    },
    selected: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
  }));
  
  function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  
    return (
      <TreeItem
        label={
          <div className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
            </Typography>
          </div>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        classes={{
          root: classes.root,
          content: classes.content,
          expanded: classes.expanded,
          selected: classes.selected,
          group: classes.group,
          label: classes.label,
        }}
        {...other}
      />
    );
  }
  
  StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
  };
  

function IntroSectionAuxDiv(props){
    const classes=props.classes;
    switch(props.currentHighlight){
        case 'ux':
            return (
                <div className={classes.auxContainer}>
                    <TreeView
                    className={classes.root}
                    defaultExpanded={['1']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                    >
                    <StyledTreeItem nodeId="1" labelText="UX Design" labelIcon={WallpaperIcon}>
                        <StyledTreeItem
                            nodeId="4"
                            labelText="Interaction Design"
                            labelIcon={ToysIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                            />
                            <StyledTreeItem
                            nodeId="5"
                            labelText="Data Visualization"
                            labelIcon={InsertChartIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                            />
                            <StyledTreeItem
                            nodeId="6"
                            labelText="Product Design & Validation"
                            labelIcon={FilterCenterFocusIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                            />
                        </StyledTreeItem>
                    <StyledTreeItem nodeId="2" labelText="UX Engineering" labelIcon={CodeIcon}>
                    <StyledTreeItem
                            nodeId="7"
                            labelText="Javascript, Python, Dart"
                            labelIcon={LanguageIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                            />
                            <StyledTreeItem
                            nodeId="8"
                            labelText="Node.js / Meteor"
                            labelIcon={PermDataSettingIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                            />
                            <StyledTreeItem
                            nodeId="9"
                            labelText="React, Blaze, Bootstrap, Material UI"
                            labelIcon={PersonalVideoIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                            />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="3" labelText="Research" labelIcon={SearchIcon}>
                        <StyledTreeItem
                        nodeId="10"
                        labelText="Market Validation"
                        labelIcon={StoreIcon}
                        labelInfo="90"
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                        nodeId="11"
                        labelText="Clinical Interviews & Surveys"
                        labelIcon={PeopleAltIcon}
                        labelInfo="2,294"
                        color="#e3742f"
                        bgColor="#fcefe3"
                        />
                        <StyledTreeItem
                        nodeId="12"
                        labelText="A/B & User Testing"
                        labelIcon={TonalityIcon}
                        labelInfo="733"
                        color="#3c8039"
                        bgColor="#e6f4ea"
                        />
                    </StyledTreeItem>
                    </TreeView>
                </div>
            )
        case 'pup':
            return (
                <div className={classes.auxContainer}>
                    <img src={CookieProfilePic} className={classes.profilePic} alt=""/>
                    <div className={classes.profilePicOverlay}>Running!</div>
                </div>
            )
        case 'bike':
            return (
                <div className={classes.auxContainer}>
                    <img src={BikeProfilePic} className={classes.profilePic} alt=""/>
                    <div className={classes.profilePicOverlay}>Biking!</div>
                </div>
            )
        case 'durango':
            return (
                <div className={classes.auxContainer}>
                    <div class="mapouter" className={classes.mapStylesRouter}>
                        <div class="gmap_canvas" className={classes.mapStyleCanvas}>
                            <iframe title="map" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Durango&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className={classes.auxContainer}>
                    <img src={HarmonProfilePic} className={classes.profilePic} alt=""/>
                    <div className={classes.profilePicOverlay}>My first name is 'Drew', but I go by 'Harmon'!</div>
                </div>
            )
    }
}

export default withStyles(useStyles)(IntroSectionAuxDiv);