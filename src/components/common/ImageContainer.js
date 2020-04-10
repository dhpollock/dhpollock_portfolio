import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid'


const useStyles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    maxHeight: 400,
    maxWidth:'50%',
    margin: '10px',
  },
  caption: {
    textAlign: 'center',
  },
  captionContainer: {
    maxWidth: '40%',
    textAlign: 'center',
  }
});

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderOptionalImagesTwo = this.renderOptionalImagesTwo.bind(this);
    this.renderOptionalImagesThree = this.renderOptionalImagesThree.bind(this);

  }

  renderOptionalImagesTwo(classes) {
    if (this.props.imagetwo !== undefined) {
      return (
        <img src={this.props.imagetwo} className={classes.image} alt=""/>
      )
    }
  }
  renderOptionalImagesThree(classes) {
    if (this.props.imagethree !== undefined) {
      return (
        <img src={this.props.imagethree} className={classes.image} alt=""/>
      )
    }
  }
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Grid container>
          <Grid item xs={12} className={classes.container}>
            <img src={this.props.image} className={classes.image} alt=""/>
            {this.renderOptionalImagesTwo(classes)}
            {this.renderOptionalImagesThree(classes)}
          </Grid>
          <Grid item xs={12} className={classes.container}>
            <div className={classes.captionContainer}>
              <small className={classes.caption}>{this.props.caption}</small>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(ImageContainer);