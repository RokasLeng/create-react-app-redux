import configureMockStore from 'redux-mock-store';
import * as taskActions from './taskActions';
import * as types from '../actionTypes';

const mockStore = configureMockStore();


describe('taskActions', () => {
  describe('addTask', () => {
    let store;

    before(() => {
      store = mockStore({});
    });

    it('should call ADD_TASK action', () => {
      const expectedActions = [{
        type: types.ADD_TASK,
        payload: {
          taskName: 'Task 1'
        }
      }];

      store.dispatch(taskActions.addTask({
        taskFormData: {
          task: 'Task 1'
        }
      }));

      expect(store.getActions()).excludingEvery('id').to.eql(expectedActions);
    });

    afterEach(() => {
      store.clearActions();
    });
  });
});
