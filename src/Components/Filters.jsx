import React from "react";
import { useDispatch } from "react-redux";
import { Grid, TextField, Select, MenuItem, Button } from "@mui/material";
import { setFilters } from "../Actions";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Filters = () => {
  const dispatch = useDispatch();
  const [minExperience, setMinExperience] = React.useState(null);
  const [companyName, setCompanyName] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [remote, setRemote] = React.useState(null);
  // const [techStack, setTechStack] = React.useState('');
  const [role, setRole] = React.useState(null);
  const [minBasePay, setMinBasePay] = React.useState(null);

  const handleFilters = () => {
    dispatch(setFilters("minExperience", minExperience));
    dispatch(setFilters("minBasePay", minBasePay));
    dispatch(setFilters("role", role));
    dispatch(setFilters("companyName", companyName));
    dispatch(setFilters("location", location));
    dispatch(setFilters("remote", remote));
  };
  const resetFilters = () => {
    
    setMinExperience(null);
    setCompanyName(null);
    setLocation(null);
    setRemote(null);
    setRole(null);
    setMinBasePay(null);
    handleFilters();
  };

  return (
    <>
      <Grid container spacing={2} marginY={1} paddingY={1}>
        <Grid item>
          <TextField
            label="MinExperience"
            value={minExperience}
            type="number"
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => {
              setMinExperience(e.target.value);
            }}
            //onBlur={() => handleFilterChange("minExperience", minExperience)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Company"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            //onBlur={() => handleFilterChange("company", companyName)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            // onBlur={() => handleFilterChange("location", location)}
          />
        </Grid>
        <Grid item>
          <Select
            id="work-type-select"
            value={remote}
            label="Type"
            onChange={(e) => {
              setRemote(remote);
            }}
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
            onChange={(e) => {
              setRole(e.target.value);
            }}
            //onBlur={() => handleFilterChange("role", role)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Min Base Pay"
            value={minBasePay}
            type="number"
            onChange={(e) => {
              setMinBasePay(e.target.value);
            }}
            //onBlur={() => handleFilterChange("minBasePay", minBasePay)}
          />
        </Grid>
        <Grid item sx={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            fullWidth
            fullHeight
            variant="contained"
            style={{ backgroundColor: "primary" }}
            startIcon={<FilterAltIcon />}
            onClick={handleFilters}
          >
            Filter
          </Button>
        </Grid>
        <br/>
        <Grid item sx={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            fullWidth
            fullHeight
            variant="contained"
            style={{ backgroundColor: "primary" }}
            onClick={resetFilters}
          >
            Reset Filter
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
