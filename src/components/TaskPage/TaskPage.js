import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {required} from 'redux-form-validators'
import PropTypes from 'prop-types';

import getTasks from '../../selectors/getTasks';
import * as taskActions from '../../actions/taskActions/taskActions';

import FormInput from '../shared/FormInput';


export class TaskPage extends React.PureComponent {
  render() {
    const {
      handleSubmit,
      tasks
    } = this.props;

    return (
      <div>
        <form
          onSubmit={handleSubmit(this.handleAddTask)}
        >
          <Field
            type="text"
            component={FormInput}
            placeholder="Task name"
            name="task"
            validate={[required()]}
          />
          <button
            className="button-raised login-form--submit"
            type="submit"
          >
            Enter task
          </button>
        </form>
        <ul className="task-page__task-list">
          {
            tasks.map((task) => {
              return (
                <li
                  key={task.id}
                  className="task-page__task-item"
                >
                  {task.taskName}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  handleAddTask = (taskFormData) => {
    this.props.taskActions.addTask({
      taskFormData
    });

    this.props.reset();
  };
}

TaskPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired
  })).isRequired,
  taskActions: PropTypes.shape({
    addTask: PropTypes.func.isRequired
  }).isRequired
};


const mapStateToProps = (state) => ({
  tasks: getTasks(state)
});

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(taskActions, dispatch)
});

const TaskPageForm = reduxForm({
  form: 'TasksPage',
  shouldValidate: () => true // Due to bug https://github.com/erikras/redux-form/issues/3276
})(TaskPage);

const ConnectedTaskPageForm = connect(mapStateToProps, mapDispatchToProps)(TaskPageForm);

export default ConnectedTaskPageForm;
