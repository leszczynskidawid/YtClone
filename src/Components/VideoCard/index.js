import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import {
  LocalConvenienceStoreOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import { useOpenMenu } from "../../Context/openMenuContext";
import { PopupMenu } from "../PopupMenu";
import { PopupMenuCard } from "../PopupMenu/PopupMenuCard/index";
import { PopupMenuAccoutItems } from "../PopupMenu/PopupMenuAccout";
import { useMenuOpenPop } from "../../Hooks/useMenuOpenPop";
import { useState } from "react";

const SCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  transitionDelay: "2s",
  maxWidth: "400px",
  boxShadow: "none",
}));

export const VideoCard = ({
  image,
  avatar,
  titleFilm,
  canalName,
  displaysNumber,
  addedTime,
}) => {
  const [moreVertOpen, setMoreVertOpen] = useState(false);

  const [value] = useMenuOpenPop();
  const { handleClose, handleClick, open, anchorEl } = value;

  return (
    <SCard
      onMouseOver={() => setMoreVertOpen(true)}
      onMouseOut={() => setMoreVertOpen(false)}
    >
      <div>
        <CardMedia component="img" image={image} alt="green iguana" />
        <CardContent
          sx={{
            display: "flex",
            gap: "14px",
            position: "relative",
          }}
        >
          <Box>
            <Avatar>
              <img src={avatar} />
            </Avatar>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ wordBreak: "break-word" }}>
              {titleFilm}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {canalName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {displaysNumber} wyświetlen - {addedTime} temu
            </Typography>
          </Box>
          <Box sx={{ position: "absolute", right: "10px", top: "10px" }}>
            <IconButton onClick={handleClick}>
              {moreVertOpen && <MoreVertOutlined />}
            </IconButton>
            <PopupMenu
              open={value.open}
              handleClose={handleClose}
              handleClick={handleClick}
              anchorEl={anchorEl}
              children={<PopupMenuCard />}
            />
          </Box>
        </CardContent>
      </div>
    </SCard>
  );
};
