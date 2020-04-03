import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from "../common/Footer/Footer"
import Container from '@material-ui/core/Container';
import Navbar from "../common/Navbar/Navbar"


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