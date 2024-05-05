// actions.js
import axios from "axios";

export const fetchJobs =
  (filters, offset = 0) =>
  (dispatch) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: 0,
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
          dispatch({ type: "FETCH_JOBS_SUCCESS", jobs: result.jdList });
          dispatch({ type: "SET_HAS_MORE", hasMore: result.totalCount });
          console.log(result);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({ type: "FETCH_JOBS_FAILURE", error });
    }
  };

export const setFilters = (filters) => ({ type: "SET_FILTERS", filters });
