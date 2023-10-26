import { Navbar } from "../Components/Navbar";
import { PersistentDrawerRight } from "../Components/Drawer/index";
import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { VideoCard } from "../Components/VideoCard";
import { CategorySelectionMenu } from "../Components/CategorySelectionMenu";
import { useApi } from "../Hooks/useApi";
import { endpoints } from "../Constants/Endpoints/getEnpoins";

export const HomePage = () => {
  const [openDrowerState, setOpenDrowerState] = useState(false);
  const { loading, fetchData, error, data } = useApi();
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    endpoints.GET_MOST_POPULAR_VIDEO_PL
  );
  const [secondLoader, setSecondLoader] = useState(false);

  const observerRef = useRef();

  const fetchVideoData = async () => {
    try {
      setSecondLoader(true);
      const response = await fetchData(
        `${selectedCategoryName}&pageToken=${pageToken || " "}`
      );

      const videoItems = response;

      const videoData = await Promise.all(
        videoItems.items.map(async (item) => {
          const channelId = item.snippet.channelId;

          const channelResponse = await fetchData(
            `${endpoints.GET_VIDEO_BY_ID_CHANNEL}&id=${channelId}`
          );

          const channelItem = channelResponse.items[0];

          return {
            videoId: item.id,
            channelId: item.snippet.channelId,
            title: item.snippet.title,
            videoImage: item.snippet.thumbnails.high.url,
            channelTitle: channelItem.snippet.title,
            channelImage: channelItem.snippet.thumbnails.default.url,
            publishDate: item.snippet.publishedAt,
            viewCount: item.statistics.viewCount,
            likeCount: item.statistics.likeCount,
            dislikeCount: item.statistics.dislikeCount,
            commentCount: item.statistics.commentCount,
          };
        })
      );

      if (selectedCategoryName !== endpoints.GET_MOST_POPULAR_VIDEO_PL) {
        setVideos(videoData);
      } else {
        setVideos((prevVideos) => [...prevVideos, ...videoData]);
      }

      setPageToken(videoItems.nextPageToken);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setSecondLoader(false);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [selectedCategoryName]);

  const handleObserverIntersection = (entries) => {
    const [entry] = entries;
    if (
      entry.isIntersecting &&
      entry.intersectionRatio > 0 &&
      pageToken &&
      !loading &&
      entry.boundingClientRect.top >= 0
    ) {
      fetchVideoData();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserverIntersection, {
      root: null,
      rootMargin: "10px",
      threshold: 0.1,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [pageToken, loading, observerRef]);

  const handleChange = (event, newValue) => {
    setSelectedCategoryName(newValue);
  };

  return (
    <Paper elevation={0}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <Navbar openDrower={() => setOpenDrowerState(!openDrowerState)} />
        <PersistentDrawerRight open={openDrowerState} />

        <Grid
          container
          columnSpacing={2}
          rowSpacing={2}
          justifyContent={"center"}
        >
          <Grid
            item
            xs={12}
            sx={{
              position: "sticky",
              top: "23px",
              zIndex: 999,
            }}
          >
            <CategorySelectionMenu
              handleChange={handleChange}
              selectedCategoryName={selectedCategoryName}
            />
          </Grid>

          {videos?.map((cardData) => (
            <Grid item key={cardData.id}>
              <VideoCard
                vidoCardDetailsData={cardData}
                loading={secondLoader}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <div ref={observerRef} style={{ height: "1px", color: "red" }}></div>
    </Paper>
  );
};
