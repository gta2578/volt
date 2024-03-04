import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { TODO_FILTERS } from "../constants";


const TodoFilters = ({ activeFilter, setFilter }) => {


  return (
    <div className="todo-filters-wrapper">
      <div className="todo-filters">
        {Object.keys(TODO_FILTERS).map(filterKey => {
          const currentFilter = TODO_FILTERS[filterKey];
          return (
            <span
              key={`todo-filter-${currentFilter}`}
              className={cx(
                "filter",
                currentFilter === activeFilter && "filter--active"
              )}
              onClick={() => {
                setFilter(currentFilter);
              }}
            >
            {currentFilter}
          </span>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.todoFilter };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(TodoFilters);