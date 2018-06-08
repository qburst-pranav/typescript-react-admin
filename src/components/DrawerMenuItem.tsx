import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import * as React from "react";

import { ILeftDrawerMenuItem } from '../store/leftDrawer/types';
import DrawerSubMenu from "./DrawerSubMenu";
interface IProps {
  menuItem: ILeftDrawerMenuItem;
}

function DrawerMenuItem({ menuItem }: IProps) {
  const { name, open, submenus } = menuItem;
  return (
    <div>
      <ListItem button={true}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit={true}>
        {submenus.length && <DrawerSubMenu subMenus={submenus} />}
      </Collapse>
    </div>
  );
}

export default DrawerMenuItem;
