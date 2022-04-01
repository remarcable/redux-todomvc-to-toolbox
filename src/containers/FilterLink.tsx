import { actions, VisibilityFilter } from "../appSlice";
import Link from "../components/Link";
import { useAppDispatch, useAppSelector } from "../store";

// This is a very verbose refactoring of this component. One would probably do this directly inside of <Link />
const FilterLink = ({
    filter,
    children,
}: {
    filter: VisibilityFilter;
    children: React.ElementType;
}) => {
    const dispatch = useAppDispatch();
    const active = useAppSelector((state) => filter === state.app.visibilityFilter);
    const setFilter = () => dispatch(actions.setVisibilityFilter(filter));

    return (
        <Link active={active} setFilter={setFilter}>
            {children}
        </Link>
    );
};

export default FilterLink;
