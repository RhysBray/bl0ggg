//action types
export const TOGGLE_MAKE_POST = "TOGGLE_MAKE_POST";

//action interfaces
export interface IToggleMakePostAction {
  type: typeof TOGGLE_MAKE_POST;
  isHidden: boolean;
}

//action creators
export const toggleMakePost = (): IToggleMakePostAction => ({
  type: TOGGLE_MAKE_POST,
  isHidden: true
});

//combing action creators
type IGeneralActions = IToggleMakePostAction;

export interface IGeneralState {
  isHidden: boolean;
}

const initialState: IGeneralState = {
  isHidden: true
};

const generalReducer = (state = initialState, action: IGeneralActions) => {
  switch (action.type) {
    case TOGGLE_MAKE_POST:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    default:
      return state;
  }
};

export default generalReducer;
