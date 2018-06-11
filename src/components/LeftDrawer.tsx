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

import { ILeftDrawerMenuItem } from "../types/leftDrawer";
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

interface IProps extends WithStyles<typeof styles> {
  menus: ILeftDrawerMenuItem[];
  onMenuSelect: (selected: ILeftDrawerMenuItem) => void;
}

class LeftDrawer extends React.Component<IProps> {
  render() {
    const { classes, menus, onMenuSelect }: IProps = this.props;
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
          {menus.map(menu => (
            <DrawerMenuItem
              menuItem={menu}
              key={menu.key}
              onMenuSelect={onMenuSelect}
            />
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(LeftDrawer);
