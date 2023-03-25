import { PopupMenuItem } from "../PopupMenuItem";
import Settings from "@mui/icons-material/Settings";
export const PopupMenuCard = () => {
  return (
    <>
      <PopupMenuItem label={"Twoj Kanał "} icon={<Settings />} />
      <PopupMenuItem label={"YouTube Studio "} icon={<Settings />} />
    </>
  );
};
