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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.flex}>
            <Link to="/">
              <Button
                color="contrast"
                classes={{
                  root: classes.button
                }}>Home</Button>
            </Link>
            <Link to="/about-us">
              <Button
                color="contrast"
                classes={{
                  root: classes.button
                }}>About</Button>
            </Link>
          </div>
          <Link to="/about-us">
            <Button
              color="contrast"
              classes={{
                root: classes.button
              }}>About</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Background />
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App))