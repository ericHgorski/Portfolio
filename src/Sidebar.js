import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
    },
    itemText: {
        color: "white",
        textAlign: "center",
        height: "5vh",
        width: "100%",
    },
    container: {
        height: "90vh",
        minWidth: "130px",
        background: "linear-gradient(to left, #2F0743, #41295a)",
    },
}));

const items = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
];

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {items.map((i) => (
                <MenuList className={classes.item}>
                    <Link to={i.path} key={i.name} className={classes.link}>
                        <MenuItem className={classes.itemText}>
                            <Typography>{i.name}</Typography>
                        </MenuItem>
                    </Link>
                </MenuList>
            ))}
        </div>
    );
};

export default Sidebar;
