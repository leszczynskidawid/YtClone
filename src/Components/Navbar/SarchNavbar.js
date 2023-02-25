import { SearchInput } from "../SearchInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LoginButton } from "../LoginButton";
import { Box } from "@mui/system";

export const SarchNavbar = () => {
  return (
    <Box>
      <ArrowBackIcon />
      <SearchInput />
      <LoginButton />
    </Box>
  );
};
