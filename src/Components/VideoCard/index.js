import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import { MoreVertOutlined } from "@mui/icons-material";
import { useMenuOpenPop } from "../../Hooks/useMenuOpenPop";
import { PopupMenu } from "../PopupMenu";
import { PopupMenuCard } from "../PopupMenu/PopupMenuCard";
import { VIDEO_CARD_MEDNU_ID } from "../PopupMenu/Constants/IdPopupMenu";
import { useApi } from "../../Hooks/useApi";

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
  const { open, anchorEl, handleClick, handleCloseMenu, type } = value;

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
            <Typography
              variant="h6"
              sx={{ wordBreak: "break-word", marginLeft: "20px" }}
            >
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
            <IconButton
              onClick={(e) => handleClick(e, VIDEO_CARD_MEDNU_ID)}
              aria-controls={open ? VIDEO_CARD_MEDNU_ID : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              {moreVertOpen && <MoreVertOutlined />}
            </IconButton>
            <PopupMenu
              id={VIDEO_CARD_MEDNU_ID}
              open={open && type === VIDEO_CARD_MEDNU_ID}
              handleClose={handleCloseMenu}
              anchorEl={anchorEl}
              children={<PopupMenuCard />}
            />
          </Box>
        </CardContent>
      </div>
    </SCard>
  );
};
