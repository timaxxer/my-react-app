import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
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
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

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
  render() {
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Reboot/>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Workbooks
              </Typography>
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
            Test
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