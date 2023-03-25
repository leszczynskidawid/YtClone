import { HeaderMenuAccount } from "./headerMenu";
import Settings from "@mui/icons-material/Settings";
import { Divider } from "@mui/material";
import { PopupMenuItem } from "../PopupMenuItem";
import { PopupMenu } from "..";

export const PopupMenuAccoutItems = () => {
  return (
    <>
      <HeaderMenuAccount />
      <PopupMenuItem label={"Twoj Kanał "} icon={<Settings />} />
      <PopupMenuItem label={"YouTube Studio "} icon={<Settings />} />
      <PopupMenuItem label={"Przełącz konto "} icon={<Settings />} switchedTo />
      <PopupMenuItem label={"Wyloguj się "} icon={<Settings />} />
      <Divider />
      <PopupMenuItem label={"Zakupy i subskrypcje "} icon={<Settings />} />
      <PopupMenuItem label={"Twoje dane YouTube"} icon={<Settings />} />
      <Divider />
      <PopupMenuItem
        label={`wyglad ${localStorage.getItem("theme")}`}
        icon={<Settings />}
        switchedTo
      />
      <PopupMenuItem label={"Język polski "} icon={<Settings />} switchedTo />
      <PopupMenuItem
        label={"Tryb ograniczonej widoczności:wył"}
        icon={<Settings />}
      />
      <PopupMenuItem
        label={"lokalizacja Polska  "}
        icon={<Settings />}
        switchedTo
      />
      <PopupMenuItem label={"Skróty klawiszowe"} icon={<Settings />} />
      <Divider />
      <PopupMenuItem label={"Ustawienia  "} icon={<Settings />} />
      <Divider />
      <PopupMenuItem label={"Pomoc "} icon={<Settings />} />
      <PopupMenuItem label={"Prześlij opinie"} icon={<Settings />} />
    </>
  );
};

// nie moge uzyc cotextu poniewa działą dla całej aplikacji -(state open )wiec kiedy klikam state open jestr dla wszystkich menu na treu musze zropbix custom hook ktory tylko bedzdie przeczłączał moj state niezlaqeżnie od klikniętego przycisku
