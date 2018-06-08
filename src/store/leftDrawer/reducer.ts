import { Reducer } from "redux";

import {
  ILeftDrawerState,
  LEFT_DRAWER_INIT,
  LEFT_DRAWER_SELECT_MENU,
  LeftDrawerActions
} from "./types";

const initialState: ILeftDrawerState = {
  menus: [],
  selectedMenu: "",
  selectedSubmenu: ""
};

export const leftDrawerReducer: Reducer<ILeftDrawerState> = (
  state: ILeftDrawerState = initialState,
  action
) => {
  switch ((action as LeftDrawerActions).type) {
    case LEFT_DRAWER_INIT:
      return { ...state, menus: action.menus };
    case LEFT_DRAWER_SELECT_MENU:
      return {
        ...state,
        menus: state.menus.map(menu => {
          if (menu.key === action.selected.key) {
            return {
              ...menu,
              open: !menu.open
            };
          }
          return menu;
        })
      };
    default:
      return state;
  }
};
