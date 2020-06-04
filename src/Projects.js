import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    gridContainer: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    gridItem: {
        border: "red 2px solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        margin: "5px",
    },
}));

const items = [
    {
        name: "Funky Chicken Destroyer",
        description: "A multiplayer arcade game built with Socket.io and Phaser 3.",
        liveLink: "https://funky-chicken-destroyer.herokuapp.com/",
        gitLink: "https://github.com/ericHgorski/Funky-Chicken-Destroyer-Multiplayer-Arcade-Game",
        picSrc: "./assets/funky-chicken-preview.png",
    },
    {
        name: "Dream Image Board",
        description: "A full-feature image board build with Vue.js and AWS.",
        liveLink: "https://dream-img-board.herokuapp.com/",
        gitLink: "https://github.com/ericHgorski/Dream-Image-Board",
        picSrc: "./assets/dream-image-board-preview.png",
    },
    {
        name: "Twitter News Ticker",
        description: "A simple news ticker that pulls the latest headlines from the Onion and the New York Times Twitter feed.",
        liveLink: "https://twitter-headline-ticker.herokuapp.com/",
        gitLink: "https://github.com/ericHgorski/Twitter-Headline-Ticker",
        picSrc: "./assets/twitter-ticker-preview.png",
    },
];

const Projects = () => {
    const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            {items.map((i) => (
                <div className={classes.gridItem} key={i.name}>
                    <Typography variant="h5"> {i.name}</Typography>
                    <img style={{ border: "black solid 1px" }} width="300" height="200" src={require(`${i.picSrc}`)} alt={i.name} />
                    <div>Description: {i.description}</div>
                    <a href={i.liveLink}>Live</a>
                    <a href={i.gitLink}>Code</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
