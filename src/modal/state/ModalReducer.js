export type TModal = {
  name: string;
  props: any;
};

export const SET_MODAL = "SET_MODAL";
export const CLEAR_MODAL = "CLEAR_MODAL";

export const setModal = (modal: TModal | undefined) => {
  return {
    type: SET_MODAL,
    payload: modal,
  };
};

export const clearModal = () => {
  return {
    type: CLEAR_MODAL,
  };
};
