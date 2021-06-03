import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Album from './Album';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `0px solid ${theme.palette.divider}`,
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
    heroContent: {
        padding: theme.spacing(8, 0, 6),

    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        margin: "0 20px",
        paddingLeft: "30"
    },
    image: {
        marginLeft: '23px',
        marginBottom: '69px',
        position: 'relative',
        width: '385px',
        height: '398.05px',
        borderRadius: '10px',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '0px ',
                color: '#FBCF33'
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '80%',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,

    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        borderRadius: '10px',
    },
    imageBackdrop: {
        borderRadius: '10px',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        lineHeight: '42px',
        color: '#FFFFFF',
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },

}));

const images = [
    {
        url: './pics/gallerie/M21A0352.jpg',
        title: 'Marriage',
        width: '30%',
    },
    {
        url: './pics/gallerie/M21A0328.jpg',
        title: 'Fiançaille',
        width: '30%',
    },
    {
        url: './pics/gallerie/_I9A8777.jpg',
        title: 'Anniversaire',
        width: '30%',
    },
    {
        url: './pics/gallerie/CI9A3740.jpg',
        title: 'conférences',
        width: '30%',
    },
    {
        url: './pics/gallerie/CI9A0616.jpg',
        title: 'Festivals et fêtes',
        width: '30%',
    },
    {
        url: './pics/gallerie/120111021_176083944002281_7196454286005741939_n.jpg',
        title: 'Shooting',
        width: '30%',
    },
];


export default function Catgegory() {
    const classes = useStyles();

    return (
        <div className="category" >
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <h1>
                    New Collections
        </h1>
            </Container>
            {/* End hero unit */}
            <div className={classes.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                            heigth: "100%"
                        }}
                    ><Link to={`/gallery/${image.title}`}>
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography

                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                </Typography>
                            </span></Link>
                    </ButtonBase>
                ))}
            </div>
        </div >
    );
}