import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    paper: {
        padding: theme.spacing.unit * 10,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit * 3,
        widht: 200
    },
});

function Header(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.layout}>
                <Toolbar className={classes.toolbarMain}>
                    <Typography
                        variant="headline"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        PT.Global Mitra Copierindo
					</Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    <Typography color="inherit" noWrap >
                        <Button color="primary" className={classes.button}>
                            Home
                    </Button>
                    </Typography>
                    <Typography color="inherit" noWrap >
                        <Button color="primary" className={classes.button}>
                            Produk
                    </Button>
                    </Typography>
                    <Typography color="inherit" noWrap >
                        <Button color="primary" className={classes.button}>
                            Sewa Mesin FotoCopy
                    </Button>
                    </Typography>
                    <Typography color="inherit" noWrap >
                        <Button color="primary" className={classes.button}>
                            Tentang Kami
                    </Button>
                    </Typography>
                    <Typography color="inherit" noWrap >
                        <Button color="primary" className={classes.button}>
                            Cara Beli
                    </Button>
                    </Typography>
                    <Typography color="inherit" noWrap >
                        <Button color="primary" className={classes.button}>
                            Ulasan Pelanggan
                    </Button>
                    </Typography>
                    <Typography color="inherit" noWrap >
                        <Button color="primary" className={classes.button}>
                            Download PriceList
                    </Button>
                    </Typography>
                </Toolbar>
            </div>
        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
