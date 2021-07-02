import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as MyLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none'
    },
}))


export default function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar color="primary" position="static" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px', textTransform: 'uppercase' }} className={classes.link} >Fiverr Lite</Link>
                    </Typography>
                    <nav>
                        <MyLink variant="button" color="inherit" href="#" className={classes.link}>
                            Features
                        </MyLink>
                        <MyLink variant="button" color="inherit" href="#" className={classes.link}>
                            Enterprise
                        </MyLink>
                        <MyLink variant="button" color="inherit" href="#" className={classes.link}>
                            Support
                        </MyLink>
                    </nav>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button style={{ backgroundColor: '#ffff00' }} variant="outlined" className={classes.link}>
                            Register
                        </Button>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button style={{ backgroundColor: '#ffff00' }} variant="outlined" className={classes.link}>
                            Login
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}
