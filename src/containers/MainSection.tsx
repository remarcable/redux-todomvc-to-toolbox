import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "../appSlice";
import MainSection from "../components/MainSection";
import { getCompletedTodoCount } from "../selectors";
import { AppDispatch, RootState } from "../store";

const mapStateToProps = (state: RootState) => ({
    todosCount: state.app.todos.length,
    completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
