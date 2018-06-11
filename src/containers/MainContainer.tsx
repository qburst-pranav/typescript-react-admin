import { connect, Dispatch } from "react-redux";

import {
  initLeftDrawerMenu,
  selectLeftDrawerMenu
} from "../actions/leftDrawer";
import Main from "../components/Main";
import { IApplicationState } from "../reducers/rootReducer";
import {
  ILeftDrawerMenuItem,
  ILeftDrawerState
} from "../types/leftDrawer";

interface IStateProps {
  leftDrawer: ILeftDrawerState;
}

interface IDispatchProps {
  initLeftDrawer: (menus: ILeftDrawerMenuItem[]) => void;
  selectLeftDrawerMenu: (selected: ILeftDrawerMenuItem) => void;
}

export type ConnectedProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IApplicationState): IStateProps => ({
  leftDrawer: state.leftDrawer
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  initLeftDrawer: (menus: ILeftDrawerMenuItem[]) => {
    dispatch(initLeftDrawerMenu(menus));
  },
  selectLeftDrawerMenu: (selected: ILeftDrawerMenuItem) => {
    dispatch(selectLeftDrawerMenu(selected));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
