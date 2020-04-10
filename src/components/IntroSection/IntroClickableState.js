import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    selectable: {
        textDecorationLine: 'underline',
        textDecorationColor: theme.palette.secondary.main,
        textDecorationStyle: 'double'

    },
    active: {
        backgroundColor: theme.palette.secondary.light,
        textDecorationStyle: 'solid'

    }
});

export class IntroClickableState extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // console.log(props);
    }

    handleClick() {
        const newHighlight = this.props.value;
        this.props.onClick(newHighlight);

    }
    render() {
        const classes = this.props.classes;

        return (
            <span className={`${classes.selectable} ${this.props.currentSelect === this.props.value ? classes.active : 'off'} `} onClick={this.handleClick}>{this.props.children}</span>
        )
    }
}

export default withStyles(useStyles)(IntroClickableState);