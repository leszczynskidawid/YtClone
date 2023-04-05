import { Navbar } from "../Components/Navbar";
import { PersistentDrawerRight } from "../Components/Drawer/index";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

import { VideoCard } from "../Components/VideoCard";
import { CategorySelectionMenu } from "../Components/CategorySelectionMenu";
import { useApi } from "../Hooks/useApi";

export const HomePage = () => {
  const [openDrowerState, setOpenDrowerState] = useState(false);

  const videoCardsArray = [
    {
      id: 1,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 2,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 3,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 4,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 5,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 6,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 7,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 8,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
    {
      id: 9,
      image:
        "https://i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBCvsan61FMyGcO5mvoXyOwyA9O7Q",
      avatar:
        "https://yt3.ggpht.com/ytc/AL5GRJU8oz44HeW3bqRYW9dcoCSwqdLd0M7VsqZjHJZMyA=s68-c-k-c0x00ffffff-no-rj",
      titleFilm: "Street Workers",
      canalName: "Bortez Live",
      displaysNumber: 1.5,
      addedTime: 1,
    },
  ];

  const apikey = "AIzaSyAHrLXKBf04opIhcAWHNVpaSv2iDBFKXhU";
  const { data, error } = useApi(
    `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=wr3VmbZdVA4&key=${apikey}`
  );
  const array = data.items;

  array?.map((card) => console.log(card.snippet));

  return (
    <Paper elevation={0}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "11px 100px",
        }}
      >
        <Navbar openDrower={() => setOpenDrowerState(!openDrowerState)} />
        <PersistentDrawerRight open={openDrowerState} />
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              position: "sticky",
              top: "23px",
              zIndex: 999,
            }}
          >
            <CategorySelectionMenu />
          </Grid>
          {array?.map((card) => (
            <Grid item xs={12} sm={10} md={5} lg={3} xl={3} key={card.id}>
              <VideoCard
                image={card.snippet.thumbnails.standard.url}
                // avatar={data.items[0].snippet.title}
                titleFilm={card.snippet.title}
                canalName={card.snippet.channelTitle}
                displaysNumber={card.statistics.viewCount}
                addedTime={card.snippet.publishedAt}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};
