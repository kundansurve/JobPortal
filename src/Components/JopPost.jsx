import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { WrapText } from "@mui/icons-material";

const JobPostCard = ({
  companyLogo,
  companyName,
  roleName,
  jobLocation,
  minSalary,
  maxSalary,
  salaryCurrencyCode,
  jobDescription,
  minExp,
  maxExp
}) => {
  return (
    <Card className="job-card">

      <CardContent>
        <Box  margin={1} padding={1} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}>
        <Box item xs ={4}>
        <img src={companyLogo} alt={companyName} />
        </Box>
        <Box item xs={8} >
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
        

        <Typography variant="h6" color="textSecondary"  margin={1} padding={1} gutterBottom  component="span">Expected Salary: {salaryCurrencyCode} {minSalary} - {maxSalary}</Typography> 
        <Typography variant="body2"  margin={1} padding={1}>
        <Typography gutterBottom variant="h5" component="div">About:</Typography>
          {jobDescription?.substring(0, 500)}{" "}
          {jobDescription?.length > 500 ? "..." : ""}
          <Button size="small" onClick={() => null}>
            Expand
          </Button>
        </Typography>
        </Grid>
        <Typography variant="h6" color="textSecondary"  margin={1} padding={1} gutterBottom  component="span">
          Experience: {minExp} - {maxExp} years
        </Typography>

        <Box container spacing={2}>
          <Box item xs={10}  margin={1} padding={1}>
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
  );
};

export default JobPostCard;
