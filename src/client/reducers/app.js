import { FETCH_INDEX_DATA_FULLFILLED, FETCH_INDEX_DATA_REJECTED } from '../constants/index';

const initialState = {
  data: [],
  loading: true,
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INDEX_DATA_FULLFILLED:
      return {
        ...state,
        loading: false,
        data: action.data
      }

    default:
      return state;
  }
}