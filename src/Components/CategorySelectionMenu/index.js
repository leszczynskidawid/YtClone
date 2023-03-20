import React, { useState } from "react";

import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

const arrayTabsvalue = [
  { id: 1, value: "Wszystko", label: "wszystko" },
  { id: 2, value: "Palylisty YouTube Mix", label: "YouTube" },
  { id: 3, value: "Muzyka", label: "Muzyka" },
  { id: 4, value: "Gry", label: "Gry" },
  { id: 5, value: "Na żywo", label: "Na żywo" },
  { id: 6, value: "Koszykóka", label: "Koszykóka" },
  { id: 7, value: "Rapowanie ", label: "Rapowanie" },
  { id: 8, value: "Piłka nożna", label: "Piłka nożna" },
  { id: 9, value: "Osatnio przesłane", label: "Osatnio przesłane" },
  { id: 10, value: "Obejrzane", label: "Obejrzane" },
  { id: 11, value: "Nowe rekmoendacje", label: "Nowe rekmoendacje" },
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

export const CategorySelectionMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        bgcolor: "background.default",
        margin: "25px 0px",
        padding: "20px ",
      }}
    >
      <STabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons="auto"
      >
        {arrayTabsvalue.map((tab) => (
          <STab key={tab.id} label={tab.label} />
        ))}
      </STabs>
    </Box>
  );
};
