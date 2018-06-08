import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import * as React from "react";

import { ILeftDrawerSubMenuItem } from "../store/leftDrawer/types";

const styles = (theme: Theme) =>
  createStyles({
    inset: {
      paddingLeft: theme.spacing.unit * 3
    },
    subMenuItem: {
      fontSize: "0.9em"
    }
  });

interface IProps extends WithStyles<typeof styles> {
  subMenus: ILeftDrawerSubMenuItem[];
}

function DrawerSubMenu({ classes, subMenus }: IProps): JSX.Element {
  return (
    <List>
      {subMenus.map(({ key, name }) => (
        <ListItem key={key}>
          <ListItemText inset={true} primary={name} className={classes.inset} />
        </ListItem>
      ))}
    </List>
  );
}

export default withStyles(styles)(DrawerSubMenu);
