import { TOGGLE_FILTER, SET_LOCATION } from '../actions/types';

const initialState = {
  location: '',
  filters: {
    feelsLike: false,
    wind: false,
    humidity: false,
    visibility: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      const { name } = action.payload.filter;
      const value = action.payload.filter.checked;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case SET_LOCATION:
      return {
        ...state,
        location: action.payload.location,
      };

    default:
      return state;
  }
};

export default rootReducer;
