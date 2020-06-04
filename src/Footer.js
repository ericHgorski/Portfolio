import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        border: "3px solid red",
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h2">MY Footer</Typography>
        </div>
    );
};

export default Footer;
