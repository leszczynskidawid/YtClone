import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HomeIcon from "@mui/icons-material/Home";
import { MenuListDrawer } from "./MenuListDrawer";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HistoryIcon from "@mui/icons-material/History";
import CameraIndoorOutlinedIcon from "@mui/icons-material/CameraIndoorOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Avatrs } from "../assets/avatars/avatars";
const ItemMenuSectioSubscribe = [
  { id: 1, text: "Kanał sportowy", icon: Avatrs.kanalsportowy, path: "/home" },
  { id: 2, text: "Wolski o wojnie", icon: Avatrs.wolski },
  { id: 3, text: "Strategy and future", icon: Avatrs.future },
  { id: 4, text: "Historia bez cenzury", icon: Avatrs.historiaBezCenzury },
  { id: 5, text: "Kanał sportowy", icon: Avatrs.kanalsportowy },
  { id: 6, text: "Kanał sportowy", icon: Avatrs.kanalsportowy },
];

const ItemMenuFirstSection = [
  { id: 1, text: "Główna", icon: <HomeIcon />, path: "/home" },
  { id: 2, text: "Shorts", icon: <InboxIcon />, path: "" },
  { id: 3, text: "Subskryubcje", icon: <SubscriptionsIcon />, path: "" },
];
const ItemMenuSecondSection = [
  { id: 1, text: "Biblioteka", icon: <LibraryMusicIcon /> },
  { id: 2, text: "Histora", icon: <HistoryIcon /> },
  { id: 3, text: "Twoje filmy", icon: <CameraIndoorOutlinedIcon /> },
  { id: 4, text: "Do obejrzenia", icon: <WatchLaterOutlinedIcon /> },
  { id: 5, text: "Twoje klipy", icon: <ContentCutOutlinedIcon /> },
  { id: 6, text: "Polubione filmy", icon: <ThumbUpAltOutlinedIcon /> },
  {
    id: 7,
    text: "CRQueue",
    icon: <QueueMusicOutlinedIcon />,
  },
  {
    id: 8,
    text: "Moja",
    icon: <QueueMusicOutlinedIcon />,
  },
  {
    id: 9,
    text: "Składanka",
    icon: <SlowMotionVideoIcon />,
  },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("tablet")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});
const SDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
    marginTop: "90px",
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    marginTop: "90px",
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  zIndex: theme.zIndex.drawer + 1,
}));

export const PersistentDrawerRight = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={() => handleDrawerOpen()} />
      <Link to="/home" relative="path">
        Cancel
      </Link>

      <Box sx={{ display: "flex" }}>
        <SDrawer variant="permanent" open={open}>
          <DrawerHeader color="primary" />
          <Divider />
          <MenuListDrawer
            list={ItemMenuFirstSection}
            displayMenuqtyStart={ItemMenuFirstSection.length}
          />

          {open && (
            <>
              <Divider />
              <MenuListDrawer
                list={ItemMenuSecondSection}
                displayMenuqtyStart={4}
              />
              <Divider />
              <Typography variant="h5" padding={"10px"} textAlign={"left"}>
                Subskrypcje
              </Typography>
              <List>
                {ItemMenuSectioSubscribe.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <img
                          src={item.icon}
                          style={{ borderRadius: "50%", maxHeight: "25px" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </>
          )}
        </SDrawer>
      </Box>
    </>
  );
};
