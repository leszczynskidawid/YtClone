import { Grid, Box, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderMenuAccount = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        background: "black",
        zIndex: 99,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexWrap: "nowrap", padding: " 20px 30px" }}
      >
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: "50px", height: "50px" }}
          />
        </Grid>
        <Grid item marginRight={"50px"}>
          <Typography variant="h6">Dawid Leszczynsi</Typography>
          <Typography variant="h6">@dawidleszcyski902</Typography>
          <Link
            to="google.com"
            style={{
              textDecoration: "none",
              fontWeight: "500",
              display: "block",
              color: "#3EA6FF",
              padding: "10px 0",
            }}
          >
            Zarządzaj kontem google
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
