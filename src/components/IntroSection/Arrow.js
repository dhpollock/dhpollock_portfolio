import React from 'react';
import { withStyles } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const useStyles = theme =>({
    scrollArrow:{
        // width: '0',
        // left: '50%',
        // bottom: '5px',
        // position: 'absolute',
        // marginLeft: '-40px',
        // borderTop: '20px solid white',
        // borderLeft: '40px solid transparent',
        // borderRight: '40px solid transparent',
        position: 'absolute',
        left: '50%',
        width: '36px',
        height: '36px',
        bottom: '5px',
        marginLeft: '-12px',
        borderLeft: '5px solid #fff',
        borderBottom: '5px solid #fff',
        transform: 'rotate(-45deg)skew(15deg, 15deg)',
        boxSizing: 'border-box',
        animation:`$indicate 6s ${theme.transitions.easing.easeInOut} infinite`,
    },
    '@keyframes indicate': {
        '0%': { bottom: '10%', opacity: '.1'},
        '50%': { bottom: '10%', opacity: '.7'},
        '100%': { bottom: '10%', opacity: '.1' }
  }
})

function Arrow(props){
    const classes = props.classes
    return(
        <Hidden only={['xs']}>
            <div className={classes.scrollArrow}></div>
        </Hidden>
    )
}

export default withStyles(useStyles)(Arrow);