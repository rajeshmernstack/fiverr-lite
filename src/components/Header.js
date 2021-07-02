import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
    },
}))


export default function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar color="primary" position="static" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Fiverr Lite
                    </Typography>
                    <nav>
                        <Link variant="button" color="inherit" href="#" className={classes.link}>
                            Features
                        </Link>
                        <Link variant="button" color="inherit" href="#" className={classes.link}>
                            Enterprise
                        </Link>
                        <Link variant="button" color="inherit" href="#" className={classes.link}>
                            Support
                        </Link>
                    </nav>
                    <Button href="#" style={{backgroundColor: '#ffff00'}} variant="outlined" className={classes.link}>
                        Register
                    </Button>
                    <Button href="#" style={{backgroundColor: '#ffff00'}} variant="outlined" className={classes.link}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}
