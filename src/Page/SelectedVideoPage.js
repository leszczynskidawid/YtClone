import {
  Box,
  Typography,
  Grid,
  CardMedia,
  List,
  ListItem,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { MainLayout } from "../Templates";
import { styled } from "@mui/system";
import { MoreVertOutlined } from "@mui/icons-material";
import { CategorySelectionMenu } from "../Components/CategorySelectionMenu";
import { useEffect, useState } from "react";
import { useApi } from "../Hooks/useApi";
import { endpoints } from "../Constants/Endpoints/getEnpoins";
import { useParams } from "react-router-dom";
import { VidoSelected } from "../Components/VideoSelected";
import Skeleton from "@mui/material/Skeleton";

export const SelectedVidoPage = () => {
  const { loading, fetchData, error, data } = useApi();
  const [video, setVideo] = useState();
  const params = useParams();

  const s = async () => {
    const videoResponse = await fetchData(
      `${endpoints.GET_VIDEO_BY_ID}&id=${params.id}`
    );

    const channelId = videoResponse.items[0].snippet.channelId;

    const channelResponse = await fetchData(
      `${endpoints.GET_VIDEO_BY_ID_CHANNEL}&id=${channelId}`
    );

    const enpoint = `commentThreads?part=snippet&videoId=${params.id}`;
    const commnetsResults = await fetchData(enpoint);

    setVideo({
      ...videoResponse.items[0].snippet,
      channelImage: channelResponse.items[0].snippet.thumbnails.default.url,
      subscriberCount: channelResponse.items[0].statistics.subscriberCount,
      statistic: channelResponse.items[0].statistics,
      videoId: params.id,
    });
  };

  useEffect(() => {
    s();
  }, []);
  return (
    <MainLayout>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{ height: "250px", width: "100%" }}
            />
          ) : (
            <VidoSelected data={video} />
          )}
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Box>
            <CategorySelectionMenu />
            <List>
              <ListItem sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      height: "100px",
                      overflow: "hidden",
                      flexBasis: "50%",
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      src="https://i.ytimg.com/vi/RcT0vT-KXlA/sddefault.jpg"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">
                      Material UI V5 Complete in One Video (Hindi)
                    </Typography>
                    <Box>
                      <span>nazwa kanałi</span>
                      <span>liczba wyswielten + 4 miesiace temu</span>
                    </Box>
                  </Box>
                </Box>
                <MoreVertOutlined
                  sx={{ position: "absolute", top: "10px", right: "10px" }}
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
