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

import { ILeftDrawerSubMenuItem } from "../types/leftDrawer";

const styles = (theme: Theme) =>
  createStyles({
    inset: {
      "&:first-child": {
        paddingLeft: theme.spacing.unit * 2
      }
    },
    primary: {
      fontSize: '0.8em'
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
          <ListItemText
            inset={true}
            primary={name}
            classes={{
              inset: classes.inset,
              primary: classes.primary
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default withStyles(styles)(DrawerSubMenu);
