import { Navbar } from "../Components/Navbar";
import { PersistentDrawerRight } from "../Drawer";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useColorModeContex } from "../Context/modeContext";

export const HomePage = () => {
  const [openDrowerState, setOpenDrowerState] = useState(false);
  const { colorMode } = useColorModeContex();

  return (
    <Box>
      <Navbar openDrower={() => setOpenDrowerState(!openDrowerState)} />
      <PersistentDrawerRight open={openDrowerState} />
      <button
        style={{ marginTop: "50px" }}
        onClick={() => colorMode.toggleColorMode()}
      >
        {`${localStorage.getItem("theme")}`}
      </button>
    </Box>
  );
};
