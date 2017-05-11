import { combineReducers } from 'redux';

const initialState = {
  name: '',
  description: '',
  goals: []
}

function goals(state = initialState, action) {
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

