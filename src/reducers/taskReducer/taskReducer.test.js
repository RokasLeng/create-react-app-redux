import taskReducer from './taskReducer';
import * as actionTypes from '../../actions/actionTypes';


describe('TaskReducer', () => {
  let initState;

  before(() => {
    initState = {
      'id1': {
        id: 'id1',
        taskName: 'Task 1'
      }
    }
  });

  it('should add new task', () => {
    const action = {
      type: actionTypes.ADD_TASK,
      payload: {
        id: 'id2',
        taskName: 'Task 2'
      }
    };

    expect(taskReducer(initState, action)).to.eql({
        'id1': {
          id: 'id1',
          taskName: 'Task 1'
        },
        'id2': {
          id: 'id2',
          taskName: 'Task 2'
        }
      }
    );
  })
});