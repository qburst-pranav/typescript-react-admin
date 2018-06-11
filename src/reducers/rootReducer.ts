import { combineReducers, Reducer } from 'redux';

import { ILeftDrawerState } from "../types/leftDrawer";
import { leftDrawerReducer } from './leftDrawer';

export interface IApplicationState {
    leftDrawer: ILeftDrawerState;
}

const rootReducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
    leftDrawer: leftDrawerReducer
});

export default rootReducer;
