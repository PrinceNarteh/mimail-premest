import { StateType } from "../mainContext";

interface ActionType {
  type: string;
  payload: any;
}

export const mailReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};
