import dmsvg from '../resources/svgs/digital-marketing.svg'; import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 200
    },
    media: {
        margin: 'auto',
        height: 80,
        width : 80
    }
});

export default function Services() {
    const classes = useStyles();

    return (
        <>
            <h1>Explore The Marketplace</h1>
            <Card className={classes.root}>
                <CardActionArea style={{textAlign: 'center'}}>
                    <CardMedia
                        className={classes.media}
                        image={dmsvg}
                        width="50px"
                        title="Digital Marketing"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Digital Marketing
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
