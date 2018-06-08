import { Action } from "redux";

export const LEFT_DRAWER_INIT = "@@left_drawer/LEFT_DRAWER_INIT";
export const LEFT_DRAWER_SELECT_MENU = "@@left_drawer/LEFT_DRAWER_SELECT_MENU";

export interface ILeftDrawerSubMenuItem {
  key: string;
  name: string;
}

export interface ILeftDrawerMenuItem {
  key: string;
  name: string;
  open: boolean;
  submenus: ILeftDrawerSubMenuItem[];
}

export interface ILeftDrawerState {
  menus: ILeftDrawerMenuItem[];
  selectedMenu: string;
  selectedSubmenu: string; 
}

export interface ILeftDrawerInitAction extends Action {
  type: "@@left_drawer/LEFT_DRAWER_INIT";
  menus: ILeftDrawerMenuItem[];
}

export interface ILeftDrawerMenuSelectAction extends Action {
  type: "@@left_drawer/LEFT_DRAWER_SELECT_MENU";
  selected: ILeftDrawerMenuItem;
}

export type LeftDrawerActions = ILeftDrawerInitAction | ILeftDrawerMenuSelectAction;
