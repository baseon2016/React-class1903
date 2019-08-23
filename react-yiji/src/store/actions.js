import { CHANGE_INDEX, TOGGLE_AGREE } from "./actionTypes";
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
export { changeIndex, toggleAgree };
