import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        background: "linear-gradient(to left, #ffffff, #abbaab)",
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h2">About</Typography>
        </div>
    );
};

export default About;
