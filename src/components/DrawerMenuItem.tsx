import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import * as React from "react";

import DrawerSubMenu, { ISubMenuItem } from './DrawerSubMenu';

const styles = (theme: Theme) => createStyles({
  inset: {
    paddingLeft: theme.spacing.unit * 3
  }
});

interface IProps extends WithStyles<typeof styles>{
  menuItem: {
    key: string;
    name: string;
    open: boolean;
    submenus: ISubMenuItem[];
  };
}

function DrawerMenuItem({ menuItem, classes }: IProps) {
  const { name, open, submenus } = menuItem;
  return (
    <div>
      <ListItem button={true}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit={true} >
        {
          submenus.length && <DrawerSubMenu subMenus={submenus} />
        }
      </Collapse>
    </div>
  );
}

export default withStyles(styles)(DrawerMenuItem);
