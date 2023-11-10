import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={useSelector(getFilter)}
      onChange={handleChangeFilter}
      disabled={useSelector(getContacts).length === 0}
      />
  );
};

export default Filter;