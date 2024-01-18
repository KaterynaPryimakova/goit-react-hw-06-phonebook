import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ findContact, filter }) => {
  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        onChange={findContact}
        type="text"
        name="search"
        autoComplete="on"
        value={filter}
      />
    </label>
  );
};
