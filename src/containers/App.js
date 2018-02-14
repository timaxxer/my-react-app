import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import AppSearch from 'components/AppSearch'
import Home from 'containers/Home'
import About from 'containers/About'
import withRoot from 'components/withRoot'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Background from 'components/Background'
import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import SendIcon from 'material-ui-icons/Send'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import StarBorder from 'material-ui-icons/StarBorder'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#819ca9',
      main: '#455a64',
      dark: '#29434e',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff5131',
      main: '#d50000',
      dark: '#9b0000',
      contrastText: '#ffffff',
    },
  },
});

const styles = theme => ({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  grow: {
    flex: '1 1 auto',
  },
  list: {
    width: 250,
  },
  button: {
    minWidth: 10,
    height: 64
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  label: {
    textTransform: 'capitalize',
  },
})

class App extends Component {
  state = {
    drawerOpen: false
  }
  toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen})
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Reboot/>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Workbooks
              </Typography>
              <div className={classes.grow} />
              <AppSearch />
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem dense onClick={this.handleClose}>Yanick Tremblay account</MenuItem>
                <MenuItem dense onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          <Background/>
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={About}/>
          </main>
        </div>
        <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <div className={classes.list}>
            <List
              component="nav"
              subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
            >
              <Link to={'/'} >
                <ListItem button onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Home" />
                </ListItem>
              </Link>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText inset primary="Drafts" />
              </ListItem>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary="Inbox" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App))