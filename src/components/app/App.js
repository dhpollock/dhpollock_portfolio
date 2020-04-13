import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IntroSection from "../IntroSection/IntroSection";
import WorkSection from "../WorkSection/WorkSection";
import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";
import ProjectEmberlast from "../Projects/ProjectEmberlast";
import ProjectIoT from "../Projects/ProjectIoT";
import Navbar from "../common/Navbar/Navbar"
import Footer from "../common/Footer/Footer"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ScrollToTop from '../common/ScrollToTop'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
  HashRouter
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#449DD1',
    },
    secondary: {
      main: '#F26430',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function App() {
  return (
    <HashRouter  basename={"/"}>
      <Switch>
        <Route path={"/projects"}>
          <Projects />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
      {/* </div> */}
    </HashRouter>
  );
}

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>

        <div className="App">
          <Navbar />
          <Container>
            <IntroSection />
            <WorkSection />
            <AboutSection />
            <ContactSection />
          </Container>
          <Footer copyrightYear="2020" copyrightFirm="D.H. Pollock" />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Projects() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:projectId`}>
      <ScrollToTop />
        <Project />
      </Route>
      <Route path={`${match.path}`}>
        <Redirect to={"/"} />
      </Route>
    </Switch>
  );
}

function Project() {
  let { projectId } = useParams();
  switch (projectId) {
    case 'iot':
      return (
        <ThemeProvider theme={theme}>
          <Paper>
            <div className="App">
              <Navbar />
              <ProjectIoT />
              <Footer copyrightYear="2020" copyrightFirm="D.H. Pollock" />
            </div>
          </Paper>

        </ThemeProvider>
      )
    case 'emberlast':
      return (
        <ThemeProvider theme={theme}>
          <Paper>
            <div className="App">
              <Navbar />
              <ProjectEmberlast />
              <Footer copyrightYear="2020" copyrightFirm="D.H. Pollock" />
            </div>
          </Paper>
        </ThemeProvider>
      )
    default:
      return <Redirect to={"/"}  />
  }
}
