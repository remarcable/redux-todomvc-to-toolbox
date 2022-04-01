import { connect } from "react-redux";
import { actions } from "../appSlice";
import Header from "../components/Header";

export default connect(null, { addTodo: actions.addTodo })(Header);
