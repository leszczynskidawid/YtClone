import { Navbar } from "../Components/Navbar";
import { PersistentDrawerRight } from "../Components/Drawer/index";
import { Box, Grid, Paper } from "@mui/material";
import { useState } from "react";

import { VideoCard } from "../Components/VideoCard";

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

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar openDrower={() => setOpenDrowerState(!openDrowerState)} />
      <PersistentDrawerRight open={openDrowerState} />
      <Paper>
        <Box
          style={{
            padding: "40px",
            display: "flex",
            flexGrow: "1",
            padding: "50px",
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            my={2}
          >
            {videoCardsArray.map((card) => (
              <Grid item xs={12} sm={10} md={5} lg={4} xl={3} key={card.id}>
                <VideoCard
                  image={card.image}
                  avatar={card.avatar}
                  titleFilm={card.titleFilm}
                  canalName={card.canalName}
                  displaysNumber={card.displaysNumber}
                  addedTime={card.addedTime}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
