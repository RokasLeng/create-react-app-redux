import {v4} from 'uuid';

import * as actionTypes from '../actionTypes';


export const addTask = ({taskFormData}) => ({
  type: actionTypes.ADD_TASK,
  payload: {
    id: v4(),
    taskName: taskFormData.task
  }
});
