import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import Home from 'containers/Home'
import About from 'containers/About'
import withRoot from 'components/withRoot'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Background from 'components/Background'
import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

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

const App = (props) => {
  const {classes} = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Reboot />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Workbooks
            </Typography>
          </Toolbar>
        </AppBar>
        <Background />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App))