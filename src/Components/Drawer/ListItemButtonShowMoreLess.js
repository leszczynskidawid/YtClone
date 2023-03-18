import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ListItemButtonShowMoreLess = ({ showMore, setShowMore }) => {
  return (
    <ListItemButton onClick={setShowMore}>
      <ListItemIcon>
        {showMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItemIcon>
      <ListItemText primary={showMore ? "pokaż mniej " : "pokaż więcej"} />
    </ListItemButton>
  );
};
