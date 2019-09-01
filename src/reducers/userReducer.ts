import { ACTION } from '../actions/types';
import { AnyAction } from 'redux';

const initialState = {
  isSignedIn: false,
  isAdmin: false,
  userId: null,
  userName: null
};

export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTION.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload.userId, userName: action.payload.userName };
    case ACTION.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userName: null, isAdmin: false };
    default:
      return state;
  }
};
