import React from 'react';
import MiniPalette from '../MiniPalette/MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: "#b0dbd8",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    },
    footer: {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "4vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        color: "black",
        "& a": {
            textDecoration: "none",
            "&:visited": {
                color: "black"
            }
        }
    }
}
const PaletteList = (props) => {
    const { palettes, classes } = props;

    const goToPalette = (id) => {
        props.history.push(`/palette/${id}`)
    }

    const paletteLinks = palettes.map(palette => <MiniPalette key={palette.palId} palette={palette} handleClick={() => goToPalette(palette.palId)} />)


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>
                    {paletteLinks}
                </div>
            </div>
            <footer className={classes.footer}>
                <a href="https://github.com/RGnt/colors-app"><i className="fa fa-github"></i></a>
            </footer>
        </div>
    );
};
export default withStyles(styles)(PaletteList);