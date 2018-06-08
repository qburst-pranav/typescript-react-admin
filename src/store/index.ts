import { combineReducers, Reducer } from 'redux';

import { leftDrawerReducer } from './leftDrawer/reducer';
import { ILeftDrawerState } from "./leftDrawer/types";

export interface IApplicationState {
    leftDrawer: ILeftDrawerState;
}

const rootReducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
    leftDrawer: leftDrawerReducer
});

export default rootReducer;
