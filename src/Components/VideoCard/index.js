import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, styled } from "@mui/material";
import { Box } from "@mui/system";
import { MoreVertOutlined } from "@mui/icons-material";
import { useMenuOpenPop } from "../../Hooks/useMenuOpenPop";
import { PopupMenu } from "../PopupMenu";
import { PopupMenuCard } from "../PopupMenu/PopupMenuCard";
import { VIDEO_CARD_MEDNU_ID } from "../PopupMenu/Constants/IdPopupMenu";
import Skeleton from "@mui/material/Skeleton";
import moment from "moment/moment";
import "moment/locale/pl";

const SCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  transitionDelay: "2s",
  height: "100%",
  width: "490px",
  background: theme.palette.background.paper,

  boxShadow: "none",
}));

export const VideoCard = ({ data, loading }) => {
  const [moreVertOpen, setMoreVertOpen] = useState(false);
  const [value] = useMenuOpenPop();
  const { open, anchorEl, handleClick, handleCloseMenu, type } = value;
  const { title, channelTitle, publishedAt, thumbnails } = data.snippet;
  const { viewCount } = data.statistics;

  return (
    <SCard
      onMouseOver={() => setMoreVertOpen(true)}
      onMouseOut={() => setMoreVertOpen(false)}
    >
      <div>
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ height: "250px", width: "100%" }}
          />
        ) : (
          <CardMedia
            sx={{
              height: "250px",
              width: "100%",
            }}
            component="img"
            image={thumbnails.standard.url}
            alt="green iguana"
          />
        )}

        <CardContent
          sx={{
            display: "flex",
            gap: "14px",
            position: "relative",
          }}
        >
          <Box>
            {loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={50}
                height={50}
              />
            ) : (
              <Avatar>
                <img src={null} />
              </Avatar>
            )}
          </Box>
          <Box sx={{ marginRight: "20px" }}>
            {loading ? (
              <Skeleton animation="wave" height={50} width={300} />
            ) : (
              <Typography
                variant="h6"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                }}
              >
                {title}
              </Typography>
            )}
            {loading ? (
              <Skeleton animation="wave" sx={{ width: "250px" }} />
            ) : (
              <>
                <Typography variant="body2" color="text.secondary">
                  {channelTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {viewCount} wyświetlen {"* "}
                  {moment(publishedAt).startOf("hour").fromNow()}
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ position: "absolute", right: "5px", top: "10px" }}>
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
