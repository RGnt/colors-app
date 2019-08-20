import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
    },
    colors: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
}
const MiniPalette = ({ classes, palette }) => {
    console.log(palette);
    return (
        <Link to={`/palette/${palette.palId}`}>
            <div className={classes.root}>
                <div className={classes.colors}>
                    <h5 className={classes.title}>{palette.palName}<span className={classes.emoji}>{palette.emoji}</span></h5>
                </div>
            </div>
        </Link>
    );
};
export default withStyles(styles)(MiniPalette);