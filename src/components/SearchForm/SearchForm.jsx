import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './SearchForm.styled';

import { filter } from 'redux/filterSlice';

export const Filter = ({ name, onChange }) => (
  <Label>
    Find
    <Input type="text" value={name} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
