import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    myNavbar: {
        backgroundColor: '#449DD1'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleDesktopProjectMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            id={menuId}
            keepMounted
            // transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose} component={Link} to={'/projects/emberlast'}>
                Emberlast Inc.
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to={'/projects/hpe'}>
                HPE IoT Visualization
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button component={Link} to={'/'}>
                    Home
                </Button>
            </MenuItem>
            <MenuItem>
                <Button onClick={handleClick}>
                    Projects
                    {open ? <ExpandLess /> : <ExpandMore />}
                </Button>
            </MenuItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disabledPadding >
                    <ListItem className={classes.nested}>
                        <Button component={Link} to={'/projects/emberlast'}>
                            HPE IoT Visualization
                            </Button>
                    </ListItem>
                    <ListItem className={classes.nested}>
                        <Button component={Link} to={'/projects/emberlast'}>
                            Emberlast Inc.
                            </Button>
                    </ListItem>
                </List>
            </Collapse>
            <MenuItem component={Link} to={'/#about'}>
                <Button>About</Button>
            </MenuItem>
            <MenuItem component={Link} to={'/#contact'}>
                <Button>Contact</Button>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow} className={classes.myNavbar}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        D. Harmon Pollock
                </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button component={Link} to={'/'}> Home</Button>
                        <Button aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleDesktopProjectMenuOpen}>
                            Projects
                        </Button>
                        <Button component={Link} to={'/#about'}>About</Button>
                        <Button component={Link} to={'/#contact'}>Contact</Button>

                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}