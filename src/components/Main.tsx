import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import { MENUS } from "../Constants";
import { ConnectedProps } from "../containers/MainContainer";
import { ILeftDrawerMenuItem } from "../types/leftDrawer";
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

interface IComponentProps extends WithStyles<typeof styles> {}

type Props = IComponentProps & ConnectedProps;

class Main extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
  }

  componentDidMount() {
    const { initLeftDrawer }: Props = this.props;
    initLeftDrawer(MENUS.LEFT_DRAWER);
  }

  handleMenuSelect(selected: ILeftDrawerMenuItem) {
    const { selectLeftDrawerMenu }: Props = this.props;
    selectLeftDrawerMenu(selected);
  }

  render() {
    const {
      classes,
      leftDrawer: { menus }
    }: Props = this.props;
    return (
      <div className={classes.root}>
        <LeftDrawer menus={menus} onMenuSelect={this.handleMenuSelect} />
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
