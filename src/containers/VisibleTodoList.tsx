import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../appSlice";
import TodoList from "../components/TodoList";
import { getVisibleTodos } from "../selectors";
import { RootState } from "../store";

const mapStateToProps = (state: RootState) => ({
    filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
