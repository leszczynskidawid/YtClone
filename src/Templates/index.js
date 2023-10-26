import { Box, Paper } from "@mui/material";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { PersistentDrawerRight } from "../Components/Drawer";
export const MainLayout = ({ children }) => {
  const [openDrowerState, setOpenDrowerState] = useState(false);
  return (
    <Paper elevation={0}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 50px",
          flexGrow: 1,
        }}
      >
        <Navbar openDrower={() => setOpenDrowerState(!openDrowerState)} />
        <PersistentDrawerRight open={openDrowerState} />
        {children}
      </Box>
    </Paper>
  );
};
