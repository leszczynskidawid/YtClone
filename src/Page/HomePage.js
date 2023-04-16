import { Navbar } from "../Components/Navbar";
import { PersistentDrawerRight } from "../Components/Drawer/index";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { VideoCard } from "../Components/VideoCard";
import { CategorySelectionMenu } from "../Components/CategorySelectionMenu";
import { useApi } from "../Hooks/useApi";
import { endpoints } from "../Constants/Endpoints/getEnpoins";

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

  const { data, loading, fetchData, error } = useApi();
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    endpoints.GET_MOST_POPULAR_VIDEO_PL
  );

  useEffect(() => {
    fetchData(selectedCategoryName);
  }, [selectedCategoryName]);

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
          {data.items?.map((cardData) => (
            <Grid item key={cardData.id}>
              <VideoCard data={cardData} loading={loading} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};
