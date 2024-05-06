const initialState = {
  jobs: [],
  filters: {
    minExperience: null,
    companyName: null,
    location: null,
    remote: null,
    role: null,
    minBasePay: null,
  },
  hasMore: true,
  offset: 0,
  totalCount: 700,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_JOBS_SUCCESS":
      return { ...state, jobs: [...action.jobs] };
    case "FETCH_JOBS_SUCCESS":
      return { ...state, jobs: [...state.jobs, ...action.jobs] };
    case "SET_HAS_MORE":
      if (state.jobs.length >= state.totalCount)
        return {
          ...state,
          hasMore: false,
          offset: state.offset + 100,
          totalCount: action.totalCount,
        };
      else return { ...state, hasMore: true, totalCount: action.totalCount };
    case "SET_FILTER_MIN_EXPERIENCE":
      const newFilter1 = { ...state.filters };
      newFilter1.minExperience = action.value;
      return { ...state, filters: newFilter1 };
    case "SET_FILTER_COMPANY_NAME":
      const newFilter2 = { ...state.filters };
      newFilter2.companyName = action.value;
      return { ...state, filters: newFilter2 };
    case "SET_FILTER_LOCATION":
      const newFilter3 = { ...state.filters };
      newFilter3.location = action.value;
      return { ...state, filters: newFilter3 };
    case "SET_FILTER_REMOTE":
      const newFilter4 = { ...state.filters };
      newFilter4.remote = action.value;
      return { ...state, filters: newFilter4 };
    case "SET_FILTER_ROLE":
      const newFilter5 = { ...state.filters };
      newFilter5.role = action.value;
      return { ...state, filters: newFilter5 };
    case "SET_FILTER_MIN_BASE_PAY":
      const newFilter6 = { ...state.value };
      newFilter6.minBasePay = action.value;
      return { ...state, filters: newFilter6 };
    default:
      return state;
  }
};
