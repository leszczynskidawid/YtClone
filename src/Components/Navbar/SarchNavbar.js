import { SearchInput } from "../SearchInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBarContainer } from "./Style/style";
import { IconButton } from "@mui/material";

export const SarchNavbar = ({ closeAction }) => {
  return (
    <AppBarContainer>
      <IconButton onClick={closeAction}>
        <ArrowBackIcon color="primary" />
      </IconButton>
      <SearchInput />
    </AppBarContainer>
  );
};
