import request from '../../shared/helpers/request';
import * as actionsTypes from './appConstants';

export function workingInServer() {
  return { type: actionsTypes.WORKING_IN_SERVER };
}

export function notWorkingInServer() {
  return { type: actionsTypes.NOT_WORKING_IN_SERVER };
}
