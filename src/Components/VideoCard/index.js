import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import { MoreVertOutlined } from "@mui/icons-material";
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
  const [moreVertOpen, setMoreVertOpen] = React.useState(false);

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
            <IconButton>{moreVertOpen && <MoreVertOutlined />}</IconButton>
          </Box>
        </CardContent>
      </div>
    </SCard>
  );
};
