// SearchJobs.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { fetchJobs, setFilters } from "../Actions";
import JobPostCard from "../Components/JopPost";

const SearchJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const filters = useSelector((state) => state.filters);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchJobs(filters));
  }, [filters]);

  useEffect(() => {
    dispatch(fetchJobs(filters));
  }, []);


  return (
    <Grid container spacing={6}>
      {jobs.map((job) => (
        <Grid item key={job.id} xs={12} sm={6} md={4} lg={3}>
          <JobPostCard
            companyLogo={job.logoUrl}
            companyName={job.companyName}
            roleName={job.jobRole}
            jobLocation={job.location}
            maxSalary={job.maxJdSalary}
            minSalary={job.minJdSalary}
            jobDescription={job.jobDetailsFromCompany}
            salaryCurrencyCode={job.salaryCurrencyCode}
            minExp={job.minExp}
            maxExp={job.maxExp}
            onEasyApplyClick={() => {}}
            onUnlockReferralClick={() => {}}
          />
        </Grid>
      ))}
      {loading && <Typography variant="body1">Loading...</Typography>}
    </Grid>
  );
};

export default SearchJobs;
