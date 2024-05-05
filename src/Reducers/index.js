// reducers.js
const initialState = {
    jobs: [],
    filters: {},
    hasMore: true,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOBS_SUCCESS':
        
        return {...state, jobs: [...state.jobs,...action.jobs] };
      case 'SET_HAS_MORE':
        return {...state, hasMore: action.hasMore };
      case 'SET_FILTERS':
        return {...state, filters: action.filters };
      default:
        return state;
    }
  };