import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useState } from "react";

export const MenuListDrawer = ({ list, displayMenuqtyStart = 1 }) => {
  const [showMore, setShowMore] = useState(false);
  const [menuItems, setMenuItems] = useState(displayMenuqtyStart);

  const handleSetShowMoreOrLess = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setMenuItems(list.length);
    } else {
      setMenuItems(displayMenuqtyStart);
    }
  };

  return (
    <List>
      {list?.slice(0, menuItems).map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItemButtonShowMoreLess
        showMore={showMore}
        setShowMore={() => handleSetShowMoreOrLess()}
      />
    </List>
  );
};
export const ListItemButtonShowMoreLess = ({
  showMore,
  setShowMore,
  children,
}) => {
  return (
    <ListItemButton onClick={setShowMore}>
      <ListItemIcon>
        {showMore ? (
          <KeyboardArrowDownIcon color="secondary" />
        ) : (
          <KeyboardArrowUpIcon />
        )}
      </ListItemIcon>
      <ListItemText primary={"pokaz wiecej"} />
    </ListItemButton>
  );
};
