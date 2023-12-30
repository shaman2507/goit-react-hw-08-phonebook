import css from './Filter.module.css';

import { createFilter } from 'store/filterSlice/filterSlice';
import { useDispatch } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    const newFilterValue = e.currentTarget.value.toLowerCase();
    dispatch(createFilter(newFilterValue));
  };

  return (
    <div >
      <label>Find contacts by name </label>
      <input className={css.input} type="text" name="filter" onChange={handleChangeFilter} />
    </div>
  );
};

export default Filter;