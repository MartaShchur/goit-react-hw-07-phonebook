import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  // console.log(filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
      disabled={useSelector(selectContacts).length === 0}
    />
  );
};

export default Filter;