import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Footer(props){
        return (
            <Grid container>
                <Grid item xs={12}>
                    <small>&copy; Copyright {props.copyrightYear}, {props.copyrightFirm}</small>
                </Grid>
            </Grid>
            
        )
}