import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IntroSection from "../IntroSection/IntroSection";
import WorkSection from "../WorkSection/WorkSection";
import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";
import ProjectEmberlast from "../Projects/ProjectEmberlast";
import ProjectHPE from "../Projects/ProjectHPE";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul> */}

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}

function Home() {
  return (
        <div className="App">
          <Container>
            <IntroSection/>
            <WorkSection />
            <AboutSection/>
            <ContactSection/>
          </Container>
        </div>
      );
}

function Projects() {
  let match = useRouteMatch();

  return (
      <Switch>
        <Route path={`${match.path}/:projectId`}>
          <Project />
        </Route>
        <Route path={`${match.path}`}>
          <Redirect to="/" />
        </Route>
      </Switch>
  );
}

function Project() {
  let { projectId } = useParams();
  switch(projectId){
    case 'hpe':
      return <ProjectHPE/>
    case 'emberlast':
      return <ProjectEmberlast/>
    default:
      return <Redirect to="/" />
  }
}
