import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Divider, IconButton } from "@mui/material";
import { SButton } from "./Button";

export const ButtonsActionWrapper = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <div>
        <SButton
          sx={{
            margin: 0,
            borderRadius: "20px 0px 0 20px",
            height: "100%",
            borderRight: "1px solid white",
          }}
          startIcon={<ThumbUpOffAltIcon />}
        >
          2131
        </SButton>

        <SButton
          sx={{
            margin: "0",
            borderRadius: "0px 20px 20px 0px",
            height: "100%",
          }}
          startIcon={<ThumbDownOffAltIcon />}
        ></SButton>
      </div>

      <SButton startIcon={<ReplyOutlinedIcon />}>Udostępnij</SButton>

      <IconButton>
        <MoreHorizIcon />
      </IconButton>
    </Box>
  );
};
