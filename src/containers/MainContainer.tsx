import { connect, Dispatch } from "react-redux";

import Main from "../components/Main";
import { IApplicationState } from "../store/index";

const mapStateToProps = (state: IApplicationState) => ({
  leftDrawer: state.leftDrawer
});

export interface IConnectedMainProps<S> {
    dispatch: Dispatch<S>;
} 

export default connect(
  mapStateToProps
)(Main);
