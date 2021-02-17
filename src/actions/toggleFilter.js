import { TOGGLE_FILTER } from './types';

const toggleFilter = (filter) => ({ type: TOGGLE_FILTER, payload: { filter } });

export default toggleFilter;
