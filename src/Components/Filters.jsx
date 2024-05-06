import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField, Select, MenuItem, InputLabel } from "@mui/material";
import { setFilters } from "../Actions";

const Filters = () => {
  const dispatch = useDispatch();
  const minExperience = useSelector((state) => state.filters.minExperience);
  const companyName = useSelector((state) => state.filters.companyName);
  const location = useSelector((state) => state.filters.location);
  const remote = useSelector((state) => state.filters.remote);
  //const techStack =useSelector((state)=>state.filters.minExperience);
  const role = useSelector((state) => state.filters.role);
  const minBasePay = useSelector((state) => state.filters.minBasePay);

  return (
    <>
      <Grid container spacing={2} marginY={1} paddingY={1}>
        <Grid item>
          <TextField
            label="MinExperience"
            value={minExperience}
            type="number"
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => {dispatch(setFilters('minExperience',e.target.value))}}
            //onBlur={() => handleFilterChange("minExperience", minExperience)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Company"
            value={companyName}
            onChange={(e) => {dispatch(setFilters('companyName',e.target.value))}}
            //onBlur={() => handleFilterChange("company", companyName)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Location"
            value={location}
            onChange={(e) => {dispatch(setFilters('location',e.target.value))}}
           // onBlur={() => handleFilterChange("location", location)}
          />
        </Grid>
        <Grid item>
          <Select
            id="work-type-select"
            value={remote}
            label="Type"
            onChange={(e) => {dispatch(setFilters('remote',e.target.value))}}
          >
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={"Remote"}>Remote</MenuItem>
            <MenuItem value={"On-Site"}>On- Site</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <TextField
            label="Role"
            value={role}
            onChange={(e) => {dispatch(setFilters('role',e.target.value))}}
            //onBlur={() => handleFilterChange("role", role)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Min Base Pay"
            value={minBasePay}
            type="number"
            onChange={(e) => {dispatch(setFilters('minBasePay',e.target.value))}}
            //onBlur={() => handleFilterChange("minBasePay", minBasePay)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
