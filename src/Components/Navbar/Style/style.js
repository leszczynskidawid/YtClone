import { styled } from "@mui/system";
import { Box } from "@mui/system";
const AppBarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border: none;
  margin-top: 0.5rem;
`;
const AppBarFragmentsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  min-width: 9rem;
  align-items: center;
  padding: 0 20px;
`;
export { AppBarContainer, AppBarFragmentsContainer };
