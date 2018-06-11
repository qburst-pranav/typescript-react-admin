import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import * as React from "react";

import { ILeftDrawerMenuItem } from '../types/leftDrawer';
import DrawerSubMenu from "./DrawerSubMenu";
interface IProps {
  menuItem: ILeftDrawerMenuItem;
  onMenuSelect: (selected: ILeftDrawerMenuItem) => void;
}

class DrawerMenuItem extends React.Component<IProps> {
  constructor(props: IProps){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const { menuItem, onMenuSelect } = this.props;
    onMenuSelect(menuItem);
  }

  render() {
  const { menuItem: { name, open, submenus } }: IProps = this.props;
  return (
    <div>
      <ListItem button={true} onClick={this.handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit={true}>
        {submenus.length && <DrawerSubMenu subMenus={submenus} />}
      </Collapse>
    </div>
  );
  }
}

export default DrawerMenuItem;
