import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appbar: {
        background: "rgba(0 ,0 ,0 ,0.81)",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    divh: {
        display: 'flex',
        margin: '0 20px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    youtube: {
        color: "rgba(255,0,0,1)",
        fontSize: '2.5rem',
        zIndex: 10,
    },
    white: {
        width: 15,
        height: 15,
        background: 'white',
        zIndex: 9,
        position: 'relative',
        left: '-27px',
    },
    utext: {
        marginLeft: -10,
        fontSize: 27,
        fontFamily: `'Open Sans Condensed', sans-serif`,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        position: 'relative',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: -33,
        width: '64px',
        height: '29px'

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        width: '100%',
        color: 'white',
        paddingLeft: '10px',
        background: 'black',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        '&::placeholder': {
            color: 'white',
            paddingLeft: 10,
            border: '1px solid black'
        },
        borderStyle: 'none',
        height: '100%',
    },
    search: {

        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        height: '60%'
    },
    temp: {
        display: 'flex',
        alignItems: 'center',
    },
    mic: {
        marginLeft: '20px',
        background: 'black',
        width: 35,
        height: 35,
        borderRadius: '50%',
        padding: 8
    },
    micdiv: {
        height: '100%',
        alignItems: 'center',
    },
    videoIcon: {
        fontSize: '2rem',
    },
    divh1: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 20px',
        width: '14%',
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <>
            <div className="header__cotainer">
                <AppBar position="fixed" className={classes.appbar}>
                    <div className={classes.divh}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <YouTubeIcon className={classes.youtube} />
                        <div className={classes.white} />
                        <Typography className={classes.utext}>YouTube</Typography>
                    </div>
                    <div className={classes.divh}>
                        <div className={classes.search}>
                            <input className={classes.inputInput} style={{ width: '150%' }} />
                        </div>
                        <div className={classes.temp}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <div className={classes.micdiv}>
                                <MicIcon className={classes.mic} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.divh1}>
                        <VideoCallIcon className={classes.videoIcon} />
                        <AppsIcon className={classes.videoIcon} />
                        <AddAlertIcon className={classes.videoIcon} />
                        <PersonIcon className={classes.videoIcon} />
                    </div>
                </AppBar>
            </div>

        </>
    )
}

export default Header
