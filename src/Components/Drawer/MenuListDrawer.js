import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButtonShowMoreLess } from "./ListItemButtonShowMoreLess";
import { useState } from "react";
import { styled } from "@mui/material/styles";
const SListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

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
        <ListItem key={item.id} disablePadding to={item.path}>
          <ListItemButton>
            <SListItemIcon>{item.icon}</SListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
      {list.length > displayMenuqtyStart && (
        <ListItemButtonShowMoreLess
          showMore={showMore}
          setShowMore={() => handleSetShowMoreOrLess()}
        />
      )}
    </List>
  );
};
