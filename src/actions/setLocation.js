import { SET_LOCATION } from './types';

const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: { location },
});

export default setLocation;
