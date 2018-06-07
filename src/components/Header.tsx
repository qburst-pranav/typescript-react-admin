import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

const styles = (theme: Theme) => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    flex: {
      flex: 1,
      textAlign: 'left'
    },
    root: {
        flexGrow: 1,
      }
  });

interface IProps extends WithStyles<typeof styles> {}

function Header({ classes }: IProps) {
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex} >
            Search
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
