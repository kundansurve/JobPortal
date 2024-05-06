export const fetchJobs =
  (offset = 0) =>
  (dispatch) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 100,
        offset: offset,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (offset === 0) {
            dispatch({
              type: "INITIAL_FETCH_JOBS_SUCCESS",
              jobs: result.jdList,
            });
            dispatch({ type: "SET_HAS_MORE", totalCount: result.totalCount });
          } else {
            dispatch({ type: "FETCH_JOBS_SUCCESS", jobs: result.jdList });
            dispatch({ type: "SET_HAS_MORE", totalCount: result.totalCount });
          }

          return result.jdListener;
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({ type: "FETCH_JOBS_FAILURE", error });
    }
  };

export const setFilters = (name, value) => (dispatch) => {
  switch (name) {
    case "minExperience":
      return dispatch({ type: "SET_FILTER_MIN_EXPERIENCE", value: value });
    case "companyName":
      return dispatch({ type: "SET_FILTER_COMPANY_NAME", value: value });
    case "location":
      return dispatch({ type: "SET_FILTER_LOCATION", value: value });
    case "remote":
      return dispatch({ type: "SET_FILTER_REMOTE", value: value });
    case "role":
      return dispatch({ type: "SET_FILTER_ROLE", value: value });
    case "minBasePay":
      return dispatch({ type: "SET_FILTER_MIN_BASE_PAY", value: value });
    default:
      return {};
  }
};
