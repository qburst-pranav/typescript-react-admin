import { ActionCreator } from "redux";

import {
  ILeftDrawerInitAction,
  ILeftDrawerMenuItem,
  ILeftDrawerMenuSelectAction,
  LEFT_DRAWER_INIT,
  LEFT_DRAWER_SELECT_MENU
} from "../types/leftDrawer";

export const initLeftDrawerMenu: ActionCreator<ILeftDrawerInitAction> = (
  menus: ILeftDrawerMenuItem[]
) => ({
  menus,
  type: LEFT_DRAWER_INIT
});

export const selectLeftDrawerMenu: ActionCreator<
  ILeftDrawerMenuSelectAction
> = (selected: ILeftDrawerMenuItem) => ({
  selected,
  type: LEFT_DRAWER_SELECT_MENU
});
