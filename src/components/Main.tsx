import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import * as React from "react";

import LeftDrawer from "./LeftDrawer";

const styles = (theme: Theme) =>
  createStyles({
    content: {
      backgroundColor: theme.palette.background.default,
      flexGrow: 1,
      minWidth: 0,
      padding: theme.spacing.unit * 3
    },
    root: {
      display: "flex",
      flexGrow: 1,
      overflow: "hidden",
      position: "relative",
      zIndex: 1
    }
  });

interface IProps extends WithStyles<typeof styles> {}

class Main extends React.Component<IProps> {
  componentDidMount(){
    const { initLeftDrawer, leftDrawer } = this.props; 
    initLeftDrawer(leftDrawer.menus);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LeftDrawer />
        <main className={classes.content}>
          <Typography noWrap={true}>
            {"You think water moves fast? You should see ice."}
          </Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
