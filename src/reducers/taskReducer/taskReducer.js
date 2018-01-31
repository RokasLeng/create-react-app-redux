import * as actionTypes from '../../actions/actionTypes';

const initialTasks = {
  'id1': {
    id: 'id1',
    taskName: 'Task 1'
  },
  'id2': {
    id: 'id2',
    taskName: 'Task 2'
  }
};

const taskReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default taskReducer;
