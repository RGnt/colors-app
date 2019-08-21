import React from 'react';
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
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"
    }
}
const MiniPalette = ({ classes, palette, handleClick }) => {
    const miniColorBoxes = palette.palette.map(color => <div key={`${palette.palette}${color.name}`} className={classes.miniColor} style={{ backgroundColor: color.color }} />) //TODO: Think of changing the key later!

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <div className={classes.title}>
                <h5 className={classes.title}>{palette.palName}<span className={classes.emoji}>{palette.emoji}</span></h5>
            </div>
        </div>
    );
};
export default withStyles(styles)(MiniPalette);