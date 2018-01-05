import * as actionsTypes from './appConstants';

const initialState = {
  trabajandoEnServidor: false
};
const usableState = Object.assign({}, initialState);

export default function appReducer(state = usableState, action) {
  let editedState;
  switch (action.type) {

    case actionsTypes.WORKING_IN_SERVER:
      editedState = Object.assign({}, state);
      editedState.trabajandoEnServidor = true;
      break;

    case actionsTypes.NOT_WORKING_IN_SERVER:
      editedState = Object.assign({}, state);
      editedState.trabajandoEnServidor = false;
      break;

    default:
      return state;
  }
  return editedState;
}
