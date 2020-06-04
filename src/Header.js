import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h3">Eric Gorski</Typography>
            <Typography variant="h6">I am a full-stack developer in Berlin. Check out my work and give me a buzz.</Typography>
        </div>
    );
};

export default Header;
