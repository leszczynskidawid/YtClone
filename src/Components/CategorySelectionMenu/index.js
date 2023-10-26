import React, { useState } from "react";

import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import { endpoints } from "../../Constants/Endpoints/getEnpoins";

const { ANIMALS, MUSIC, GAMES, SHORTS, TRAVELS, SPORTS, PEOPLE } =
  endpoints.GET_CATEGORIES_FILM;

const arrayTabsvalue = [
  { id: 1, value: endpoints.GET_MOST_POPULAR_VIDEO_PL, label: "wszystko" },
  {
    id: 2,
    value: ANIMALS,
    label: "Zwierzęta domowe",
  },
  { id: 3, value: MUSIC, label: "Muzyka" },
  { id: 4, value: GAMES, label: "Gry" },
  { id: 5, value: SHORTS, label: "NEWS" },
  { id: 6, value: TRAVELS, label: "Podróże" },
  { id: 7, value: SPORTS, label: "Piłka nożna" },
  {
    id: 8,
    value: PEOPLE,
    label: "edukacja",
  },
];

const STab = styled(Tab)(({ theme }) => ({
  padding: " 10px",
  margin: " 0 12px",
  background: theme.palette.grey.main,
  color: theme.palette.text.primary,
  borderRadius: "10px",
}));
const STabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabScrollButton-root": {
    boxShadow: `0px 0px 100px 90px ${theme.palette.background.default}`,
    zIndex: "999",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root:hover": {
    background: theme.palette.action.hover,
  },
  "& .MuiTab-root.Mui-selected": {
    color: theme.palette.grey.main,
    background: theme.palette.primary.main,
  },
}));

export const CategorySelectionMenu = ({
  selectedCategoryName,
  handleChange,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        margin: "25px 40px",
      }}
    >
      <STabs
        value={selectedCategoryName}
        onChange={handleChange}
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons="auto"
      >
        {arrayTabsvalue.map((tab) => (
          <STab key={tab.id} label={tab.label} value={tab.value} />
        ))}
      </STabs>
    </Box>
  );
};
