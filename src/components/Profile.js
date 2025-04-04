import React from "react";
import { Card, CardContent, Avatar, Typography } from "@mui/material";

const Profile = ({ darkMode }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        textAlign: "center",
        mt: 3,
        backgroundColor: darkMode ? "#00264d" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <Avatar
        sx={{
          width: { xs: 80, sm: 100, md: 120 },
          height: { xs: 80, sm: 100, md: 120 },
          margin: "auto",
        }}
        src={`${process.env.PUBLIC_URL}/avt.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{darkMode ? "Elena N" : "Elena N"}</Typography>
        <Typography
          variant="body2"
          color={darkMode ? "#ffffff" : "text.secondary"}
        >
          Web Developer & UI Designer
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
