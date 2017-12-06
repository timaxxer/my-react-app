import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import Home from 'containers/Home'
import About from 'containers/About'
import withRoot from 'components/withRoot'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


const App = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button color="contrast" className={classes.flex}>Home</Button>
          </Link>
          <Link to="/about-us">
            <Button color="contrast">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about-us" component={About}/>
      </main>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRoot(App))