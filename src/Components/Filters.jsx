// Filters.js
import React from 'react';
import { Grid, TextField, Select, MenuItem } from '@mui/material';

const Filters = () => {
  const [minExperience, setMinExperience] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [remote, setRemote] = React.useState('');
  const [techStack, setTechStack] = React.useState('');
  const [role, setRole] = React.useState('');
  const [minBasePay, setMinBasePay] = React.useState('');

  const handleFilterChange = (filter, value) => {
    // dispatch setFilters action here
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          label="MinExperience"
          value={minExperience}
          onChange={(e) => setMinExperience(e.target.value)}
          onBlur={() => handleFilterChange('minExperience', minExperience)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          onBlur={() => handleFilterChange('company', company)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onBlur={() => handleFilterChange('location', location)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Select
          value={remote}
          onChange={(e) => setRemote(e.target.value)}
          onBlur={() => handleFilterChange('remote', remote)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="onsite">On-site</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          label="Tech Stack"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          onBlur={() => handleFilterChange('techStack', techStack)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          onBlur={() => handleFilterChange('role', role)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          label="Min Base Pay"
          value={minBasePay}
          onChange={(e) => setMinBasePay(e.target.value)}
          onBlur={() => handleFilterChange('minBasePay', minBasePay)}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;