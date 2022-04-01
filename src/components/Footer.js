import React from "react";
import PropTypes from "prop-types";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilter } from "../appSlice";

const FILTER_TITLES = {
    [VisibilityFilter.SHOW_ALL]: "All",
    [VisibilityFilter.SHOW_ACTIVE]: "Active",
    [VisibilityFilter.SHOW_COMPLETED]: "Completed",
};

const Footer = (props) => {
    const { activeCount, completedCount, onClearCompleted } = props;
    const itemWord = activeCount === 1 ? "item" : "items";
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount || "No"}</strong> {itemWord} left
            </span>
            <ul className="filters">
                {Object.keys(FILTER_TITLES).map((filter) => (
                    <li key={filter}>
                        <FilterLink filter={filter}>{FILTER_TITLES[filter]}</FilterLink>
                    </li>
                ))}
            </ul>
            {!!completedCount && (
                <button className="clear-completed" onClick={onClearCompleted}>
                    Clear completed
                </button>
            )}
        </footer>
    );
};

Footer.propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
