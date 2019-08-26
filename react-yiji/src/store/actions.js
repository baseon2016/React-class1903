import {
  CHANGE_INDEX,
  TOGGLE_AGREE,
  CHANGE_TAB,
  SWITCH_SHOW
} from "./actionTypes";
const changeIndex = index => {
  return {
    type: CHANGE_INDEX,
    payload: index
  };
};
const toggleAgree = () => {
  return {
    type: TOGGLE_AGREE
  };
};
const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    payload: tab
  };
};
const switchShow = () => {
  return {
    type: SWITCH_SHOW
  };
};
export { changeIndex, toggleAgree, changeTab, switchShow };
