// @flow

import { combineReducers } from 'redux';

const initialState = {
  name: '',
  description: '',
  goals: []
}

type State = {
  name: string,
  description: string,
  goals: Array<Object>
}

function goals(state: State = initialState, action: Object) {
  if (action.type === 'GET_GOALS') {
    return Object.assign({}, state, { goals: state.goals });
  }

  if (action.type === 'ADD_GOAL') {
    return state.goals.concat(state.goals);
  }

  return initialState;
}

const goalsApp = combineReducers({
  goals
});

export default goalsApp;

