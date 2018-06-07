import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import { MENUS } from "../Constants";

import DrawerMenuItem from "./DrawerMenuItem";

const drawerWidth: number = 240;

const styles = (theme: Theme) =>
  createStyles({
    content: {
      backgroundColor: theme.palette.background.default,
      flexGrow: 1,
      minWidth: 0, // So the Typography noWrap works
      padding: theme.spacing.unit * 3
    },
    drawerPaper: {
      position: "relative",
      width: drawerWidth
    },
    root: {
      display: "flex",
      flexGrow: 1,
      overflow: "hidden",
      position: "relative",
      zIndex: 1
    },
    toolbar: {
      ...theme.mixins.toolbar,
      margin: "1em 0 0 24px",
      textAlign: "left"
    }
  });

interface IProps extends WithStyles<typeof styles> {}

function ClippedDrawer({ classes }: IProps): JSX.Element {
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="title">{"MENU"}</Typography>
        </div>
        <List>
          {MENUS.LEFT_DRAWER.map(menu => (
            <DrawerMenuItem menuItem={menu} key={menu.key} />
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap={true}>
          {"You think water moves fast? You should see ice."}
        </Typography>
      </main>
    </div>
  );
}

export default withStyles(styles)(ClippedDrawer);
