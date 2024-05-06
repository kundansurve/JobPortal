import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../Actions";
import React, { useState, useEffect } from "react";

const JobPostCard = ({
  id,
  companyLogo,
  companyName,
  roleName,
  jobLocation,
  minSalary,
  maxSalary,
  salaryCurrencyCode,
  fetchNext,
  jobDescription,
  minExp,
  offset,
  maxExp,
}) => {
  const dispatch = useDispatch();
  // minExperience: null,
  //   companyName: null,
  //   location: null,
  //   remote: null,
  //   role: null,
  //   minBasePay: null,
  const [loading, setLoading] = useState(false);
  const filters = useSelector((state) => state.filters);
  const hasMore = useSelector((state) => state.hasMore);
  let [visibility, setVisibility] = useState(true);

  useEffect(() => {
    let CompanyValidation =
      filters.companyName &&
      !companyName.toLowerCase().startsWith(filters.companyName.toLowerCase());

    let ExperienceValidation =
      filters.minExperience &&
      (maxExp < filters.minExperience || minExp > filters.minExperience);

    let locationValidation =
      filters.location &&
      !jobLocation.toLowerCase().startsWith(filters.location.toLowerCase());

    let remoteValidation =
      filters.remote &&
      ((filters.remote.toLowerCase() === "remote" &&
        jobLocation.toLowerCase() !== "remote") ||
        (filters.remote !== "remote" &&
          jobLocation.toLowerCase() === "remote"));

    let roleValidation =
      filters.role &&
      roleName.toLowerCase().startsWith(filters.role.toLowerCase());
    let SalaryValidation =
      filters.minSalary &&
      (maxSalary < filters.minBasePay || minSalary > filters.minBasePay);

    if (
      CompanyValidation ||
      ExperienceValidation ||
      locationValidation ||
      remoteValidation ||
      roleValidation ||
      SalaryValidation
    ) {
      setVisibility(false);
    }
  }, [filters]);

  useEffect(() => {
    if (hasMore && fetchNext) {
      dispatch(fetchJobs(offset));
    }
  }, []);
  return (
    <Grid
      item
      key={id}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ display: visibility ? "" : "none", maxWidth: 300 }}
    >
      <Card className="job-card">
        <CardContent>
          <Box
            margin={1}
            padding={1}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Box
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={companyLogo}
                alt={companyName}
                style={{ width: "100px" }}
              />
            </Box>
            <Box
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {companyName}
                </Typography>
                <Typography variant="h4" component="div">
                  {roleName}
                </Typography>
                <Grid container alignItems="center">
                  <Grid item>
                    <LocationOnIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">{jobLocation}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Box>
          </Box>
          <Grid>
            <Typography
              variant="h6"
              color="textSecondary"
              margin={1}
              padding={1}
              gutterBottom
              component="span"
            >
              Expected Salary: {salaryCurrencyCode} {minSalary} - {maxSalary}
            </Typography>
            <Typography variant="body2" margin={1} padding={1}>
              <Typography gutterBottom variant="h5" component="div">
                About:
              </Typography>
              {jobDescription?.substring(0, 500)}{" "}
              {jobDescription?.length > 500 ? "..." : ""}
              <Button size="small" onClick={() => null}>
                Expand
              </Button>
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            color="textSecondary"
            margin={1}
            padding={1}
            gutterBottom
            component="span"
          >
            Experience: {minExp} - {maxExp} years
          </Typography>

          <Box container spacing={2}>
            <Box item xs={10} margin={1} padding={1}>
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#54efc3" }}
                startIcon={<FlashOnIcon />}
                onClick={() => {}}
              >
                Easy Apply
              </Button>
            </Box>
            <Box item xs={10} margin={1} padding={1}>
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#4943da" }}
                startIcon={<LockOpenIcon />}
                onClick={() => {}}
              >
                Unlock Referral
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default JobPostCard;
