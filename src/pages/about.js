import React from "react";
import { Card, CardContent, Avatar, Typography, Grid } from "@mui/material";

const About = ({ submissions, darkMode }) => {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "auto",
        marginTop: 20,
        textAlign: "center",
        backgroundColor: darkMode ? "#001f3f" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        People
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {submissions.map((submission, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: darkMode ? "#00264d" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <Avatar
                  src={
                    submission.image
                      ? URL.createObjectURL(submission.image)
                      : `${process.env.PUBLIC_URL}/default-avatar.jpg`
                  }
                  sx={{ width: 120, height: 120, margin: "auto" }}
                />
                <Typography variant="h6">{submission.name}</Typography>
                <Typography color="text.secondary">
                  {submission.email}
                </Typography>
                <Typography color="text.secondary">
                  <span style={{ color: "green" }}>Country:</span>{" "}
                  {submission.country}
                </Typography>
                <Typography color="text.secondary">
                  <span style={{ color: "blue" }}>Gender:</span>{" "}
                  {submission.gender}
                </Typography>
                <Typography color="text.secondary">
                  <span style={{ color: "purple" }}>Date of Birth:</span>{" "}
                  {submission.date
                    ? new Date(submission.date).toLocaleDateString()
                    : "N/A"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default About;
