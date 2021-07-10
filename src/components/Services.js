import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';

// SVG Variables
import dmsvg from '../resources/svgs/digital-marketing.svg';
import gdsvg from '../resources/svgs/graphics-design.svg';
import wtsvg from '../resources/svgs/writing-translation.svg';
import vasvg from '../resources/svgs/video-animation.svg';
import masvg from '../resources/svgs/music-audio.svg';
import ptsvg from '../resources/svgs/programming.svg';
import bsvg from '../resources/svgs/business.svg';
import lsvg from '../resources/svgs/lifestyle.svg';
import dsvg from '../resources/svgs/data.svg';

const useStyles = makeStyles({
    media: {
        margin: 'auto',
        height: '60px',
        width: '50px'
    }
});

export default function Services() {

    return (
        <Container maxWidth="xl">
            <h1>Explore The Marketplace</h1>
            <ServiceCard name="Graphics & Design" url={gdsvg} />
            <ServiceCard name="Digital Marketing" url={dmsvg} />
            <ServiceCard name="Writing & Translation" url={wtsvg} />
            <ServiceCard name="Video & Animation" url={vasvg} />
            <ServiceCard name="Music & Audio" url={masvg} />
            <ServiceCard name="Programmming & Tech" url={ptsvg} />
            <ServiceCard name="Business" url={bsvg} />
            <ServiceCard name="Lifestyle" url={lsvg} />
            <ServiceCard name="Data" url={dsvg} />
        </Container>
    );
}

function ServiceCard(props) {
    const classes = useStyles();
    return (
        <Card style={{display: 'inline-block', width : '250px', margin: '5px' }}>
            <CardActionArea style={{ textAlign: 'center' }}>
                <CardMedia
                    className={classes.media}
                    image={props.url}
                    title={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
