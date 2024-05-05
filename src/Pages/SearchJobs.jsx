// SearchJobs.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { fetchJobs, setFilters } from '../Actions';

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

  const handleScroll = () => {
    if (loading ||!hasMore) return;
    const lastJob = document.querySelector('.job-card:last-child');
    const lastJobOffset = lastJob.offsetTop + lastJob.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset >= lastJobOffset) {
      setLoading(true);
      dispatch(fetchJobs(filters, jobs.length));
    }
  };

  const handleFilterChange = (filter, value) => {
    dispatch(setFilters({...filters, [filter]: value }));
  };

  return (
    <Grid container spacing={2}>
      {jobs.map((job) => (
        <Grid item key={job.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="job-card">
            <CardContent>
              <Typography variant="h5">{job.title}</Typography>
              <Typography variant="body1">{job.company}</Typography>
              <Typography variant="body1">{job.location}</Typography>
              <Typography variant="body2" noWrap={true}>
                {job.description.substring(0, 100)}{' '}
                {job.description.length > 100? '...' : ''}
                <Button size="small" onClick={() => console.log('Expand description')}>
                  Expand
                </Button>
              </Typography>
              <Typography variant="body1">Experience: {job.experience} years</Typography>
              <Button variant="contained" color="primary" onClick={() => console.log('Apply')}>
                Apply
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {loading && <Typography variant="body1">Loading...</Typography>}
    </Grid>
  );
};

export default SearchJobs;