import React from "react";
import Sidebar from "./Sidebar.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import About from "./About.js";
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    gridContainer: {
        display: "grid",
        height: "90vh",
        border: "red 2px solid",
        gridTemplate: " repeat(12, 1fr) /  repeat(12, 1fr)",
    },
    sidebar: {
        gridRow: "1 / -1",
        gridColumn: "1 ",
    },
    header: {
        gridColumn: "2 / -1",
        gridRow: "1 / 3",
        border: "red solid 2px",
    },
    content: {
        gridColumn: "2 / -1",
        gridRow: "3 / 12",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        border: "solid green 1px",
    },
    footer: {
        gridColumn: "2 / -1",
        gridRow: "12/ -1",
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.gridContainer}>
            <BrowserRouter>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
                <div className={classes.header}>
                    <Header />
                </div>
                <div className={classes.content}>
                    <Route exact path="/" render={() => <About />} />
                    <Route exact path="/projects" render={() => <Projects />} />
                    <Route exact path="/resume" render={() => <Resume />} />
                </div>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
