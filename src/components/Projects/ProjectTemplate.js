import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


export default function ProjectTemplate(props){
    return(
        <Container>
            <h1>{props.title}</h1>
            <h3>Author: {props.author}</h3>
            <small>Published: {props.date}</small>
            {props.children}
        </Container>
    )
}