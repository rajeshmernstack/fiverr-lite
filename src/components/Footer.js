import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LinkList from './LinkList';
import { SocialIcon } from 'react-social-icons';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

export default function Footer() {
    const classes = useStyles();
    const linksArray = [
        {link: '/', icon: 'HomeIcon', text: "Home"},
        {link: '/dashboard', icon: 'SpeedIcon', text: "Dashboard"},
        {link: '/login', icon: 'LockOpenIcon', text: 'Login'},
        {link: '/register', icon: 'AssignmentIcon', text: 'Register'}
    ]

    return (
        <>
            <React.Fragment>
                <CssBaseline />

                <Divider />
                <Container maxWidth="lg">
                    <div className={classes.root}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Paper className={classes.paper} elevation={0}>
                                    <Card style={{ maxWidth: 150, boxShadow: "none" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                style={{ height: 150 }}
                                                image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png"
                                                title="Fiverr Logo"
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper} elevation={0}><LinkList linksArray={linksArray} /></Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper} elevation={0}>xs=3</Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper} elevation={0}>
                                    <SocialIcon url="https://www.facebook.com/#" />
                                    <SocialIcon url="https://www.linkedin.com/#" />
                                    <SocialIcon url="https://www.twitter.com/#" />
                                    <SocialIcon url="https://www.instagram.com/#" />
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </React.Fragment>
        </>
    );
}