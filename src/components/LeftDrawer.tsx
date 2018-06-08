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
    drawerPaper: {
      position: "relative",
      width: drawerWidth
    },
    toolbar: {
      ...theme.mixins.toolbar,
      margin: "1em 0 0 24px",
      textAlign: "left"
    }
  });

interface IProps extends WithStyles<typeof styles> {}

function LeftDrawer({ classes }: IProps): JSX.Element {
  return (
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
  );
}

export default withStyles(styles)(LeftDrawer);
