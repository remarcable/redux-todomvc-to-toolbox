import { actions, VisibilityFilter } from "../appSlice";
import Link from "../components/Link";
import { useAppDispatch, useAppSelector } from "../store";

const FilterLink = ({ filter, ...props }: { filter: VisibilityFilter }) => {
    const dispatch = useAppDispatch();
    const active = useAppSelector((state) => filter === state.app.visibilityFilter);
    const setFilter = () => dispatch(actions.setVisibilityFilter(filter));

    return <Link active={active} setFilter={setFilter} {...props} />;
};

export default FilterLink;
