import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from '../../redus/actions';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispath = useDispatch();

  return (
    <label>
      <p>Find contact by name</p>
      <input
        type="input"
        name="filter"
        onChange={event => dispath(filterAction(event.currentTarget.value))}
        value={filter}
      />
    </label>
  );
}
